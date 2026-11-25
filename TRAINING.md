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
