#!/usr/bin/env node
import { existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const [mode, directory, ...extra] = process.argv.slice(2);
if (extra.length || !["--project", "--user"].includes(mode) || (mode === "--user" && directory)) {
	console.error("Uso: node scripts/install-codex.mjs --project [diretório] | --user");
	process.exit(1);
}

const source = fileURLToPath(new URL("../skills/", import.meta.url));
const base = resolve(mode === "--user" ? homedir() : directory ?? ".");
if (!existsSync(base)) throw new Error(`Diretório de instalação inexistente: ${base}`);
const destination = join(base, ".agents", "skills", "genesis");
const marker = join(destination, ".genesis-managed");
if (existsSync(destination)) {
	if (lstatSync(destination).isSymbolicLink() || !existsSync(marker) ||
		readFileSync(marker, "utf8").trim() !== "genesis-skills") {
		throw new Error(`Pasta Genesis ocupada por outra instalação: ${destination}`);
	}
} else {
	mkdirSync(destination, { recursive: true });
	writeFileSync(marker, "genesis-skills\n", { flag: "wx" });
}

function copySkill(source, target) {
	mkdirSync(target, { recursive: true });
	for (const entry of readdirSync(source, { withFileTypes: true })) {
		const from = join(source, entry.name);
		const to = join(target, entry.name);
		if (lstatSync(to, { throwIfNoEntry: false })?.isSymbolicLink()) {
			throw new Error(`A instalação contém um link no destino: ${to}`);
		}
		if (entry.isDirectory()) copySkill(from, to);
		if (entry.isFile()) writeFileSync(to, readFileSync(from));
	}
}

for (const skill of readdirSync(source, { withFileTypes: true })) {
	const path = join(source, skill.name);
	if (skill.isDirectory() && existsSync(join(path, "SKILL.md"))) {
		const target = join(destination, skill.name);
		if (lstatSync(target, { throwIfNoEntry: false })?.isSymbolicLink()) {
			throw new Error(`A instalação contém um link no destino: ${target}`);
		}
		copySkill(path, target);
	}
}

// Remove only the exact stock instruction from older project installs.
if (mode === "--project") {
	const agents = join(base, "AGENTS.md");
	if (existsSync(agents) && !lstatSync(agents).isSymbolicLink()) {
		const old = readFileSync(agents, "utf8");
		const updated = old.replace(
			/^## Hackathon \(genesis-skills\)\r?\nSiga as skills em `\.claude\/skills\/` \(mesmo conteúdo em `\.codex\/skills\/`\), nesta ordem: `hackathon-day` → `problem-to-pain` → `mechanism-integrity` → `pitch-structure` → `art-direction` → `demo-rehearsal` → `red-team` → `judge-and-verify`\. Agentes sem suporte a skills: leia os arquivos `SKILL\.md` diretamente\.(?:\r?\n|$)/m,
			"",
		);
		if (updated !== old) writeFileSync(agents, updated);
	}
}
console.log(`Skills Genesis instaladas em ${destination}`);
