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
