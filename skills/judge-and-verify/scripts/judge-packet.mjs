#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const argv = process.argv.slice(2);
const opt = {};
const pos = [];
for (let i=0;i<argv.length;i++) { if (argv[i].startsWith('--')) opt[argv[i].slice(2)] = argv[++i]; else pos.push(argv[i]); }
const judgingDir = resolve(opt.in ?? pos[0] ?? 'design/judging');
const out = resolve(opt.out ?? join(judgingDir, 'packet.md'));
const root = resolve(opt.root ?? process.cwd());
const obsPath = join(judgingDir, 'observation.json');
if (!existsSync(obsPath)) { console.error(`observation.json não encontrado em ${judgingDir}. Rode observe.mjs primeiro.`); process.exit(1); }
const obs = JSON.parse(readFileSync(obsPath,'utf8'));
const demo = obs.profile !== 'product';
const read = (p) => existsSync(p) ? readFileSync(p,'utf8').trim() : null;
const snippet = (p, max=1200) => { const t = read(p); if (!t) return null; return t.length > max ? t.slice(0,max) + '\n...[truncado]' : t; };
const mechanism = snippet(join(root,'docs/MECHANISM.md'));
const rehearsal = snippet(join(root,'docs/REHEARSAL.md'));
const script = snippet(join(root,'docs/DEMO-SCRIPT.md'), 800);
const claimsPath = join(judgingDir,'claim-ledger.txt');
const claims = read(claimsPath);
const lines = [];
lines.push(`# Judge Packet`);
lines.push('');
lines.push(`- URL: ${obs.url}`);
lines.push(`- Observado em: ${obs.observedAt}`);
lines.push(`- Gates P0: ${obs.ok ? 'PASS' : 'FAIL'}`);
if (obs.p0?.length) { lines.push(`- Falhas P0:`); for (const f of obs.p0) lines.push(`  - ${f}`); }
for (const [file, content] of [['MECHANISM.md',mechanism],['DEMO-SCRIPT.md',script],['REHEARSAL.md',rehearsal]]) {
  if (demo || content) lines.push(`- ${file}: ${content ? 'presente' : 'ausente'}`);
}
lines.push('');
for (const v of obs.viewports ?? []) {
  lines.push(`## Viewport ${v.width}px`);
  lines.push('');
  lines.push(`- Status: ${v.status}`);
  lines.push(`- Conteúdo: ${v.domContentLoadedMs}ms / rede ociosa ${v.networkIdleMs}ms`);
  lines.push(`- Overflow: ${v.overflowPx}px`);
  lines.push(`- Erros: ${(v.errors||[]).length}`);
  lines.push(`- Densidade 1ª tela: ${v.firstScreen?.words} palavras, ${v.firstScreen?.numbers} números, ${v.firstScreen?.controls} controles. Interprete no contexto da tarefa.`);
  if (demo || obs.requireInput) lines.push(`- Input ao vivo: ${v.liveInput} (${v.firstScreen?.liveInputs ?? 0})`);
  lines.push(`- Ação principal: ${v.mainAction ?? 'n/d'}`);
  if (demo) {
    lines.push(`- Story: problem=${v.story?.problem}, promise=${v.story?.promise}, action=${v.story?.action}, result=${v.story?.result}`);
    lines.push(`- Demo: ${v.demo?.found ? `${v.demo.steps.length} passos` : 'ausente'}`);
  }
  lines.push(`- Axe: ${Array.isArray(v.axe) ? (v.axe.length ? v.axe.join(', ') : '0 violações') : v.axe}`);
  if (v.gates?.length) lines.push(`- Gates: ${v.gates.join('; ')}`);
  lines.push('');
  for (const [name, p] of Object.entries(v.shots || {})) lines.push(`![${name} ${v.width}](${p})`);
  for (const step of v.demo?.steps || []) lines.push(`- demo ${step.step}: ${step.text}\n\n![demo ${step.step} ${v.width}](${step.shot})`);
  lines.push('');
}
if (mechanism) { lines.push('## MECHANISM.md'); lines.push(''); lines.push('```md'); lines.push(mechanism); lines.push('```'); lines.push(''); }
if (script) { lines.push('## DEMO-SCRIPT.md (trecho)'); lines.push(''); lines.push('```md'); lines.push(script); lines.push('```'); lines.push(''); }
if (rehearsal) { lines.push('## REHEARSAL.md'); lines.push(''); lines.push('```md'); lines.push(rehearsal); lines.push('```'); lines.push(''); }
if (claims) { lines.push('## Claim ledger'); lines.push(''); lines.push('```text'); lines.push(claims.slice(0,2000)); lines.push('```'); lines.push(''); }
lines.push('## Avaliação rápida');
lines.push('');
if (demo) {
  lines.push('- [ ] 5s: para quem / dor / ação');
  if (obs.requireInput !== false) lines.push('- [ ] Entrada ao vivo muda resultado');
  lines.push('- [ ] Mecanismo rotulado com honestidade');
  lines.push('- [ ] Antes/depois com número e procedência');
  lines.push('- [ ] Limite visível e dito em voz alta');
} else {
  lines.push('- [ ] A pessoa encontra a informação e conclui a tarefa principal');
  lines.push('- [ ] Estados pertinentes e recuperação verificados no fluxo');
}
lines.push('- [ ] Resultado perceptível e layout utilizável nos tamanhos testados');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lines.join('\n') + '\n');
console.log(`Packet gerado em ${out}`);
