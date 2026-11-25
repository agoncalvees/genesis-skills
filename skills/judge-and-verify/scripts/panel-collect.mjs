#!/usr/bin/env node
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
const dir = resolve(process.argv[2] ?? 'design/judging/panel');
const manifestPath = join(dir, 'manifest.json');
if (!existsSync(manifestPath)) { console.error('manifest.json não encontrado'); process.exit(1); }
const manifest = JSON.parse(readFileSync(manifestPath,'utf8'));
const rows = [];
for (const r of manifest.roles ?? []) {
  const p = r.output;
  if (!existsSync(p)) { rows.push({ ...r, status:'missing', score:null }); continue; }
  const text = readFileSync(p,'utf8');
  const m = text.match(/Nota:\s*([0-9]+(?:[\.,][0-9]+)?)/i);
  const score = m ? Number(m[1].replace(',','.')) : null;
  const five = text.match(/Em 5 s entendi:\s*(.*)/i)?.[1]?.trim() ?? '';
  const worst = text.match(/Pior defeito:\s*([\s\S]*?)(?:\n[A-Za-zÀ-ú].*:|\n##|$)/i)?.[1]?.trim().split('\n')[0] ?? '';
  rows.push({ ...r, status:'ok', score, five, worst, file:p });
}
const scores = rows.map(r=>r.score).filter(v=>typeof v==='number');
const avg = scores.length ? scores.reduce((a,b)=>a+b,0)/scores.length : null;
const md = ['# Painel de jurados','','| Jurado | Nota | 5s | Pior defeito | Arquivo |','|---|---:|---|---|---|',
  ...rows.map(r=>`| ${r.name} | ${r.score ?? '—'} | ${(r.five||'').replace(/\|/g,'/')} | ${(r.worst||r.status).replace(/\|/g,'/')} | ${r.file} |`),
  '', avg!==null ? `Média simples: **${avg.toFixed(2)}**` : 'Média simples: n/d', '',
  '## Defeitos para consolidar (moderador)', '', '- [ ] apontado por 2+ jurados', '- [ ] bloqueia 5s / mecanismo / demo / mobile'
].join('\n') + '\n';
writeFileSync(join(dir,'verdict.md'), md);
writeFileSync(join(dir,'panel.json'), JSON.stringify({ ...manifest, collectedAt:new Date().toISOString(), average:avg, rows }, null, 2) + '\n');
console.log(`verdict gerado em ${join(dir,'verdict.md')}`);
