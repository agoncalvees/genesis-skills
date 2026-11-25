---
name: design-engineering
description: Implemente ou revise interações, componentes, animações e gestos. Use para diagnosticar perda de quadros ou interrupções no motion, refinar interações mobile, comparar protótipos ou aprender com correções visuais. Seleciona a referência técnica pertinente do Emil Kowalski.
---

# Design engineering

Use a [seleção contextual](references/emil.md) para escolher a referência mais específica para a decisão atual. Leia o original escolhido e abra material auxiliar apenas quando a tarefa o exigir. Explique a escolha em uma frase quando ela afetar o trabalho. Volte ao mapa só se surgir outra decisão.

- Comece pelo produto, pela tarefa e pelos componentes existentes. Use a identidade em `design/DESIGN.md` (ou a convenção do projeto), as preferências confirmadas aplicáveis e os padrões da plataforma como contexto.
- Dê feedback no próximo momento perceptível. Verifique os estados relevantes, incluindo foco, pressionado, desabilitado, carregamento, vazio, erro e recuperação. Exercite teclado, toque e a semântica do componente. Reaproveite primitivas acessíveis antes de escolher uma dependência.
- Use motion quando comunicar estado, continuidade ou consequência. Em fluxos repetitivos, considere resposta imediata e ausência de transição. Para motion que fica, ajuste origem, curva e duração ao gesto ou à mudança, permita reversão/interrupção e preserve a função em movimento reduzido. Use CSS nativo em interações simples.
- Depois de implementar, inspecione a interface renderizada nos tamanhos e estados relevantes. Teste reversões rápidas e teclado quando aplicáveis. Distinga emulação de teste em hardware, e registre lacunas. Para dados adversariais, use `red-team` e a referência `break-ui`.

## Exploração visual

Use `prototype` quando uma escolha custosa ou de preferência visual for difícil de resolver por texto. Compare poucas alternativas funcionais, com os mesmos dados e contexto, em eixos como composição, densidade, personalidade ou interação. Use rota exclusiva de desenvolvimento excluída do build ou um protótipo externo e descartável. Preserve código, rotas e dependências de produção durante a exploração. Entregue a comparação clicável e aguarde a escolha do usuário antes de promover uma direção.

## Preferências confirmadas

Quando houver correções, escolhas, rejeições ou edições manuais relevantes, use `learn-taste`. Compare o histórico/diff disponível com as decisões da sessão. Para cada candidata, indique evidência e origem, regra, justificativa (marque inferências), escopo e eventual conflito ou check objetivo. Uma edição ambígua pede esclarecimento, e uma correção isolada não basta para inferir recorrência.

Critérios gerais de acessibilidade, integridade e desempenho pertencem à prática técnica. Identidade e decisões particulares pertencem ao DESIGN.md do produto. Para preferências pessoais recorrentes, proponha um arquivo privado `~/.agents/TASTE.md` ou o local escolhido pelo usuário. Leia esse arquivo, se disponível, apenas durante decisões visuais relevantes. Grave somente as regras e o escopo confirmados. Considere testes ou lint para regras aprovadas com um critério demonstrável, preservando julgamento contextual para escolhas estéticas.
