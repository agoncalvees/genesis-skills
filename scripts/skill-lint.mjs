#!/usr/bin/env node
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const skillsDir = join(root, 'skills');
let errors = [];
let warnings = [];
const skillDirs = readdirSync(skillsDir).filter(d => statSync(join(skillsDir,d)).isDirectory());
for (const dir of skillDirs) {
  const skillPath = join(skillsDir, dir, 'SKILL.md');
  if (!existsSync(skillPath)) { errors.push(`${dir}: missing SKILL.md`); continue; }
  const text = readFileSync(skillPath, 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { errors.push(`${dir}: missing YAML frontmatter`); }
  else {
    const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const desc = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
    if (!name) errors.push(`${dir}: frontmatter missing name`);
    if (name && name !== dir) errors.push(`${dir}: frontmatter name '${name}' != directory '${dir}'`);
    if (!desc) errors.push(`${dir}: frontmatter missing description`);
    if (desc && desc.length < 40) warnings.push(`${dir}: description very short`);
    if (desc && desc.length > 900) warnings.push(`${dir}: description long (${desc.length})`);
  }
  const lines = text.split('\n').length;
  if (lines > 220) warnings.push(`${dir}: SKILL.md has ${lines} lines (>220), consider moving detail to references`);
  const linkRe = /`([^`]+\.(?:md|mjs|ts|tsx|css|json|sh))`|\(([^)]+\.(?:md|mjs|ts|tsx|css|json|sh))\)/g;
  for (const m of text.matchAll(linkRe)) {
    const ref = (m[1]||m[2]).trim();
    if (ref.startsWith('http') || ref.startsWith('<') || ref.includes('*')) continue;
    if (ref.startsWith('docs/') || ref.startsWith('design/') || ['CHALLENGE.md','PRODUCT-BRIEF.md','MECHANISM.md','DEMO-SCRIPT.md','REHEARSAL.md','RED-TEAM.md','STATUS.md','fidelity.json','observation.json','observe.mjs','verify.mjs','claim-ledger.mjs','judge-packet.mjs'].includes(ref) || ref.endsWith('/observe.mjs') || ref.endsWith('/verify.mjs')) continue;
    const candidates = [join(skillsDir,dir,ref), join(root,ref), join(dirname(skillPath),ref)];
    if (!candidates.some(c=>existsSync(c))) warnings.push(`${dir}: referenced file not found nearby: ${ref}`);
  }
  const banned = [/IA mágica/i,/revolucionári[oa]/i,/100% garantido/i];
  for (const b of banned) if (b.test(text)) warnings.push(`${dir}: contains hype phrase ${b}`);
}
if (!existsSync(join(root,'README.md'))) errors.push('missing README.md');
const readme = existsSync(join(root,'README.md')) ? readFileSync(join(root,'README.md'),'utf8') : '';
for (const dir of skillDirs) if (!readme.includes(`\`${dir}\``)) warnings.push(`README missing skill ${dir}`);
console.log(`skills: ${skillDirs.length}, errors: ${errors.length}, warnings: ${warnings.length}`);
for (const e of errors) console.error(`ERROR: ${e}`);
for (const w of warnings) console.warn(`WARN: ${w}`);
if (errors.length) process.exit(1);
