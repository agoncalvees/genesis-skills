---
name: problem-to-pain
description: Use quando a pessoa trouxer um tema ou desafio, pedir ou quiser evoluir uma ideia de produto, comparar propostas ou escolher o que construir, em hackathons ou fora deles.
---

# Descoberta e decisão de produto

## Quando chegar só o tema ou um pedido de ideia

Entregue **uma ideia recomendada no chat, na primeira resposta**. Isso vale também para um tema identificado como hackathon ou acompanhado de restrições avulsas. Explore alternativas internamente. Apresente comparação quando a pessoa pedir opções. Reserve o dossiê, a arquitetura detalhada e a rodada de aceite para pedidos de aprofundamento ou de condução da decisão de uma equipe. Use as restrições informadas e declare a suposição que mais pesa na escolha. Quando o prazo for desconhecido, proponha uma primeira versão pequena sem presumir um relógio de evento.

Antes de escolher, dê um passe curto pela [exploração de oportunidades](references/opportunity-exploration.md). Em temas amplos, ancore a favorita em um episódio real do contexto. Use relatos, registros operacionais ou fontes primárias disponíveis. Avance como hipótese quando faltar acesso e cite precisamente o que ainda precisa de evidência.

Abra com uma frase em linguagem comum que explique **quem faz o quê e o que melhora**. Desenvolva a ideia em três partes.

- **Dor e consequência.** Mostre o que aconteceu, quem arcou com a perda e como o trabalho é feito hoje. Diga o que sustenta a existência da dor e por que intervir naquele ponto pode mudar o resultado.
- **Como funciona.** Use uma cena para mostrar a intervenção completa. Explique as entradas, a parte difícil que o sistema resolve, a ação que passa a ser possível e o que acontece quando falta um recurso ou uma condição muda. Se o tema pede IA, mostre uma entrada que muda a decisão por causa do modelo e como o sistema verifica a saída.
- **O que dá para construir primeiro.** Recorte a quantidade de casos, usuários ou integrações preservando o trabalho mais valioso da solução. Descreva a dependência decisiva e um teste com a mesma tarefa para a proposta e a prática atual. Meça um resultado ligado à dor e mostre um caso difícil em que a solução precisa recalcular, mudar a ação ou reconhecer um impasse.

Mantenha a profundidade necessária para a pessoa entender e decidir. Siga para a seção de descoberta de hackathon quando o pedido for conduzir a escolha da equipe ou organizar a execução do evento.

## Quando a pessoa já tem uma ideia

Use a [referência de evolução de ideias](references/evolve-idea.md) quando pedirem para melhorar, aprofundar ou consertar uma proposta, inclusive depois de rejeitarem uma sugestão. Identifique o resultado e as escolhas que a pessoa quer preservar. Diagnostique onde a versão atual perde valor e compare maneiras de vencer esse gargalo. Responda com a versão recomendada, a mudança que faz diferença, o custo ou limite que ela introduz e o primeiro teste que separa ganho real de melhoria aparente. Se o mecanismo for o gargalo, use a seção de projeto de `mechanism-integrity` em apoio a essa decisão. Se a dificuldade estiver na experiência, na entrega ou na adoção, evolua essa parte.

## 1. Explore oportunidades antes de escolher uma dor

Extraia o resultado que o tema pede e separe restrições confirmadas de suposições. Explore alguns episódios e maneiras distintas de mudar o resultado antes de escolher. Se os caminhos estiverem parecidos ou o tema estiver amplo demais, use as lentes de [exploração de oportunidades](references/opportunity-exploration.md) num passe interno.

Explore resultados e mecanismos de valor diferentes antes de investigar a fundo. Para as oportunidades mais fortes, identifique quem vive a dor, quem pode agir e o que faz hoje, inclusive trabalho manual, ajuda humana ou deixar como está. Capture um episódio quando houver acesso. Procure um ganho observável frente à melhor alternativa atual.

Registre **fato** com fonte, contexto e alcance, **hipótese** com uma observação que a refutaria e **suposição** quando faltar base. Dados agregados indicam escala no universo medido; episódios recentes ajudam a investigar causas e consequências. Uma simulação ou relato isolado pode orientar a exploração, mas não prova demanda. Diferencie evidência do problema de evidência de adoção ou da solução.

## 2. Compare propostas com ambição e um recorte executável

Escolha pela combinação de **consequência relevante, intervenção que muda o desfecho e caminho até o primeiro uso**. Antes de recomendar, compare internamente a favorita com uma intervenção em outro ponto da causa. A ambição está no tamanho da mudança para a pessoa. Prefira a menor versão de uma intervenção forte.

- **Elimine propostas genéricas.** Se trocar o público ou o tema deixa o fluxo praticamente igual e perde-se pouco valor, volte à cena e encontre uma ação que resolva uma dificuldade daquele contexto. Uma interface familiar serve quando a ação que ela viabiliza muda o resultado.
- **Elimine promessas frágeis.** Percorra o primeiro uso e confira quem fornece cada entrada, quem pode agir sobre a saída e o que acontece depois. Se a primeira entrega depende de adesão em escala, dados inéditos, parceria ou acesso sem caminho plausível, redesenhe usando um recurso ao alcance da pessoa. Se perder o ganho nesse recorte, escolha outra proposta.
- **Teste a força da intervenção.** Compare com o melhor substituto que a pessoa já tem, como uma mensagem, planilha, regra simples, software existente ou ajuda humana. Se o substituto chega ao mesmo desfecho sob as mesmas restrições e com esforço parecido, volte ao problema. Um alerta ou resumo passa quando muda materialmente o resultado, por exemplo quando evita que uma janela de ação se feche. Se a consequência permanece e o produto apenas a descreve melhor, procure uma intervenção com mais efeito.
- **Decida pelo uso.** Entre ideias viáveis, favoreça a que muda de forma mais valiosa o resultado de um episódio sustentado por evidência. Facilidade de codar e efeito de palco ajudam a desempatar. Um protótipo com dados fictícios testa o fluxo e o mecanismo. Para afirmar ganho no uso, compare com a prática atual.

Compare **valor e aderência** ao objetivo, **diferenciação** frente à alternativa, **clareza** da experiência e **viabilidade** de demonstrar o núcleo. No hackathon, use os pesos oficiais quando existirem e indique que a comparação é provisória. Elimine recortes que violem uma regra ou que não possam demonstrar valor distinto no tempo disponível. Antes de descartar a direção, procure outro recorte que preserve o núcleo.

### Dossiê de descoberta para a equipe

Quando a equipe pedir descoberta aprofundada ou condução da escolha, entregue a proposta desenvolvida em `docs/DISCOVERY.md` antes de pedir aceite. Se só houver conversa, entregue o dossiê na própria resposta. Abra com a recomendação em linguagem comum, o tema literal e o relógio quando conhecido. Desenvolva a análise até dar à equipe informações suficientes para escolher, começar a construir e verificar se a solução funcionou. Use tabelas, fluxos e cenas concretas para orientar a leitura.

1. **Problema e oportunidade.** Descreva quem vive a dor, em que momento trava, o que já tenta, o custo da falha e quem pode mudar o resultado. Identifique a evidência de cada ponto, as premissas em aberto e como investigá-las.
2. **Alternativas e escolha.** Para cada finalista, explique como funciona, o valor que entrega, a melhor alternativa atual, o diferencial e o maior risco. Compare pelos critérios da banca. Justifique a vencedora pela mudança que ela torna possível, pela força da evidência e pela capacidade de prová-la na demo. Diga o que faria você mudar de ideia.
3. **Experiência da favorita.** Acompanhe a mesma pessoa desde a dor até o resultado. Mostre as ações da pessoa e do sistema, o que muda na tela e um caso em que o fluxo precisa de outra saída. Use Mermaid quando a superfície renderizar, ou um fluxo com setas em Markdown.
4. **Plano de construção.** Explique a arquitetura e o mecanismo, com entradas, regras, saídas, origem dos dados e dependências. Defina o MVP, módulos e responsáveis, sequência de implementação, checkpoints, primeiro corte e plano B. Verifique cedo a dependência que mais pode comprometer a demo. Registre o que foi testado de fato e o que segue como plano.
5. **Prova para a banca.** Descreva a entrada que o jurado muda, o resultado observável, o caso difícil, os testes de aceite e o que a demonstração consegue provar. Conecte a abertura e a demonstração aos critérios oficiais.

Mantenha regras e fontes oficiais em `docs/CHALLENGE.md`. Na conversa, apresente a recomendação, a objeção e a decisão pendente com link para o dossiê, expandindo todo ponto que a equipe pedir. O relógio limita a etapa do trabalho. A extensão depende da profundidade solicitada e do que a equipe precisa para decidir.

**IA na construção e no produto.** Ao planejar uso de agentes, dê a cada um uma tarefa verificável e especifique como a equipe revisa e integra a entrega. Escolha a tecnologia do produto pelo mecanismo de valor e pelas regras oficiais. IA pode acelerar pesquisa, código, testes e ensaio. Um modelo no caminho da demo precisa atender a uma exigência do tema ou entregar valor que o mecanismo proposto dependa de inferir.

Recomende uma direção mesmo sob incerteza, com força proporcional à fonte. Diga qual vantagem decidiu a comparação, a melhor objeção e o fato que mudaria a escolha. Se nenhuma for elegível, diga isso e indique o impedimento. Para a favorita, proponha uma verificação curta da premissa mais decisiva, com comportamento ou resultado observável. Se não couber no relógio, leve ao brief como risco aceito ou motivo para encerrar sem aprovação.

## 3. Rode a descoberta de hackathon

Use minutos decorridos desde a revelação. A equipe pode ajustar o orçamento inicial e redistribuir os blocos conforme o evento. Use a coluna mais próxima e comprima para caber no tempo real. Se o relógio já correu, use só as etapas que cabem no saldo.

| Etapa | Padrão 30 min | Curta 12 min | Relâmpago 7 min |
|---|---:|---:|---:|
| Triar regras e autoridade | 0–3 | 0–1 | 0–1 |
| Explorar em silêncio | 3–11 | 1–4 | 1–2 |
| Agrupar, comparar e recomendar | 11–18 | 4–7 | 2–4 |
| Ouvir objeções e decidir | 18–25 | 7–10 | 4–6 |
| Registrar e passar ao brief | 25–30 | 10–12 | 6–7 |

1. **Abra o relógio.** Pegue o tema literal, critérios, regras que eliminam propostas e tempo de construção de `CHALLENGE.md` ou da organização. Siga com lacunas declaradas. Combine no mesmo contato quem modera e qual pessoa a equipe autoriza a decidir no prazo. Sem delegação, peça um acordo explícito da equipe. Se o primeiro contato já pede propostas, entregue a comparação com o que sabe e encaminhe a decisão no mesmo contato.
2. **Faça um passe independente.** Em paralelo, use a seção de descoberta de `model-orchestra`. Sozinho, complete os dois passes de `references/opportunity-exploration.md` antes de comparar. Se a lista repetir mecanismos, faça no máximo um passe lateral dirigido dentro da síntese. Mostre até três propostas no padrão e até duas nas janelas menores, **uma por mecanismo de valor**. Confira o teste da cadeia de valor na referência antes de apresentá-las. Uma referência fraca ou a ideia já preferida pelo grupo pode aparecer como comparador da prática atual. Toda finalista deve ser realmente elegível para escolha.
3. **Faça uma rodada humana.** Cada pessoa anota uma opção e sua objeção decisiva antes de ouvir os demais. Na janela padrão, ouça uma objeção por pessoa em até 30 segundos. Nas janelas menores, leia as objeções individuais e responda à mais decisiva. Reserve o último minuto desse bloco para o aceite humano. Em empate, a pessoa delegada escolhe ou encerra sem aprovação. Sem aceite até o corte, registre em `docs/DISCOVERY.md` **encerrada sem aprovação**, horário, autoridade, recomendação e motivo conhecido. Se só houver conversa, devolva o status em uma linha. A equipe pode retomar com aceite explícito da direção e do recorte, sem refazer a exploração. A implementação começa após esse aceite.
4. **Feche na mesma interação do aceite.** Use a estrutura visual do dossiê em `docs/PRODUCT-BRIEF.md` para consolidar a direção aprovada e o plano de execução. Registre quem aprovou e quando, a razão da escolha, a objeção e a incerteza aceitas, e a condição de reabertura. Explicite a visão de produto, o núcleo de valor que o MVP demonstra, quem começa e o primeiro teste. Se tiver apenas a conversa, entregue o brief pronto para salvar. Passe imediatamente para `mechanism-integrity` e `pitch-structure`.

## 4. Trate fatos novos sem reiniciar a ideação

Durante a execução de um evento, reabra por regra oficial, evidência que refute a premissa central ou falha que inviabilize o núcleo. Se a pessoa pedir para evoluir a ideia ou reconsiderar uma decisão, use a seção de evolução respeitando o escopo do pedido e o estágio da entrega.

Suspenda qualquer parte invalidada por uma regra. Proponha primeiro um recorte compatível que preserve o núcleo. Se isso falhar, compare com a melhor alternativa já considerada. Em até cinco minutos ou no saldo menor disponível, leve o fato, o efeito e a recomendação à mesma autoridade humana em uma mensagem de escolha. Registre o aceite e atualize o brief. Sem aceite, use o registro de encerramento para a parte afetada. Reabra a direção inteira apenas se as opções de recorte deixarem de preservar o valor central.
