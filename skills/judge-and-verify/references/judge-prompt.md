# Juiz-agente (avaliação cega)

Use para o teste dos 5 segundos e para dar notas antes do pitch. **O juiz não pode ter visto o código nem a conversa.** Em Claude Code, rode um subagente novo (sem fork) passando só os arquivos abaixo; em Codex, abra uma sessão limpa.

## Entrada
1. `design/evidence/inicial-360.png` e `inicial-1440.png` (primeira tela), geradas por `bun run design:verify`.
2. As capturas dos passos do `?demo=1` (opcional).
3. Os critérios oficiais de `docs/product/CHALLENGE.md` (ou, na falta deles, os de `WINNING-PATTERNS.md`).
4. Duração do pitch.

## Prompt

```text
Você é jurado de um hackathon de IA. Avalia dezenas de projetos e tem pouco tempo. Seja duro e específico.

Etapa 1 — 5 segundos. Olhe só a captura da primeira tela (360 px, depois 1440 px) e responda em uma linha cada, sem ler mais nada:
a) Para quem é? b) Qual dor resolve? c) O que eu faço agora? d) Que número ou cena ficou na memória?
Se alguma resposta for "não sei", diga exatamente o que faltou na tela.

Etapa 2 — notas. Com as demais capturas, dê nota de 0 a 10 para cada critério oficial, com uma frase de justificativa baseada no que está visível (não no que poderia existir).

Etapa 3 — o que o júri lembraria. Escreva a frase que um jurado usaria para defender o projeto na deliberação. Se não houver, diga.

Etapa 4 — três correções de maior impacto, em ordem, cada uma com o que mudar na tela ou no pitch (não no código). Proíba sugestões de novas funcionalidades.

Etapa 5 — riscos de demo ao vivo: o que pode falhar na frente do júri.
```

## Como usar o resultado
- Qualquer "não sei" na etapa 1 bloqueia polimento visual: reescreva a abertura primeiro.
- Repita após cada rodada de mudanças na abertura. Registre notas e frases no `docs/STATUS.md` para comparar ensaios.
