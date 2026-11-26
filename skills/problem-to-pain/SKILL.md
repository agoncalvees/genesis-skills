---
name: problem-to-pain
description: Use quando a pessoa trouxer um tema ou desafio, pedir ou quiser evoluir uma ideia de produto, comparar propostas ou escolher o que construir, em hackathons ou fora deles.
---

# Descoberta e decisão de produto

## Quando chegar um tema ou pedido de ideia

Se for **tema de hackathon**, a primeira resposta já traz a decisão pesquisada e o brief para começar a construir. Não entregue só um nome, um one-liner ou uma recomendação curta para depois reservar as fontes, a dor e o plano de build. Siga o contrato completo de [Decisão rápida com evidência](references/hackathon-discovery.md). Recomende uma direção principal; compare internamente no máximo três mecanismos e mostre apenas as alternativas necessárias para justificar a escolha. Não peça à equipe que escolha um menu nem prometa vitória.

Se não for hackathon, entregue uma ideia recomendada na primeira resposta e mantenha a profundidade proporcional ao pedido. Declare suposições que mudem a decisão. Quando o prazo do evento for desconhecido, não invente um relógio: escolha uma fatia inicial e marque o prazo como informação a confirmar.

Antes de escolher, faça o passe curto de [exploração de oportunidades](references/opportunity-exploration.md). Em temas amplos, conecte o desafio a uma cena documentada no contexto local. Um relato direto, auditoria, registro operacional ou pesquisa primária pode sustentar a sequência do evento; estatísticas agregadas ajudam a dimensionar, mas não provam sozinhas que a dor convence. Se faltar evidência local, recomende a aposta mais bem sustentada como hipótese e diga qual lacuna deve ser checada primeiro.

Toda explicação começa em linguagem comum: **quem enfrenta qual situação, o que faz hoje, o que perde e o que o produto muda**. Para produto com IA, a cadeia deve ser legível: `entrada → tarefa concreta da IA → checagem ou limite → ação → resultado`. A resposta de hackathon também inclui produto completo, MVP funcional e tarefas de construção; detalhes estão no contrato de descoberta abaixo.

## Quando a pessoa já tem uma ideia

Use a [referência de evolução de ideias](references/evolve-idea.md) quando pedirem para melhorar, aprofundar ou consertar uma proposta, inclusive depois de rejeitarem uma sugestão. Identifique o resultado e as escolhas que a pessoa quer preservar. Diagnostique onde a versão atual perde valor e compare maneiras de vencer esse gargalo. Responda com a versão recomendada, a mudança que faz diferença, o custo ou limite que ela introduz e o primeiro teste que separa ganho real de melhoria aparente. Se o mecanismo for o gargalo, use a seção de projeto de `mechanism-integrity` em apoio a essa decisão. Se a dificuldade estiver na experiência, na entrega ou na adoção, evolua essa parte.

## Aprenda com feedback durante a ideação

Associe cada rejeição à proposta específica e preserve o motivo nas palavras da pessoa. Classifique o estágio sinalizado — problema/dor, evidência, mecanismo, valor da IA, diferença competitiva, viabilidade, experiência ou comunicação — sem transferir motivos entre propostas. Se o motivo não estiver claro, faça uma pergunta curta; quando a pessoa já nomear a objeção principal, aceite-a como suficiente para a rodada e siga sem pedir outra justificativa. Se a objeção for a força da dor, volte ao episódio, à prática atual, à consequência para quem é afetado e a quem consegue agir; não contorne a objeção trocando de domínio. Escala ou gravidade estimada, sozinhas, não provam que a dor convence.

Quando a pessoa pedir para melhorar a própria skill com base nesses testes, use os sinais como sondas, não como preferência genérica: (1) registre proposta, feedback literal, estágio e comportamento observado; (2) formule o critério de aprovação e registre o resultado atual antes de editar; (3) corrija a regra mais específica no arquivo canônico, sem duplicá-la em várias skills; (4) repita o mesmo cenário em contexto novo; (5) registre resultado, limites e próxima sonda em `TRAINING.md`. Mantenha a alteração como candidata até a repetição passar; não declare validação nem avance versão antes disso. Uma rejeição do usuário informa a decisão sobre aquela proposta, mas não prova sozinha uma regra universal.

## 1. Explore oportunidades antes de escolher uma dor

Extraia o resultado que o tema pede e separe regras confirmadas de suposições. Use as duas lentes de [exploração de oportunidades](references/opportunity-exploration.md) para gerar **no máximo três caminhos distintos no total**. Pare de abrir caminhos quando as novas opções repetirem a mesma causa e ação.

### Pesquisa comparativa para hackathons

Use o [método de descoberta](references/hackathon-discovery.md) como fonte única para os passos, prompts, pontuação e limite de tempo. Com duas sessões independentes, `model-orchestra` distribui as trilhas e devolve evidências ao moderador. Sem elas, execute os mesmos recortes em sequência e marque a pesquisa como solo. Não escolha primeiro uma demo e invente uma dor para justificá-la.

A recomendação apresenta uma tese de produto: público, episódio, consequência, mudança no trabalho provocada pela IA, ação viabilizada, mecanismo de IA, verificação da saída, comparação com substitutos e precedentes, incerteza decisiva e plano de construção para o tempo restante. O prazo determina a organização e a divisão de trabalho. Ele não rebaixa os critérios de escolha a facilidade de implementação.

Explore resultados e mecanismos de valor diferentes antes de investigar a fundo. Para as oportunidades mais fortes, identifique quem vive a dor, quem pode agir e o que faz hoje, inclusive trabalho manual, ajuda humana ou deixar como está. Capture um episódio quando houver acesso. Procure um ganho observável frente à melhor alternativa atual.

Registre **fato** com fonte, contexto e alcance, **hipótese** com uma observação que a refutaria e **suposição** quando faltar base. Dados agregados indicam escala no universo medido; episódios recentes ajudam a investigar causas e consequências. Uma simulação ou relato isolado pode orientar a exploração, mas não prova demanda. Diferencie evidência do problema de evidência de adoção ou da solução.

## 2. Compare propostas com ambição e um recorte executável

Em hackathons, ordene as propostas pelos pesos publicados e pela consequência para as pessoas. Examine a força da intervenção, a diferença frente ao que já existe e o caminho até o primeiro uso. Compare a favorita com uma intervenção que atue em outro ponto da causa. Use dependências e tempo para dimensionar o plano de construção e os riscos depois da escolha. Preserve a mudança central que justifica a proposta ao definir o primeiro recorte.

- **Elimine propostas genéricas.** Se trocar o público ou o tema deixa o fluxo praticamente igual e perde-se pouco valor, volte à cena e encontre uma ação que resolva uma dificuldade daquele contexto. Uma interface familiar serve quando a ação que ela viabiliza muda o resultado.
- **Elimine promessas frágeis.** Percorra o primeiro uso e confira quem fornece cada entrada, quem pode agir sobre a saída e o que acontece depois. Se a primeira entrega depende de adesão em escala, dados inéditos, parceria ou acesso sem caminho plausível, redesenhe usando um recurso ao alcance da pessoa. Se perder o ganho nesse recorte, escolha outra proposta.
- **Teste a força da intervenção.** Compare com o melhor substituto que a pessoa já tem, como uma mensagem, planilha, regra simples, software existente ou ajuda humana. Se o substituto chega ao mesmo desfecho sob as mesmas restrições e com esforço parecido, volte ao problema. Um alerta ou resumo passa quando muda materialmente o resultado, por exemplo quando evita que uma janela de ação se feche. Se a consequência permanece e o produto apenas a descreve melhor, procure uma intervenção com mais efeito.
- **Decida pelo potencial de vencer.** Ordene primeiro por aderência aos critérios oficiais, consequência para o público, originalidade e diferença frente às soluções e aos precedentes pesquisados. Em seguida, torne a proposta construível com a equipe, as ferramentas e o tempo disponíveis. Um protótipo com dados fictícios testa o fluxo e o mecanismo. Para afirmar ganho no uso, compare com a prática atual.

Compare **aderência e impacto**, **originalidade**, **qualidade técnica**, **experiência** e **viabilidade** usando critérios, pesos e escalas publicados pela banca. Só atribua notas numéricas quando a escala e os pesos estiverem publicados. Se faltarem, diga isso e compare qualitativamente, sem inventar pesos, notas ou percentuais. Elimine recortes que violem regras oficiais. Para cada critério, mostre a evidência, o nível de confiança e o maior risco.

### Dossiê de descoberta para a equipe

Em tema de hackathon, entregue o contrato de decisão e construção na primeira resposta, mesmo que a equipe ainda não peça um dossiê. Se houver repositório, preserve a resposta completa no chat; crie `docs/DISCOVERY.md` e `docs/PRODUCT-BRIEF.md` quando o usuário pedir artefatos ou quando o trabalho já estiver acontecendo no projeto. Abra pelo veredito em linguagem comum, pelo tema literal e pelo relógio conhecido. Desenvolva o suficiente para decidir e começar; detalhe técnico não substitui a cena da dor.

1. **Problema e oportunidade.** Descreva quem vive a dor, em que momento trava, o que já tenta, o custo da falha e quem pode mudar o resultado. Identifique a evidência de cada ponto, as premissas em aberto e como investigá-las.
2. **Alternativas e escolha.** Para cada finalista, explique como funciona, o valor que entrega, a melhor alternativa atual, o precedente mais próximo, o diferencial e o maior risco. Compare pelos pesos da banca. Justifique a recomendação pela mudança que ela torna possível, pela evidência, pela lacuna competitiva e pelo potencial de execução. Diga o que faria você mudar de ideia.
3. **Experiência da favorita.** Acompanhe a mesma pessoa desde a dor até o resultado. Mostre as ações da pessoa e do sistema, o que muda na tela e um caso em que o fluxo precisa de outra saída. Use Mermaid quando a superfície renderizar, ou um fluxo com setas em Markdown.
4. **Plano de construção.** Explique a arquitetura e o mecanismo, com entradas, regras, saídas, origem dos dados e dependências. Defina o MVP, módulos e responsáveis, sequência de implementação, checkpoints, primeiro corte e plano B. Verifique cedo a dependência que mais pode comprometer a demo. Registre o que foi testado de fato e o que segue como plano.
5. **Prova para a banca.** Descreva a entrada que o jurado muda, o resultado observável, o caso difícil, os testes de aceite e o que a demonstração consegue provar. Conecte a abertura e a demonstração aos critérios oficiais.

Mantenha regras e fontes oficiais em `docs/CHALLENGE.md`. Na conversa, apresente a recomendação, a objeção e a decisão pendente com link para o dossiê, expandindo todo ponto que a equipe pedir. O relógio limita a etapa do trabalho. A extensão depende da profundidade solicitada e do que a equipe precisa para decidir.

**IA na construção e no produto.** Ao planejar uso de agentes, dê a cada um uma tarefa verificável e especifique como a equipe revisa e integra a entrega. Escolha a tecnologia do produto pelo mecanismo de valor e pelas regras oficiais. IA pode acelerar pesquisa, código, testes e ensaio. Um modelo no caminho da demo precisa atender a uma exigência do tema ou entregar valor que o mecanismo proposto dependa de inferir.

Recomende uma direção mesmo sob incerteza, com força proporcional à fonte. Diga qual vantagem decidiu a comparação, a melhor objeção e o fato que mudaria a escolha. Se nenhuma for elegível, diga isso e indique o impedimento. Para a favorita, proponha uma verificação curta da premissa mais decisiva, com comportamento ou resultado observável. Se não couber no relógio, leve ao brief como risco aceito ou motivo para encerrar sem aprovação.

## 3. Rode a descoberta de hackathon

Feche a recomendação em até 15 minutos, seguindo o relógio e as regras de [Decisão rápida com evidência](references/hackathon-discovery.md). Entregue uma tese principal com o melhor suporte disponível, a objeção que poderia derrubá-la, a incerteza decisiva e o primeiro teste. Não peça que a equipe escolha de um menu nem aguarde consenso; encerre a ideação e encaminhe a recomendação para mecanismo e construção. Se o pedido for um dossiê ou a equipe precisar registrar a decisão, use a estrutura de descoberta acima sem reabrir a comparação.

## 4. Trate fatos novos sem reiniciar a ideação

Durante a execução de um evento, reabra por regra oficial, evidência que refute a premissa central ou falha que inviabilize o núcleo. Se a pessoa pedir para evoluir a ideia ou reconsiderar uma decisão, use a seção de evolução respeitando o escopo do pedido e o estágio da entrega.

Suspenda qualquer parte invalidada por uma regra. Proponha primeiro um recorte compatível que preserve o núcleo. Se isso falhar, compare com a melhor alternativa já considerada. Em até cinco minutos ou no saldo menor disponível, leve o fato, o efeito e a recomendação à mesma autoridade humana em uma mensagem de escolha. Registre o aceite e atualize o brief. Sem aceite, use o registro de encerramento para a parte afetada. Reabra a direção inteira apenas se as opções de recorte deixarem de preservar o valor central.
