/**
 * The product story — fill this first (docs/product/PITCH-PROTOCOL.md).
 * Every field is visible to judges; keep each to one line.
 */
export const story = {
	/** Who suffers, concretely. */
	audience: "Para [quem sofre, com papel e contexto]",
	/** Product name + promise in a few words (h1). */
	title: "[Nome]: [promessa em poucas palavras]",
	/** The pain with one number (and its source or "estimativa"). */
	problem: "[A dor de hoje, com um número que o jurado sente em 20 segundos.]",
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
			body: "[O que a tecnologia faz que a pessoa não faria.]",
		},
		{ title: "Decisão", body: "[O que a pessoa confirma ou escolhe.]" },
		{ title: "Resultado", body: "[O antes × depois, com o número.]" },
	],
	/** Honest limits: what is fictitious, what breaks first. */
	limits: "[Dados fictícios / modelo didático / o que quebra primeiro.]",
	/** The next real step (adoption, data, partner). */
	next: "[Próximo passo real: quem adota, que dado falta, que parceria.]",
} as const;
