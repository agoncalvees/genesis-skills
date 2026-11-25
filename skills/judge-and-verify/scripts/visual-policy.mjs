const storyKeys = ["problem", "promise", "action"];

export function firstViewportSelectors(spec, profile) {
	return spec.firstViewport ?? (profile === "demo"
		? storyKeys.map((key) => `[data-story=${key}]`)
		: []);
}

export function observationPolicy(view, profile, requireInput) {
	const gates = [];
	if (profile !== "product") {
		for (const key of storyKeys) {
			if (view.story[key] !== "na primeira tela") gates.push(`story:${key} ${view.story[key]}`);
		}
	}
	if (requireInput && view.firstScreen.liveInputs === 0) gates.push("sem input ao vivo");
	if (view.status >= 400) gates.push(`HTTP ${view.status}`);
	if (view.overflowPx > 0) gates.push(`overflow ${view.overflowPx}px`);
	if (view.errors.length) gates.push(`${view.errors.length} erro(s) de console/page`);

	const words = view.firstScreen.words;
	const reference = view.width < 600 ? 35 : 60;
	const density = profile === "product"
		? `${words} palavras visíveis`
		: `${words} palavras (referência de pitch: ${reference})`;
	return { gates, density };
}
