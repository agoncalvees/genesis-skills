#!/usr/bin/env node
/**
 * Simulates a judge's first contact with the app and records evidence for the panel.
 *
 *   node observe.mjs <url> [--out design/judging] [--steps 6] [--click "text=Usar exemplo"]
 *
 * For 360 and 1440 px: time to first content and to load, the screen at 5 s,
 * full page, the main action (first [data-story=action] control, or --click),
 * the ?demo=1 tour (PageDown up to --steps), console/page errors, horizontal
 * overflow, visible text of the first screen, and axe violations when
 * @axe-core/playwright is installed. Writes observation.json + PNGs.
 * Judges then explore further with their own Playwright actions.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";
import { observationPolicy } from "./visual-policy.mjs";

const { values: opt, positionals: pos } = parseArgs({
	allowPositionals: true,
	options: {
		out: { type: "string" },
		steps: { type: "string" },
		click: { type: "string" },
		profile: { type: "string", default: "product" },
		"require-input": { type: "string" },
		"no-require-input": { type: "boolean" },
	},
});
const url = pos[0];
if (!url) {
	console.error("Uso: node observe.mjs <url> [--out design/judging] [--steps 6] [--click <seletor>] [--profile product|tool|landing] [--require-input true|false] [--no-require-input]");
	process.exit(1);
}
const out = opt.out ?? "design/judging";
const maxSteps = Number(opt.steps ?? 6);
const profile = opt.profile;
if (!["product", "tool", "landing"].includes(profile)) throw new Error(`Perfil inválido: ${profile}`);
const requireInput = !opt["no-require-input"] &&
	(opt["require-input"] === undefined ? profile === "tool" : opt["require-input"] === "true");
mkdirSync(out, { recursive: true });

const require = createRequire(join(resolve(process.cwd()), "package.json"));
let chromium;
for (const name of ["@playwright/test", "playwright"]) {
	try {
		({ chromium } = require(name));
		break;
	} catch {}
}
if (!chromium) {
	console.error("Playwright não encontrado no projeto: bun add -d @playwright/test && bunx playwright install chromium");
	process.exit(1);
}
let AxeBuilder = null;
try {
	AxeBuilder = require("@axe-core/playwright").default;
} catch {}

const report = { url, observedAt: new Date().toISOString(), viewports: [] };
const browser = await chromium.launch();
try {
	for (const width of [360, 1440]) {
		const height = width < 600 ? 800 : 900;
		const context = await browser.newContext({ viewport: { width, height } });
		const page = await context.newPage();
		const errors = [];
		page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
		page.on("console", (m) => m.type() === "error" && errors.push(`console: ${m.text()}`));
		const v = { width, shots: {} };
		const t0 = Date.now();
		const response = await page.goto(url, { waitUntil: "domcontentloaded" });
		v.status = response?.status();
		v.domContentLoadedMs = Date.now() - t0;
		await page.waitForLoadState("networkidle").catch(() => {});
		v.networkIdleMs = Date.now() - t0;
		const remaining = 5000 - (Date.now() - t0);
		if (remaining > 0) await page.waitForTimeout(remaining);
		const shot = async (name, full = false) => {
			const path = join(out, `${name}-${width}.png`);
			await page.screenshot({ path, fullPage: full });
			v.shots[name] = path;
		};
		await shot("5s");
		v.firstScreenText = (
			await page.evaluate(() => {
				const lines = [];
				const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
				while (walker.nextNode()) {
					const el = walker.currentNode;
					if (!/^(H1|H2|H3|P|BUTTON|A|LABEL|LI|DT|DD|SPAN)$/.test(el.tagName)) continue;
					const box = el.getBoundingClientRect();
					if (box.bottom <= 0 || box.top >= innerHeight || box.height === 0) continue;
					const text = el.innerText?.trim();
					if (text && text.length < 200 && !lines.includes(text)) lines.push(text);
				}
				return lines.slice(0, 30);
			})
		).join(" | ");
		v.story = await page.evaluate(() =>
			Object.fromEntries(
				["problem", "promise", "action", "result"].map((k) => {
					const el = document.querySelector(`[data-story=${k}]`);
					if (!el) return [k, "ausente"];
					const b = el.getBoundingClientRect();
					return [k, b.top >= 0 && b.bottom <= innerHeight ? "na primeira tela" : "abaixo da dobra"];
				}),
			),
		);
		v.firstScreen = await page.evaluate(() => {
			let words = 0;
			let numbers = 0;
			const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
			while (walker.nextNode()) {
				const node = walker.currentNode;
				const el = node.parentElement;
				if (!el) continue;
				const box = el.getBoundingClientRect();
				const style = getComputedStyle(el);
				if (box.bottom <= 0 || box.top >= innerHeight || box.height === 0 || style.visibility === "hidden" || style.display === "none") continue;
				const text = node.textContent.trim();
				if (!text) continue;
				words += text.split(/\s+/).length;
				numbers += (text.match(/\d+[.,]?\d*/g) || []).length;
			}
			let controls = 0;
			let liveInputs = 0;
			for (const el of document.querySelectorAll("button, a[href], input, select, textarea, [role=slider], [role=tab], [contenteditable=true]")) {
				const box = el.getBoundingClientRect();
				if (box.bottom > 0 && box.top < innerHeight && box.height > 0) controls++;
			}
			for (const el of document.querySelectorAll("input:not([type=hidden]):not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox]):not([type=radio]), textarea, [contenteditable=true]")) {
				const box = el.getBoundingClientRect();
				const style = getComputedStyle(el);
				if (box.bottom <= 0 || box.height === 0 || style.visibility === "hidden" || style.display === "none") continue;
				liveInputs++;
			}
			return { words, numbers, controls, liveInputs };
		});
		v.liveInput = v.firstScreen.liveInputs > 0 ? "ok" : "ausente";
		v.overflowPx = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
		await shot("pagina", true);

		// Main action, as a curious judge would click.
		const beforeUrl = page.url();
		const beforeText = await page.evaluate(() => document.body.innerText.slice(0, 4000));
		const target = opt.click
			? page.locator(opt.click).first()
			: profile === "product" ? null
				: page.locator("[data-story=action] button, [data-story=action] a, main button").first();
		if (target && await target.count()) {
			v.mainAction = (await target.innerText().catch(() => "")).trim();
			await target.click({ timeout: 3000 }).catch((e) => errors.push(`clique: ${e.message.split("\n")[0]}`));
			await page.waitForTimeout(900);
			await shot("apos-acao");
			const afterUrl = page.url();
			const afterText = await page.evaluate(() => document.body.innerText.slice(0, 4000));
			v.actionOutcome = { urlChanged: beforeUrl !== afterUrl, textChanged: beforeText !== afterText };
		} else {
			v.mainAction = target ? "nenhuma ação encontrada" : "não selecionada";
			if (opt.click) errors.push(`clique: seletor não encontrado: ${opt.click}`);
			v.actionOutcome = { urlChanged: false, textChanged: false };
		}

		// Guided demo.
		v.demo = { found: false, steps: [], checked: profile !== "product" };
		if (v.demo.checked) {
			const demoUrl = new URL(url);
			demoUrl.searchParams.set("demo", "1");
			await page.goto(demoUrl.toString(), { waitUntil: "networkidle" }).catch(() => {});
			await page.waitForTimeout(800);
			const dialog = page.getByRole("dialog");
			v.demo.found = (await dialog.count()) > 0;
			for (let i = 1; i <= maxSteps && (await dialog.count()); i++) {
				await page.waitForTimeout(500);
				const text = (await dialog.first().innerText().catch(() => "")).replace(/\s+/g, " ").trim();
				const path = join(out, `demo-${i}-${width}.png`);
				await page.screenshot({ path });
				v.demo.steps.push({ step: i, text, shot: path });
				await page.keyboard.press("PageDown");
			}
		}

		if (AxeBuilder) {
			await page.goto(url, { waitUntil: "networkidle" });
			try {
				const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
				v.axe = axe.violations.map((x) => `${x.id} (${x.nodes.length})`);
			} catch (e) {
				v.axe = `axe falhou: ${e.message.split("\n")[0]}`;
			}
		} else v.axe = "axe não instalado (@axe-core/playwright)";
		v.errors = errors;
		Object.assign(v, observationPolicy(v, profile, requireInput));
		report.viewports.push(v);
		await context.close();
	}
} finally {
	await browser.close();
}
report.profile = profile;
report.requireInput = requireInput;
report.p0 = report.viewports.flatMap((v) => v.gates.map((g) => `${v.width}px: ${g}`));
report.ok = report.p0.length === 0;
writeFileSync(join(out, "observation.json"), `${JSON.stringify(report, null, 2)}\n`);
for (const v of report.viewports) {
	console.log(
		`${v.width}px: status ${v.status}, conteúdo ${v.domContentLoadedMs} ms, rede ociosa ${v.networkIdleMs} ms, overflow ${v.overflowPx}px, erros ${v.errors.length}, densidade ${v.firstScreen.words} palavras/${v.firstScreen.numbers} números/${v.firstScreen.controls} controles (${v.density}), input ${v.liveInput}, demo ${v.demo.found ? `${v.demo.steps.length} passos` : "ausente"}, story ${JSON.stringify(v.story)}, gates ${v.gates.length ? v.gates.join("; ") : "ok"}`,
	);
}
console.log(`Evidências em ${out}/ (observation.json + capturas)`);
if (!report.ok) { console.error(`P0 falhou: ${report.p0.join(" | ")}`); process.exit(2); }
