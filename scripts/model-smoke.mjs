#!/usr/bin/env node
/**
 * Records a manual/automated model smoke matrix. This script does not call providers;
 * it normalizes probe results so TRAINING can track availability.
 *
 * Usage:
 *   node scripts/model-smoke.mjs --out reports/models-smoke.json --set opencode/hy4-flash-free=ok --set opencode/deepseek-v4.1-flash-free=quota
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
const argv = process.argv.slice(2);
const opt = { set: [] };
for (let i=0;i<argv.length;i++) {
  const a = argv[i];
  if (a === '--set') opt.set.push(argv[++i]);
  else if (a.startsWith('--')) opt[a.slice(2)] = argv[++i];
}
const out = resolve(opt.out ?? 'reports/models-smoke.json');
const catalog = [
  'opencode/tidepool-alpha-free','opencode/hy4-flash-free','opencode/iceman-free','opencode/flint-40b-free',
  'opencode/deepseek-v4.1-flash-free','opencode/nemotron-3.5-super-vl-free','opencode/beam-free','opencode/mimo-v2.6-flash-free',
  'opencode/nemotron-3.5-lightning-free','opencode/big-pickle'
];
const status = Object.fromEntries(catalog.map(m => [m, 'unknown']));
for (const s of opt.set) {
  const [m, v] = s.split('=');
  if (m && v) status[m] = v;
}
const report = { checkedAt: new Date().toISOString(), status, available: Object.entries(status).filter(([,v])=>v==='ok').map(([k])=>k) };
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(report, null, 2) + '\n');
console.log(`wrote ${out}`);
console.table(status);
