#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const argv = process.argv.slice(2);
const opt = {};
const pos = [];
for (let i=0;i<argv.length;i++) { if (argv[i].startsWith('--')) opt[argv[i].slice(2)] = argv[++i]; else pos.push(argv[i]); }
const judgingDir = resolve(opt.in ?? pos[0] ?? 'design/judging');
const out = resolve(opt.out ?? join(judgingDir, 'packet.md'));
const obsPath = join(judgingDir, 'observation.json');
if (!existsSync(obsPath)) { console.error(`observation.json não encontrado em ${judgingDir}. Rode observe.mjs primeiro.`); process.exit(1); }
const obs = JSON.parse(readFileSync(obsPath,'utf8'));
const lines = [];
lines.push(`# Judge Packet`);
lines.push('');
lines.push(`- URL: ${obs.url}`);
lines.push(`- Observado em: ${obs.observedAt}`);
lines.push(`- Gates P0: ${obs.ok ? 'PASS' : 'FAIL'}`);
if (obs.p0?.length) { lines.push(`- Falhas P0:`); for (const f of obs.p0) lines.push(`  - ${f}`); }
lines.push('');
for (const v of obs.viewports ?? []) {
  lines.push(`## Viewport ${v.width}px`);
  lines.push('');
  lines.push(`- Status: ${v.status}`);
  lines.push(`- Conteúdo: ${v.domContentLoadedMs}ms / rede ociosa ${v.networkIdleMs}ms`);
  lines.push(`- Overflow: ${v.overflowPx}px`);
  lines.push(`- Erros: ${(v.errors||[]).length}`);
  lines.push(`- Densidade 1ª tela: ${v.firstScreen?.words} palavras, ${v.firstScreen?.numbers} números, ${v.firstScreen?.controls} controles (${v.density})`);
  lines.push(`- Input ao vivo: ${v.liveInput} (${v.firstScreen?.liveInputs ?? 0})`);
  lines.push(`- Ação principal: ${v.mainAction ?? 'n/d'}`);
  lines.push(`- Story: problem=${v.story?.problem}, promise=${v.story?.promise}, action=${v.story?.action}, result=${v.story?.result}`);
  lines.push(`- Demo: ${v.demo?.found ? `${v.demo.steps.length} passos` : 'ausente'}`);
  lines.push(`- Axe: ${Array.isArray(v.axe) ? (v.axe.length ? v.axe.join(', ') : '0 violações') : v.axe}`);
  if (v.gates?.length) { lines.push(`- Gates: ${v.gates.join('; ')}`); }
  lines.push('');
  const shots = v.shots || {};
  for (const [name, p] of Object.entries(shots)) lines.push(`![${name} ${v.width}](${p})`);
  for (const step of v.demo?.steps || []) lines.push(`- demo ${step.step}: ${step.text}\n\n![demo ${step.step} ${v.width}](${step.shot})`);
  lines.push('');
}
lines.push('## Avaliação rápida');
lines.push('');
lines.push('- [ ] 5s: para quem / dor / ação');
lines.push('- [ ] Entrada ao vivo muda resultado');
lines.push('- [ ] Mecanismo rotulado com honestidade');
lines.push('- [ ] Antes/depois com número e procedência');
lines.push('- [ ] Limite visível e dito em voz alta');
lines.push('- [ ] Mobile sem overflow e ação leva ao resultado');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lines.join('\n') + '\n');
console.log(`Packet gerado em ${out}`);
