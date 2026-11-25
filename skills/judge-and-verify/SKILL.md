---
name: judge-and-verify
description: Valida a tela de um app de hackathon como um jurado faria — verificação no navegador (primeira tela com dor/promessa/ação visíveis em 360/768/1440 px, overflow, fontes carregadas, erros, estilos computados contra design/fidelity.json, capturas por estado) e juiz-agente cego (teste dos 5 segundos, notas por critério, frase que o júri lembraria, três correções). Use antes de entregar, depois de cada mudança na abertura, em ensaios e quando perguntarem "está bom?", "um jurado entenderia?" ou "qual a nota?".
---

# Verificar e julgar

Testes automatizados aprovados não significam interface que se explica. Rode as duas etapas.

## 1. Verificação no navegador

Com o app rodando:

```sh
node <skill>/scripts/verify.mjs http://127.0.0.1:3000/ [--spec design/fidelity.json] [--out design/evidence]
```

Requer Playwright no projeto (`bun add -d @playwright/test && bunx playwright install chromium`). Sem `fidelity.json`, verifica só a primeira tela (`[data-story=problem|promise|action]`), overflow e erros.

`design/fidelity.json` (5 a 10 regras que expressam a identidade e costumam escapar):

```json
{
  "viewports": [360, 768, 1440],
  "waitFor": "main",
  "firstViewport": ["[data-story=problem]", "[data-story=promise]", "[data-story=action]"],
  "fonts": ["Instrument Serif"],
  "states": [{ "name": "resultado", "actions": [{ "click": "text=Usar exemplo" }] }],
  "probes": [
    { "name": "Título", "selector": "h1", "viewports": [1440], "expect": { "font-size": ">= 64px" } },
    { "name": "Números", "selector": "[data-reading]", "all": true, "expect": { "font-variant-numeric": "~tabular-nums" } },
    { "name": "Sinal", "selector": "[data-signal]", "expect": { "color": "{--signal}" } }
  ]
}
```

Valores: `{--var}` lê a variável CSS do `:root`; `>= 64px`, `<= 300ms`, `= 0px` comparam números; `~texto` exige que contenha; o resto é igualdade (cores normalizadas). Inclua em `states` o resultado e o antes × depois: o que o jurado verá na demo também precisa passar.

**Depois, abra as capturas** (`design/evidence/*.png`) e olhe de verdade, em especial **durante a interação**: o verificador não julga a qualidade da camada do mecanismo (nos ensaios, um fogo "pixelado" e uma comparação que colapsava só apareceram nas capturas).

## 2. Juiz-agente cego

O juiz **não pode ter visto o código nem a conversa**. No Claude Code, rode um subagente novo (sem fork) passando só as capturas e os critérios; no Codex, uma sessão limpa. Prompt completo em `references/judge-prompt.md`. Resumo:

1. **5 segundos**, só com a captura da primeira tela: para quem é? qual dor? o que faço agora? que número ficou?
2. **Notas** de 0 a 10 por critério oficial (ou: impacto, execução técnica, originalidade, design/UX, uso de IA, comunicação), justificadas pelo que está visível.
3. **A frase** que um jurado usaria para defender o projeto na deliberação.
4. **Três correções** de maior impacto na tela ou no pitch, sem funcionalidades novas.
5. **Riscos** da demo ao vivo.

Qualquer "não sei" na etapa 1 bloqueia o polimento visual: reescreva a abertura primeiro. Registre notas e frases a cada rodada para comparar.
