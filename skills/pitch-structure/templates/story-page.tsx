// Adapt imports to your project. Tailwind classes are optional; any CSS works.
import { type PitchStep, PitchTour, usePitchMode } from "./pitch-tour";
import { story } from "./story-content";

/**
 * Standard product structure (skill pitch-structure). Keep the order and
 * the data-story markers; restyle and recompose freely per design/DESIGN.md.
 * Replace <Experience /> with the product's mechanism, preloaded with an example.
 */
export function StoryPage() {
	const [touring, setTouring] = usePitchMode();
	const steps: PitchStep[] = [
		{ id: "dor", target: "[data-story=problem]", title: story.problem },
		{
			id: "experiencia",
			target: "#experiencia",
			title: "[O mecanismo em ação]",
		},
		{
			id: "resultado",
			target: "[data-story=result]",
			title: "[O antes × depois]",
		},
		{ id: "como", target: "#como-funciona", title: "Como funciona" },
	];

	return (
		<main
			className="mx-auto grid max-w-6xl gap-16 p-6"
		>
			<header className="grid gap-4 pt-10">
				<p className="text-sm font-semibold uppercase tracking-wide opacity-70">
					{story.audience}
				</p>
				<h1 data-hero-title className="text-5xl">
					{story.title}
				</h1>
				<p data-story="problem" className="max-w-prose text-lg">
					{story.problem}
				</p>
				<p data-story="promise" className="max-w-prose opacity-70">
					{story.promise}
				</p>
				<div data-story="action" className="flex flex-wrap items-center gap-4">
					<button
						type="button"
						className="min-h-11 rounded-md bg-black px-5 font-semibold text-white"
						onClick={() => setTouring(true)}
					>
						{story.action}
					</button>
					<a href="#experiencia" className="underline underline-offset-4">
						{story.explore}
					</a>
				</div>
			</header>

			<section id="experiencia" aria-label="Experiência">
				<Experience />
			</section>

			<section data-story="result" aria-label="Resultado">
				<p className="opacity-70">[Antes × depois, com a consequência e a base da comparação.]</p>
			</section>

			<section
				id="como-funciona"
				aria-labelledby="como-titulo"
				className="grid gap-4"
			>
				<h2 id="como-titulo" className="text-3xl">
					Como funciona
				</h2>
				<ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{story.how.map((item) => (
						<li key={item.title} className="grid gap-1">
							<strong>{item.title}</strong>
							<span className="opacity-70">{item.body}</span>
						</li>
					))}
				</ol>
				<p className="text-sm opacity-70">{story.limits}</p>
				<p className="text-sm">{story.next}</p>
			</section>

			<PitchTour
				steps={steps}
				open={touring}
				onClose={() => setTouring(false)}
				label="Demonstração em 60 segundos"
			/>
		</main>
	);
}

/** The product's mechanism, opened with an example already loaded (no login). */
function Experience() {
	return (
		<div className="grid min-h-64 place-items-center rounded-lg border border-dashed p-8 opacity-70">
			[Experiência principal com exemplo pré-carregado]
		</div>
	);
}
