#!/usr/bin/env node
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

const argv = process.argv.slice(2);
const opt = {}; const pos = [];
for (let i=0;i<argv.length;i++) { if (argv[i].startsWith('--')) opt[argv[i].slice(2)] = argv[++i]; else pos.push(argv[i]); }
const root = resolve(pos[0] ?? '.');
const out = opt.out ? resolve(opt.out) : null;
const exts = new Set(['.ts','.tsx','.js','.jsx','.md','.mdx','.html','.json']);
const ignore = new Set(['node_modules','.git','dist','build','.next','.output','design/evidence','design/judging','reports']);
const files = [];
function walk(p) {
  for (const e of readdirSync(p)) {
    if (ignore.has(e)) continue;
    const fp = join(p,e); const st = statSync(fp);
    if (st.isDirectory()) walk(fp); else if (exts.has(fp.slice(fp.lastIndexOf('.')))) files.push(fp);
  }
}
if (statSync(root).isDirectory()) walk(root); else files.push(root);
const allow = /estimativa|dado de exemplo|fict[ií]cio|fonte|source|sample|mock|exemplo|aprox|~|±|R\$?\s?\d|US\$?\s?\d|\b20\d\d\b|localhost|http|doi|pmid|arxiv|%|\bms\b|\bpx\b/i;
const numRe = /(?<![\w#/\-])(?:\d{1,3}(?:[.,]\d{3})+|\d+(?:[.,]\d+)?)(?:\s*(?:%|mil|mi|bi|k|kg|km|m|min|h|dias?|pessoas?|alunos?|usuários?|pacientes?|casos?))?/gi;
const findings = [];
for (const f of files) {
  const text = readFileSync(f,'utf8');
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (!line.trim() || line.trim().startsWith('import ') || line.trim().startsWith('//')) return;
    for (const m of line.matchAll(numRe)) {
      const n = m[0];
      if (/^(0|1|2|3|4|5|6|7|8|9|10|12|24|60|90|100|360|768|1440)$/.test(n)) continue;
      const ctx = line.toLowerCase();
      if (allow.test(line)) continue;
      if (/width|height|top|left|right|bottom|padding|margin|gap|radius|border|px|rem|em|vh|vw|font|opacity|z-index|duration|delay|timeout|clamp|max-width|min-width/.test(ctx)) continue;
      findings.push({ file: f.replace(root+'/', ''), line: i+1, number: n, text: line.trim().slice(0,180) });
    }
  });
}
const report = { scanned: files.length, findings: findings.length, items: findings };
const textOut = [`files scanned: ${files.length}, findings: ${findings.length}`, ...findings.slice(0,300).map(f=>`${f.file}:${f.line}: ${f.number} :: ${f.text}`)].join('\n') + '\n';
if (out) { mkdirSync(dirname(out), { recursive: true }); writeFileSync(out, textOut); }
console.log(textOut.trimEnd());
if (findings.length > 300) console.log(`... ${findings.length-300} more`);
process.exit(findings.length ? 2 : 0);
