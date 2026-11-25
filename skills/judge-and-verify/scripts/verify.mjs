#!/usr/bin/env node
/**
 * Visual verification for any web app (framework-agnostic).
 *
 *   node verify.mjs <url> [--spec design/fidelity.json] [--out design/evidence]
 *
 * Checks, per viewport: the story elements are fully visible in the first
 * viewport (firstViewport), no horizontal overflow, no page errors, declared
 * fonts actually loaded (fonts), and computed styles of probes. Saves
 * full-page screenshots and a JSON report. Exit 1 on any divergence.
 *
 * fidelity.json:
 * {
 *   "viewports": [360, 768, 1440],
 *   "waitFor": "main",
 *   "firstViewport": ["[data-story=problem]", "[data-story=promise]", "[data-story=action]"],
 *   "fonts": ["Instrument Serif"],
 *   "states": [{ "name": "resultado", "actions": [{ "click": "text=Usar exemplo" }] }],
 *   "probes": [
 *     { "name": "Título", "selector": "h1", "expect": { "font-size": ">= 64px", "font-family": "~Instrument Serif" }, "viewports": [1440] },
 *     { "name": "Sinal", "selector": "[data-signal]", "expect": { "color": "{--signal}" } }
 *   ]
 * }
 * Expected values: "{--var}" or "{var}" (CSS custom property on :root), ">= 64px" / "<= 300ms" / "= 0px"
 * (numeric, px↔rem, s↔ms), "~text" (contains), anything else (equals; colors normalized).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { firstViewportSelectors } from "./visual-policy.mjs";

const argv = process.argv.slice(2);
const options = {};
const positional = [];
for (let i = 0; i < argv.length; i++) {
	if (argv[i].startsWith("--")) options[argv[i].slice(2)] = argv[++i];
	else positional.push(argv[i]);
}
const specPath = options.spec ?? "design/fidelity.json";
const profile = options.profile ?? "product";
if (!["product", "demo"].includes(profile)) throw new Error(`Perfil inválido: ${profile}`);
if (options.spec && !existsSync(specPath)) throw new Error(`Spec não encontrada: ${specPath}`);
const spec = existsSync(specPath)
	? JSON.parse(readFileSync(specPath, "utf8"))
	: {};
const url = positional[0] ?? spec.url;
if (!url) {
	console.error("Uso: node verify.mjs <url> [--profile product|demo] [--spec design/fidelity.json]");
	process.exit(1);
}
const out = options.out ?? "design/evidence";
mkdirSync(out, { recursive: true });

// Resolve Playwright from the project being verified.
const require = createRequire(join(resolve(process.cwd()), "package.json"));
let chromium;
for (const name of ["@playwright/test", "playwright"]) {
	try {
		({ chromium } = require(name));
		break;
	} catch {}
}
if (!chromium) {
	console.error(
		"Playwright não encontrado. Instale no projeto: bun add -d @playwright/test && bunx playwright install chromium (ou npm i -D @playwright/test && npx playwright install chromium).",
	);
	process.exit(1);
}

const colorProps = new Set([
	"color",
	"background-color",
	"border-color",
	"border-top-color",
	"outline-color",
	"fill",
	"stroke",
]);

function parse(raw) {
	const value = String(raw).trim();
	const cmp = /^(>=|<=|>|<|=)\s*(-?\d*\.?\d+)\s*([a-z%]*)$/i.exec(value);
	if (cmp) return { kind: "cmp", op: cmp[1], n: Number(cmp[2]), unit: cmp[3].toLowerCase() };
	const v = /^\{([^{}]+)\}$/.exec(value);
	if (v) return { kind: "var", name: v[1].startsWith("--") ? v[1] : `--${v[1]}` };
	if (value.startsWith("~")) return { kind: "has", text: value.slice(1).trim() };
	return { kind: "eq", text: value };
}

function toNumber(value, unit) {
	const m = /^(-?\d*\.?\d+)([a-z%]*)$/i.exec(String(value).split(",")[0].trim());
	if (!m) return undefined;
	const n = Number(m[1]);
	const from = m[2].toLowerCase();
	if (from === unit || !unit) return n;
	if (from === "px" && unit === "rem") return n / 16;
	if (from === "rem" && unit === "px") return n * 16;
	if (from === "s" && unit === "ms") return n * 1000;
	if (from === "ms" && unit === "s") return n / 1000;
	return undefined;
}

function compare(property, actual, exp, expected) {
	if (exp.kind === "cmp") {
		const n = toNumber(actual, exp.unit);
		if (n === undefined) return false;
		return {
			">=": n >= exp.n,
			"<=": n <= exp.n,
			">": n > exp.n,
			"<": n < exp.n,
			"=": Math.abs(n - exp.n) <= 0.5,
		}[exp.op];
	}
	if (exp.kind === "has") return actual.toLowerCase().includes(exp.text.toLowerCase());
	const first = (s) => s.split(",")[0].trim().replace(/^["']|["']$/g, "").toLowerCase();
	if (property === "font-family") return first(actual) === first(expected ?? "");
	return actual.trim().toLowerCase() === String(expected ?? "").trim().toLowerCase();
}

const rows = [];
const issues = [];
let AxeBuilder = null;
try { AxeBuilder = require("@axe-core/playwright").default; } catch {}

const browser = await chromium.launch();
try {
	for (const width of spec.viewports ?? [360, 768, 1440]) {
		const page = await browser.newPage({
			viewport: { width, height: width < 600 ? 800 : 900 },
		});
		const errors = [];
		page.on("pageerror", (e) => errors.push(e.message));
		const load = async () => {
			const response = await page.goto(url, { waitUntil: "networkidle" });
			if (response?.status() >= 400) issues.push(`${width}px: HTTP ${response.status()}`);
			await page.evaluate(() => document.fonts.ready);
			if (spec.waitFor) await page.waitForSelector(spec.waitFor);
		};
		await load();

		for (const selector of firstViewportSelectors(spec, profile)) {
			const state = await page.evaluate((q) => {
				const el = document.querySelector(q);
				if (!el) return "ausente";
				const box = el.getBoundingClientRect();
				const style = getComputedStyle(el);
				if (style.display === "none" || style.visibility === "hidden" || box.height === 0)
					return "invisível";
				return box.top >= 0 && box.bottom <= innerHeight
					? "ok"
					: `fora da primeira dobra (topo ${Math.round(box.top)}, base ${Math.round(box.bottom)}, janela ${innerHeight})`;
			}, selector);
			if (state !== "ok") issues.push(`${width}px: primeira tela sem ${selector}: ${state}`);
		}
		const loaded = await page.evaluate(() =>
			[...document.fonts]
				.filter((f) => f.status === "loaded")
				.map((f) => f.family.replace(/["']/g, "").toLowerCase()),
		);
		for (const font of spec.fonts ?? [])
			if (!loaded.some((f) => f.startsWith(font.toLowerCase())))
				issues.push(`${width}px: fonte não carregada: ${font}`);
		for (const state of [{ name: "inicial", actions: [] }, ...(spec.states ?? [])]) {
			if (state.name !== "inicial") {
				await load();
				for (const action of state.actions) {
					if (action.click) await page.click(action.click);
					if (action.press) await page.keyboard.press(action.press);
				}
				await page.waitForTimeout(700);
			}
			const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
			if (overflow > 0) issues.push(`${width}px [${state.name}]: overflow horizontal de ${overflow}px`);
			await page.screenshot({ path: join(out, `${state.name}-${width}.png`), fullPage: true });
			for (const probe of spec.probes ?? []) {
				if (probe.viewports && !probe.viewports.includes(width)) continue;
				if (probe.states && !probe.states.includes(state.name)) continue;
				const entries = Object.entries(probe.expect).map(([property, raw]) => ({
					property,
					raw,
					exp: parse(raw),
				}));
				const result = await page.evaluate(
					({ selector, all, entries, colorProps }) => {
						const nodes = [...document.querySelectorAll(selector)];
						if (!nodes.length) return null;
						const scratch = document.createElement("span");
						document.body.append(scratch);
						const norm = (v) => {
							scratch.style.color = "";
							scratch.style.color = v;
							return getComputedStyle(scratch).color;
						};
						const root = getComputedStyle(document.documentElement);
						const res = (all ? nodes : nodes.slice(0, 1)).map((node) => {
							const style = getComputedStyle(node);
							return entries.map((e) => {
								let expected =
									e.exp.kind === "var"
										? root.getPropertyValue(e.exp.name).trim()
										: e.exp.kind === "eq"
											? e.exp.text
											: undefined;
								if (expected && colorProps.includes(e.property)) expected = norm(expected);
								return { actual: style.getPropertyValue(e.property), expected };
							});
						});
						scratch.remove();
						return res;
					},
					{ selector: probe.selector, all: !!probe.all, entries, colorProps: [...colorProps] },
				);
				if (!result) {
					if (!probe.optional)
						rows.push({ width, state: state.name, probe: probe.name, property: "(elemento)", expected: probe.selector, actual: "ausente", ok: false });
					continue;
				}
				for (const node of result)
					node.forEach((v, i) => {
						const e = entries[i];
						rows.push({
							width,
							state: state.name,
							probe: probe.name,
							property: e.property,
							expected: e.exp.kind === "var" ? `${e.raw} = ${v.expected || "∅"}` : String(e.raw),
							actual: v.actual,
							ok: compare(e.property, v.actual, e.exp, v.expected),
						});
					});
			}
		}
		for (const message of errors) issues.push(`${width}px: erro de página: ${message}`);
		if (AxeBuilder) {
			try {
				const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
				for (const v of axe.violations.filter((x) => ["critical", "serious"].includes(x.impact))) {
					issues.push(`${width}px: axe ${v.id} (${v.impact}, ${v.nodes.length} nós)`);
				}
			} catch (e) {
				issues.push(`${width}px: axe falhou: ${e.message.split("\n")[0]}`);
			}
		}
		await page.close();
	}
} finally {
	await browser.close();
}

const failed = rows.filter((r) => !r.ok);
writeFileSync(join(out, "fidelity.json"), `${JSON.stringify({ url, checkedAt: new Date().toISOString(), issues, rows }, null, 2)}\n`);
console.log(`Verificação: ${rows.length - failed.length}/${rows.length} regras; ${issues.length} problemas globais.`);
const seen = new Set();
for (const i of issues) console.log(`✗ ${i}`);
for (const r of failed) {
	const key = `${r.width}|${r.state}|${r.probe}|${r.property}`;
	if (seen.has(key)) continue;
	seen.add(key);
	console.log(`✗ ${r.width}px [${r.state}] ${r.probe} · ${r.property}: esperado ${r.expected}, obtido ${r.actual}`);
}
console.log(`Capturas e relatório em ${out}/`);
process.exit(failed.length + issues.length > 0 ? 1 : 0);
