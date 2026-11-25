---
name: judge-and-verify
description: Avalia um app de hackathon como uma banca real — verificação no navegador (primeira tela com dor/promessa/ação em 360/768/1440 px, overflow, fontes, erros, estilos por estado) e banca de jurados especialistas que usam o app via Playwright (impacto, técnico, inovação, design, comunicação, patrocinador), com notas 0–10 ancoradas nos critérios mais usados em hackathons, deliberação e três correções. Use antes de entregar, após mudanças na abertura ou na demo, em ensaios, e quando perguntarem "está bom?", "qual seria a nota?" ou "o que um jurado diria?".
---

# Verificar e julgar

Testes aprovados não significam que o jurado entende. Rode as três etapas, com o app rodando.

## 1. Verificação de regras (`scripts/verify.mjs`)

```sh
node <skill>/scripts/verify.mjs http://127.0.0.1:3000/ [--spec design/fidelity.json] [--out design/evidence]
```

Requer Playwright no projeto (`bun add -d @playwright/test && bunx playwright install chromium`). Sem `fidelity.json`, verifica só a primeira tela (`[data-story=problem|promise|action]`), overflow e erros.

```json
{
  "viewports": [360, 768, 1440],
  "waitFor": "main",
  "firstViewport": ["[data-story=problem]", "[data-story=promise]", "[data-story=action]"],
  "fonts": ["Instrument Serif"],
  "states": [{ "name": "resultado", "actions": [{ "click": "text=Usar exemplo" }] }],
  "probes": [
    { "name": "Título", "selector": "h1", "viewports": [1440], "expect": { "font-size": ">= 64px" } },
    { "name": "Resultado", "selector": "[data-story=result]", "states": ["resultado"], "expect": { "font-variant-numeric": "~tabular-nums" } },
    { "name": "Aviso", "selector": "[data-alert]", "optional": true, "expect": { "color": "{--signal}" } }
  ]
}
```

- Valores: `{--var}` (ou `{var}`) lê a variável CSS do `:root`; `>= 64px`, `<= 300ms`, `= 0px` comparam números (px↔rem, s↔ms); `~texto` exige que contenha; o resto é igualdade (cores normalizadas).
- `viewports` e `states` numa regra a restringem a esses tamanhos e estados; `optional: true` aceita elemento ausente; `all: true` verifica todos os elementos, não só o primeiro.
- Inclua em `states` o resultado e o antes × depois: o que a banca verá também precisa passar.

## 2. Observação como jurado (`scripts/observe.mjs`)

```sh
node <skill>/scripts/observe.mjs http://127.0.0.1:3000/ [--out design/judging] [--click "text=Usar exemplo"]
```

Em 360 e 1440 px: tempo até o conteúdo, a tela aos 5 s, a página inteira, a ação principal clicada, cada passo do `?demo=1`, erros, overflow, texto visível da primeira tela e violações do axe (se `@axe-core/playwright` estiver instalado). Gera `observation.json` e capturas, que são a evidência comum da banca.

**Olhe as capturas você mesmo**, em especial durante a interação: nos ensaios, defeitos como um mecanismo "pixelado" ou uma comparação que sumia só apareceram nelas.

## 3. Banca de jurados

Monte a banca descrita em `references/panel.md`: **impacto, técnico, inovação, design, comunicação** (e **patrocinador**, se o evento exigir uma tecnologia). Cada jurado:
- é um agente separado, sem acesso à conversa nem às intenções do time;
- recebe a URL, `docs/CHALLENGE.md`, a saída do `observe.mjs` e o seu papel;
- **usa o app por 5 minutos** com Playwright (clica, muda entradas, abre a demo, tira prints) e, no caso do técnico, lê o repositório;
- dá uma nota de 0 a 10 com evidência e uma correção.

Claude Code: dispare os jurados em paralelo como subagentes novos (sem fork), um por papel. Codex ou outro agente: uma sessão limpa por jurado, ou em sequência. Pouco tempo: junte inovação com impacto e design com comunicação (3 jurados).

Depois, o **moderador** agrega: tabela de notas, nota ponderada pelos pesos oficiais (ou os padrões de `references/criteria.md`), deliberação, frase de defesa, três correções por ganho de nota por minuto e riscos da demo ao vivo.

Regras:
- Qualquer jurado que não entenda para quem/dor/ação em 5 s bloqueia o polimento visual: reescreva a abertura primeiro.
- Registre as notas de cada rodada em `docs/STATUS.md` para comparar.
- Após o congelamento, as correções só podem mexer em tela, demo e pitch.

Critérios e pesos mais comuns, com fontes: `references/criteria.md`.
