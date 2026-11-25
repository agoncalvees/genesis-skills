import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const script = fileURLToPath(new URL('./claim-ledger.mjs', import.meta.url));

test('requires an explicit scan root instead of reading the caller directory', () => {
	const cwd = mkdtempSync(join(tmpdir(), 'claim-ledger-scope-'));
	writeFileSync(join(cwd, 'TRAINING.md'), 'PRIVATE_SCAN_SENTINEL 4821\n');

	try {
		const result = spawnSync(process.execPath, [script], { cwd, encoding: 'utf8' });
		const output = `${result.stdout}${result.stderr}`;

		assert.doesNotMatch(output, /PRIVATE_SCAN_SENTINEL|TRAINING\.md/);
		assert.equal(result.status, 64);
		assert.match(result.stderr, /Uso:/);
	} finally {
		rmSync(cwd, { recursive: true, force: true });
	}
});
