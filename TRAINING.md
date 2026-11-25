# Treino das skills

Uma skill só é considerada validada depois de passar por treinos com tema surpresa, repositório vazio e nota do juiz cego.

## Protocolo de um treino
1. `scripts/new-drill.sh <nome> "<tema>"` cria `~/orca/drills/<nome>` vazio, com git, as skills instaladas e `THEME.md`.
2. Um agente novo (sem contexto do Genesis) recebe só: o tema, o orçamento de tempo (90 min = 6 h comprimidas em 1/4) e a instrução "use as skills disponíveis". Projeto do zero, sem copiar código do Genesis além dos templates das skills.
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
