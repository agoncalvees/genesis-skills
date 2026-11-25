# Treino das skills

Treinos de entrega usam tema surpresa, repositório vazio e avaliação de um juiz cego. Para descoberta, verifique como a equipe usa evidência, examina alternativas e decide se há base para seguir.

## Protocolo de um treino
1. `scripts/new-drill.sh <nome> "<tema>"` cria `~/orca/drills/<nome>` vazio, com git, as skills instaladas e `THEME.md`.
2. Um agente novo recebe tema, tempo e a instrução "use as skills disponíveis". O projeto começa do zero e a construção depende da aprovação explícita da equipe.
3. Medir: minutos até o one-liner, até o caminho da demo rodar, até a entrega; resultado do `verify.mjs`.
4. Juiz cego (subagente novo) com as capturas: respostas dos 5 s, notas, frase do júri, correções.
5. Registrar abaixo. Cada falha vira correção em uma skill, com o motivo.

## Registro
| Data | Treino | Tema | One-liner (min) | Demo rodando (min) | Total (min) | Verify | 5 s (para quem / dor / ação) | Nota média | Correções nas skills |
|---|---|---|---|---|---|---|---|---|---|
| 24/11 | d1-evasao | Evasão escolar com IA | 1 | 5 | 10 (de 90) | 1748/1748 | ok / ok / ok (5 de 5 jurados) | 6,2 ponderada (técnica 5, impacto 7, inovação 5, design 7,5, comunicação 7) | "IA" era léxico de regex rotulado como IA (3 jurados); sem entrada ao vivo; textos fixos; dados armados; roteiro ≠ tela; contraste e foco. → regras de honestidade técnica e "não termine cedo" (hackathon-day), IA real decidida na escolha (problem-to-pain), entrada ao vivo, fontes, roteiro = tela, LGPD, limite em voz alta (pitch-structure), contraste/foco/rolagem (art-direction), consenso da banca (judge-and-verify) |
| 24/11 | (feedback do responsável sobre d1 e Senha) | — | — | — | — | — | densidade da 1ª tela: Lupa 247 palavras/23 números; Senha 163/39 | — | "interface vomita informação": orçamento de informação (≤ 60 palavras, 1 número, 1 ação), revelação progressiva, um caso em vez da tabela; observe.mjs mede densidade e o jurado de design limita a nota |

## Smoke de modelos gratuitos (24/11/2026)

Fonte: probes OpenCode via subagentes + `scripts/model-smoke.mjs`.

| Modelo | Status | Uso |
|---|---|---|
| opencode/hy4-flash-free | ok | moderador/fallback |
| opencode/flint-40b-free | ok | jurado técnico |
| opencode/tidepool-alpha-free | ok | impacto/comunicação |
| opencode/iceman-free | ok | red-team |
| opencode/beam-free | ok | inovação |
| opencode/nemotron-3.5-lightning-free | ok | triagem/gates |
| opencode/big-pickle | ok | design/clareza |
| opencode/deepseek-v4.1-flash-free | quota | reserva/backoff |
| opencode/nemotron-3.5-super-vl-free | quota | inspeção visual quando disponível |
| opencode/mimo-v2.6-flash-free | quota | reserva/backoff |

Matriz completa: `skills/judge-and-verify/references/model-matrix.md`. Relatório: `reports/models-smoke-2026-11-24.json`.

## Drill d2-vias-20261124 (24/11/2026, simulado 90 min)

- Tema: “Triagem de denúncias de buracos e riscos em vias urbanas com IA”.
- Artefato: `~/orca/drills/d2-vias-20261124` (Vite+React+TS, mecanismo híbrido local rotulado, dados fictícios).
- Gates: `verify.mjs` 4/4; `observe.mjs` ok sem P0 (360: 35 palavras/2 números/3 controles; 1440: 35/2/3); 0 overflow/0 erros; input ao vivo altera resultado.
- Banca: pacote gerado; veredito simulado consolidado por `panel-collect.mjs` média 7.46/10 (impacto 7.8, técnico 7.2, inovação 6.8, design 7.6, comunicação 7.9).
- Calibração: `claim-ledger` tinha ruído em lockfiles e bug de duplicação; corrigido para ignorar lockfiles e sair limpo. Gate de densidade forçou simplificação real da 1ª dobra.
- Pendências: rodar banca com 5 modelos free independentes ao vivo (não só simulação), gravar vídeo real, melhorar explicabilidade/confiança do score.

## Drills D3 e D4 · 25/11/2026

Dois agentes Codex `gpt-6-luna`, em contextos novos e worktrees isoladas, construíram apps do zero a partir de temas surpresa; nenhum código de app Genesis foi copiado, nenhum Claude foi usado e não houve deploy. As notas abaixo vêm de cinco jurados Codex independentes em modelos diferentes. São avaliações simuladas, não substituem uma banca humana.

| Drill | Tema | One-liner | Demo executável | Total | Gates automatizados | Leitura em 5 s | Nota ponderada |
|---|---|---:|---:|---:|---|---|---:|
| d3-bancada | Encaminhar consertos numa oficina comunitária | ~1 min (aprox.) | <5 min; primeira versão antes de 4 min 19 s | 10 min 21 s medidos (03:13:57–03:24:18 UTC) | Build passou; verify 5/5; observe sem P0, 0 overflow/erros | Público e ação entendidos; o papel da coordenadora e o gargalo ficaram implícitos para parte da banca | 6,53/10 |
| d4-alimentos | Partilhar excedentes de mercados entre cozinhas comunitárias | 22 min simulados | 54 min simulados | 90 min simulados; tempo real não medido | Verify 3/3; observe sem P0, 0 overflow/erros; axe manual sem violações registradas | Público, dor e ação entendidos; a operação detalhada fica abaixo da dobra no celular | 5,88/10 |

Pesos de `criteria.md`: técnica 25%, impacto 25%, inovação 20%, design 15%, comunicação 15%. Médias calculadas das notas especializadas: D3 (6,0; 6,0; 7,0; 7,0; 7,0) = 6,53. D4 (5,3; 5,0; 6,0; 6,0; 8,0) = 5,88. Não havia pesos oficiais nos desafios.

### Falhas que orientaram a skill

- **D3:** a regex bloqueava termos canônicos, mas encaminhava paráfrases como “cabo descascado”, “soltando fumaça” e “fuga de corrente”. A promessa “com segurança” era mais forte que o mecanismo. Negações também eram tratadas como termos positivos.
- **D4:** a interface dizia considerar prazo e refrigeração, mas a regra só usava quantidade e ordem fixa. `-12` virava `12`, `12,5` virava `5`, valores acima do teto eram cortados silenciosamente e duas quantidades no texto podiam produzir uma partilha errada. O ledger retornou 82 ocorrências heurísticas, incluindo números de cenário, métricas e constantes de implementação.
- A skill `red-team` passou a exigir uma matriz do contrato de entrada, variações isoladas dos atributos prometidos, paráfrases de risco e limites numéricos com rejeição explícita. O cenário de pressão foi registrado em `reports/skill-probes/red-team-contract.md`.
- Cinco novas sessões Codex (gpt-6.1-terra, gpt-6.2-astra, gpt-6.2-sol, gpt-6.1-sol e gpt-5.6-luna) aplicaram a skill atualizada aos dois apps: **5/5 cobriram todos os critérios e bloquearam corretamente ambos**. Relatórios individuais estão nos diretórios de cada drill.
- Uma chamada sem caminho ao `claim-ledger.mjs` varria o diretório atual e podia imprimir trechos de arquivos de treino sem relação com o produto. O script agora exige um arquivo ou diretório explícito; teste de regressão primeiro reproduziu a impressão de um sentinela e depois passou.

**Limites e retomada:** o tamanho da amostra é n=2 drills autorais e n=5 avaliações Codex por drill; não mede generalização, impacto real, uso por cozinhas/oficinas ou juízo humano. Os apps de treino continuam sem correções e devem permanecer bloqueados para uso operacional. O ledger ainda gera falsos positivos em valores sintéticos/constantes; reduzir o ruído sem ocultar claims de produto segue como tarefa futura.

## Sonda de descoberta · 25/11/2026

Dois agentes em contextos novos receberam o mesmo caso hipotético. Um hackathon de duas horas, um relato indireto sobre horários de atendimento desatualizados, um chatbot sugerido e nenhuma decisão do time. Com a skill anterior, o agente somou as notas e recomendou um cartão digital com base no relato e na facilidade de demonstrar. Com a revisão, o agente propôs confirmar o episódio com moradores e com quem publica os horários, comparar com corrigir o canal atual e aguardar evidência e aprovação. Esse teste verifica uma mudança de comportamento no cenário. A demanda por uma solução depende de verificação com as pessoas envolvidas.

## Correção após a segunda simulação · 25/11/2026

A equipe relatou melhora na clareza, fundamentação, pensamento crítico e hipóteses, mas ainda observou propostas incrementais e baixa ambição de produto. A auditoria identificou a convergência prematura em três lugares: a etapa de descoberta exigia sinais de adoção, ganho e viabilidade para aprovar; a comparação valorizava impacto mensurável e prova de demo; e a execução/pitch não separava com nitidez a visão completa do recorte construído. A revisão adiciona exploração de oportunidades por perspectiva, causa e alavanca, conserva até três propostas com visão/diferencial/experiência/recorte/riscos, permite prototipar sob incerteza declarada e mantém o demo como prova de uma fatia. A simulação seguinte ainda não foi iniciada; esta revisão segue candidata até nova avaliação.

### Sonda de primeira resposta · 25/11/2026

Dois agentes em contextos separados responderam aos mesmos temas fictícios, desperdício em feiras livres e quebra de equipamento em pequenos comércios com demo offline de 90 segundos. A cópia instalada de `4bd9d7a` listou finalistas e pediu aceite num relógio sugerido nos dois casos. A revisão recomendou, respectivamente, vender sobras em sacolas para clientes da banca e replanejar offline a fila de uma gráfica após uma pane. Nas duas respostas, mostrou a cena, o primeiro fluxo e um teste contra a prática atual. Na demo offline, mudar o prazo de um pedido alterou a ação sugerida. A sonda avalia as respostas de ideação com leitura explícita da skill. A validação das hipóteses depende de uso real.

Uma sessão nova do Codex CLI recebeu apenas o tema da feira. O log confirmou a leitura da cópia instalada de `problem-to-pain`. A sessão escolheu uma ideia, descreveu a reserva e a retirada das sacolas e propôs medir o descarte. A recomendação chegou na primeira resposta, sem rodada de aceite.

### Sonda de dor e mecanismo · 25/11/2026

No tema de cidades resilientes do Hack IA Brasil, duas propostas anteriores, avisar desvios de ônibus e juntar interdições de obras, foram rejeitadas pelo usuário por falta de profundidade e ligação com uma dor real. A revisão usa um episódio documentado, compara o desfecho com a prática atual e preserva a intervenção principal ao reduzir o MVP.

A nova simulação parte da realocação escolar após as enchentes de maio de 2024, documentada pela [SMED de Porto Alegre](https://legislacao.portoalegre.rs.gov.br/norma/49310). A [política da Seduc-RS](https://educacao.rs.gov.br/upload/arquivos/202505/06152419-politica-de-protecao-a-trajetoria-do-estudante.pdf) descreve realocação e transporte até o local temporário. Numa sonda sintética em Python, a alocação conjunta de duas turmas respeitou capacidade e opções de transporte e atendeu 48 estudantes. A regra de proximidade aplicada em ordem de chegada atendeu 24. Ao retirar um local do cenário, a alocação conjunta caiu para 24. A sonda confirma o comportamento do exemplo de alocação. A extração com IA e a comparação com o processo de uma secretaria ainda precisam ser testadas.

Um agente em contexto separado leu a revisão e recebeu o tema com as fontes públicas, sem a proposta. Recomendou recalcular vagas e transporte em conjunto, identificou a confirmação operacional como dependência e propôs medir tempo até o plano e estudantes com vaga e transporte. Essa sonda avalia a escolha com evidência fornecida.

### Sonda de evolução de ideias · 25/11/2026

Dois agentes em contextos separados aplicaram a versão anterior e a revisada a pedidos de evolução com dados fictícios. As duas versões chegaram a uma prorrogação de reserva por mensagem e planilha quando o livro não tem fila e a um remanejamento de turmas que combina IA para interpretar comunicados com alocação que respeita vagas e transporte. A revisão também recebeu um piloto fictício no qual o zelador já priorizava bem e a maior parte dos atrasos vinha de falta de acesso ao imóvel. A resposta preservou o formulário, transferiu a intervenção para a confirmação de acesso antes da saída do técnico e propôs medir visitas perdidas, tempo até o reparo e esforço da portaria.

Em uma sessão nova do Codex CLI com o mesmo piloto fictício, o log confirmou a seleção de `problem-to-pain` e a leitura de `references/evolve-idea.md` da instalação local. A sessão chegou à mesma mudança de intervenção e condicionou a IA a um eventual gargalo de triagem. As sondas verificam escolha de abordagem e roteamento. Ainda falta observar impacto em uso real.
