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

const argv = process.argv.slice(2);
const opt = {};
const pos = [];
for (let i = 0; i < argv.length; i++) {
	if (argv[i].startsWith("--")) opt[argv[i].slice(2)] = argv[++i];
	else pos.push(argv[i]);
}
const url = pos[0];
if (!url) {
	console.error("Uso: node observe.mjs <url> [--out design/judging] [--steps 6] [--click <seletor>]");
	process.exit(1);
}
const out = opt.out ?? "design/judging";
const maxSteps = Number(opt.steps ?? 6);
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
			for (const el of document.querySelectorAll("button, a[href], input, select, textarea, [role=slider], [role=tab]")) {
				const box = el.getBoundingClientRect();
				if (box.bottom > 0 && box.top < innerHeight && box.height > 0) controls++;
			}
			return { words, numbers, controls };
		});
		const budget = width < 600 ? 35 : 60;
		v.density = v.firstScreen.words > budget ? `ACIMA do orçamento (${v.firstScreen.words} > ${budget} palavras)` : "ok";
		v.overflowPx = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
		await shot("pagina", true);

		// Main action, as a curious judge would click.
		const target = opt.click
			? page.locator(opt.click).first()
			: page.locator("[data-story=action] button, [data-story=action] a, main button").first();
		if (await target.count()) {
			v.mainAction = (await target.innerText().catch(() => "")).trim();
			await target.click({ timeout: 3000 }).catch((e) => errors.push(`clique: ${e.message.split("\n")[0]}`));
			await page.waitForTimeout(900);
			await shot("apos-acao");
		} else v.mainAction = "nenhuma ação encontrada";

		// Guided demo.
		const demoUrl = new URL(url);
		demoUrl.searchParams.set("demo", "1");
		await page.goto(demoUrl.toString(), { waitUntil: "networkidle" }).catch(() => {});
		await page.waitForTimeout(800);
		const dialog = page.getByRole("dialog");
		v.demo = { found: (await dialog.count()) > 0, steps: [] };
		if (v.demo.found) {
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
		report.viewports.push(v);
		await context.close();
	}
} finally {
	await browser.close();
}
writeFileSync(join(out, "observation.json"), `${JSON.stringify(report, null, 2)}\n`);
for (const v of report.viewports) {
	console.log(
		`${v.width}px: status ${v.status}, conteúdo ${v.domContentLoadedMs} ms, rede ociosa ${v.networkIdleMs} ms, overflow ${v.overflowPx}px, erros ${v.errors.length}, densidade ${v.firstScreen.words} palavras/${v.firstScreen.numbers} números/${v.firstScreen.controls} controles (${v.density}), demo ${v.demo.found ? `${v.demo.steps.length} passos` : "ausente"}, story ${JSON.stringify(v.story)}`,
	);
}
console.log(`Evidências em ${out}/ (observation.json + capturas)`);
