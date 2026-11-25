import assert from "node:assert/strict";
import { test } from "node:test";
import { observationPolicy, firstViewportSelectors } from "./visual-policy.mjs";

const denseTool = {
	width: 360,
	status: 200,
	firstScreen: { words: 120, numbers: 20, controls: 15, liveInputs: 0 },
	story: { problem: "ausente", promise: "ausente", action: "ausente" },
	overflowPx: 0,
	errors: [],
};

test("a dense operational UI can pass without pitch markup", () => {
	const result = observationPolicy(denseTool, "product", false);
	assert.deepEqual(result.gates, []);
	assert.match(result.density, /120/);
});

test("demo profiles enforce their contract while density stays advisory", () => {
	assert.equal(observationPolicy(denseTool, "tool", true).gates.length, 4);
	assert.equal(observationPolicy(denseTool, "landing", false).gates.length, 3);
	const story = Object.fromEntries(
		Object.keys(denseTool.story).map((key) => [key, "na primeira tela"]),
	);
	assert.deepEqual(observationPolicy({ ...denseTool, story }, "tool", false).gates, []);
});

test("HTTP failures, overflow and runtime errors still block product verification", () => {
	const observed = { ...denseTool, status: 503, overflowPx: 8, errors: ["pageerror"] };
	assert.equal(observationPolicy(observed, "product", false).gates.length, 3);
});

test("first viewport constraints are project declarations or an explicit demo contract", () => {
	assert.deepEqual(firstViewportSelectors({}, "product"), []);
	assert.equal(firstViewportSelectors({}, "demo").length, 3);
	assert.deepEqual(firstViewportSelectors({ firstViewport: ["main"] }, "demo"), ["main"]);
	assert.deepEqual(firstViewportSelectors({ firstViewport: [] }, "demo"), []);
});
