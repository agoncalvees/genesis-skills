---
name: problem-to-pain
description: Use para explorar oportunidades, descobrir problemas, gerar e comparar ideias e escolher uma direção de produto diferenciada, em hackathons ou em outros contextos.
---

# Descoberta e decisão de produto

Em hackathons, conduza a escolha pelo protocolo abaixo, no relógio de `hackathon-day`. Em descoberta sem prazo de evento, use os mesmos princípios de exploração e comparação e combine com a equipe o tempo para pesquisar e decidir.

Se a equipe trouxer só o tema, explore alternativas e devolva uma proposta concreta com um dossiê de descoberta no primeiro contato. Explique o resultado buscado e apresente a proposta como hipótese onde faltar evidência. Siga com as informações disponíveis e indique as lacunas que podem mudar a escolha.

## 1. Explore oportunidades antes de escolher uma dor

Extraia o objetivo do brief e separe restrições confirmadas de suposições. Antes de filtrar por facilidade, percorra públicos, momentos, causas e maneiras distintas de mudar o resultado. Use primeiros princípios e criatividade lateral para buscar oportunidades além de automatizar a etapa atual. Consulte `references/opportunity-exploration.md` para esse passe interno.

Explore resultados e mecanismos de valor diferentes antes de investigar a fundo. Para as oportunidades mais fortes, identifique quem vive a dor, quem pode agir e o que faz hoje, inclusive trabalho manual, ajuda humana ou deixar como está. Capture um episódio quando houver acesso. Procure um ganho observável frente à melhor alternativa atual.

Registre **fato** com fonte, contexto e alcance, **hipótese** com uma observação que a refutaria e **suposição** quando faltar base. Dados agregados indicam escala no universo medido; episódios recentes ajudam a investigar causas e consequências. Uma simulação ou relato isolado pode orientar a exploração, mas não prova demanda. Diferencie evidência do problema de evidência de adoção ou da solução.

## 2. Compare propostas com ambição e um recorte executável

Para cada proposta, desenvolva a mudança significativa na experiência, no resultado ou em quem pode agir. Diferenciação exige um ganho material frente à prática atual. Use viabilidade para escolher uma parte demonstrável dessa mudança e registrar o caminho além do evento.

Compare **valor e aderência** ao objetivo, **diferenciação** frente à alternativa, **clareza** da experiência e **viabilidade** de demonstrar o núcleo. No hackathon, use os pesos oficiais quando existirem e indique que a comparação é provisória. Elimine recortes que violem uma regra ou que não possam demonstrar valor distinto no tempo disponível. Antes de descartar a direção, procure outro recorte que preserve o núcleo.

### Dossiê de descoberta para a equipe

Entregue a proposta desenvolvida em `docs/DISCOVERY.md` antes de pedir aceite. Se só houver conversa, entregue o dossiê na própria resposta. Abra com tema literal, objetivo, recomendação, público, resultado e relógio quando conhecido. Trate essa abertura como entrada para o documento completo. Desenvolva a análise até dar à equipe informações suficientes para escolher, começar a construir e verificar se a solução funcionou. Use tabelas, fluxos e cenas concretas para orientar a leitura.

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

Reabra só quando houver fonte e consequência decisivas: regra ou critério oficial confirmado que torna o plano inelegível ou muda a escolha, evidência que refuta a premissa central, ou falha comprovada que inviabiliza a demonstração do núcleo. Preferências, empate antigo, pedidos de mais opções e dificuldades já aceitas ficam registrados para depois.

Suspenda qualquer parte invalidada por uma regra. Proponha primeiro um recorte compatível que preserve o núcleo. Se isso falhar, compare com a melhor alternativa já considerada. Em até cinco minutos ou no saldo menor disponível, leve o fato, o efeito e a recomendação à mesma autoridade humana em uma mensagem de escolha. Registre o aceite e atualize o brief. Sem aceite, use o registro de encerramento para a parte afetada. Reabra a direção inteira apenas se as opções de recorte deixarem de preservar o valor central.
