import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const installer = fileURLToPath(new URL("./install-codex.mjs", import.meta.url));
const temp = realpathSync(tmpdir());
const createTarget = (t) => {
	const dir = mkdtempSync(join(temp, "genesis-install-"));
	assert.equal(dirname(realpathSync(dir)), temp);
	t.after(() => rmSync(dir, { recursive: true, force: true }));
	return dir;
};
const install = (dir) => spawnSync(process.execPath, [installer, "--project", dir], { encoding: "utf8" });

test("installs the router and its references on a project with spaces, and can be rerun", (t) => {
	const parent = createTarget(t);
	const project = join(parent, "projeto com espaços");
	mkdirSync(project);
	const agents = join(project, "AGENTS.md");
	const userText = "# Projeto\r\n\r\nUse os tokens existentes.\r\n";
	const legacy = "## Hackathon (genesis-skills)\r\n" +
		"Siga as skills em `.claude/skills/` (mesmo conteúdo em `.codex/skills/`), nesta ordem: " +
		"`hackathon-day` → `problem-to-pain` → `mechanism-integrity` → `pitch-structure` → `art-direction` → " +
		"`demo-rehearsal` → `red-team` → `judge-and-verify`. Agentes sem suporte a skills: leia os arquivos `SKILL.md` diretamente.\r\n";
	writeFileSync(agents, userText + legacy);
	const pack = join(project, ".agents", "skills", "genesis");
	const first = install(project);
	assert.equal(first.status, 0, first.stderr);
	assert.match(readFileSync(join(pack, "design-engineering", "SKILL.md"), "utf8"), /name: design-engineering/);
	assert.ok(existsSync(join(pack, "design-engineering", "references", "emil.md")));
	assert.ok(existsSync(join(pack, "mechanism-integrity", "SKILL.md")));
	assert.ok(!existsSync(join(project, ".genesis", "emil")));
	assert.equal(readFileSync(agents, "utf8"), userText);
	const again = install(project);
	assert.equal(again.status, 0, again.stderr);
	assert.equal(readFileSync(agents, "utf8"), userText);
});

test("protects a pre-existing unrelated installation", (t) => {
	const project = createTarget(t);
	const existing = join(project, ".agents", "skills", "genesis");
	mkdirSync(existing, { recursive: true });
	const sentinel = join(existing, "SKILL.md");
	writeFileSync(sentinel, "meu conteúdo\n");
	const check = install(project);
	assert.notEqual(check.status, 0);
	assert.equal(readFileSync(sentinel, "utf8"), "meu conteúdo\n");
});
