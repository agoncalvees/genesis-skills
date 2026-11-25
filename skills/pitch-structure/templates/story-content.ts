/**
 * Product story for the demo. Keep the opening short and give the comparison enough context.
 */
export const story = {
	/** Who suffers, concretely. */
	audience: "Para [quem sofre, com papel e contexto]",
	/** Product name + promise in a few words (h1). */
	title: "[Nome]: [promessa em poucas palavras]",
	/** The pain and its consequence, with a source or a measure when available. */
	problem: "[Quem sofre a perda, em que situação e com qual consequência.]",
	/** One-liner: "[Produto] ajuda [quem] a [resultado] sem [custo atual]." */
	promise: "[Produto] ajuda [quem] a [resultado] sem [custo atual].",
	/** The single primary action. */
	action: "Ver em 60 segundos",
	/** Secondary path into the live experience. */
	explore: "ou experimente com o exemplo",
	/** 3–4 steps; say where AI acts and where the person decides. */
	how: [
		{ title: "Entrada", body: "[O que entra: dado real ou exemplo rotulado.]" },
		{
			title: "Mecanismo",
			body: "[Qual é a parte difícil e como a solução a resolve.]",
		},
		{ title: "Decisão", body: "[O que a pessoa confirma ou escolhe.]" },
		{ title: "Resultado", body: "[A consequência no antes × depois e a base da comparação.]" },
	],
	/** Honest limits: what is fictitious, what breaks first. */
	limits: "[Dados fictícios / modelo didático / o que quebra primeiro.]",
	/** The next real step (adoption, data, partner). */
	next: "[Próximo passo real: quem adota, que dado falta, que parceria.]",
} as const;
