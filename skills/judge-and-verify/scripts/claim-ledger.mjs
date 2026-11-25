#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const exts = new Set(['.ts','.tsx','.js','.jsx','.md','.mdx','.html','.json']);
const ignore = new Set(['node_modules','.git','dist','build','.next','.output','design/evidence','design/judging']);
const files = [];
function walk(p) {
  for (const e of readdirSync(p)) {
    if (ignore.has(e)) continue;
    const fp = join(p,e); const st = statSync(fp);
    if (st.isDirectory()) walk(fp); else if (exts.has(fp.slice(fp.lastIndexOf('.')))) files.push(fp);
  }
}
walk(root);
const allow = /estimativa|dado de exemplo|fict[ií]cio|fonte|source|sample|mock|exemplo|aprox|~|±|R\$?\s?\d|US\$?\s?\d|\b20\d\d\b|localhost|http|px|ms|s\b|%/i;
const numRe = /(?<![\w#-])(?:\d{1,3}(?:[.,]\d{3})+|\d+(?:[.,]\d+)?)(?:\s*(?:%|mil|mi|bi|k|kg|km|m|min|h|dias?|pessoas?|alunos?|usuários?))?/gi;
const findings = [];
for (const f of files) {
  const text = readFileSync(f,'utf8');
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (!line.trim() || line.trim().startsWith('import ')) return;
    for (const m of line.matchAll(numRe)) {
      const n = m[0];
      if (/^(0|1|2|3|4|5|6|7|8|9|10|12|24|60|90|100)$/.test(n)) continue;
      const ctx = line.toLowerCase();
      if (allow.test(line)) continue;
      if (/width|height|top|left|right|bottom|px|rem|em|vh|vw|font|opacity|z-index|duration|delay|timeout/.test(ctx)) continue;
      findings.push({ file: f.replace(root+'/', ''), line: i+1, number: n, text: line.trim().slice(0,180) });
    }
  });
}
console.log(`files scanned: ${files.length}, findings: ${findings.length}`);
for (const f of findings.slice(0,200)) console.log(`${f.file}:${f.line}: ${f.number} :: ${f.text}`);
if (findings.length > 200) console.log(`... ${findings.length-200} more`);
process.exit(findings.length ? 2 : 0);
