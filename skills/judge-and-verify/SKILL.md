---
name: judge-and-verify
description: Avalia um app de hackathon como uma banca real — verificação no navegador (primeira tela com dor/promessa/ação em 360/768/1440 px, overflow, fontes, erros, estilos por estado) e banca de jurados especialistas que usam o app via Playwright (impacto, técnico, inovação, design, comunicação, patrocinador), com notas 0–10 ancoradas nos critérios mais usados em hackathons, deliberação e três correções. Use antes de entregar, após mudanças na abertura ou na demo, em ensaios, e quando perguntarem "está bom?", "qual seria a nota?" ou "o que um jurado diria?".
---

# Verificar e julgar

Testes aprovados não significam que o jurado entende. Rode as etapas, com o app rodando.

## 1. Verificação de regras (`scripts/verify.mjs`)

```sh
node <skill>/scripts/verify.mjs http://127.0.0.1:3000/ [--spec design/fidelity.json] [--out design/evidence]
```

Requer Playwright no projeto (`bun add -d @playwright/test && bunx playwright install chromium`). Sem `fidelity.json`, verifica só a primeira tela (`[data-story=problem|promise|action]`), overflow e erros. Se `@axe-core/playwright` estiver instalado, roda axe WCAG 2A/2AA e falha em violações críticas/sérias.

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

- Valores: `{--var}` lê a variável CSS do `:root`; `>= 64px`, `<= 300ms`, `= 0px` comparam números; `~texto` exige que contenha; o resto é igualdade.
- `viewports` e `states` restringem a regra; `optional: true` aceita ausência; `all: true` verifica todos os elementos.
- Inclua em `states` o resultado e o antes × depois.

## 2. Observação como jurado (`scripts/observe.mjs`)

```sh
node <skill>/scripts/observe.mjs http://127.0.0.1:3000/ [--out design/judging] [--click "text=Usar exemplo"]
```

Em 360 e 1440 px: tempo até conteúdo, tela aos 5 s, página inteira, ação principal clicada, passos do `?demo=1`, erros, overflow, texto visível da primeira tela, densidade (palavras/números/controles), marcadores `data-story`, presença de input ao vivo e axe (se instalado). Gera `observation.json` e capturas.

O script marca **gates P0** e sai com código `2` se falhar: densidade acima do orçamento, ausência de `problem/promise/action` na primeira tela, ausência de input ao vivo, overflow, ou erros console/page. Gate falhando é defeito de entrega.

## 3. Judge packet (`scripts/judge-packet.mjs`)

```sh
node <skill>/scripts/judge-packet.mjs --in design/judging --out design/judging/packet.md
```

Gera um pacote único para banca cega: métricas, gates P0, capturas, passos do demo e checklist rápido. Use como entrada padrão dos jurados.

## 4. Claim ledger (`scripts/claim-ledger.mjs`)

```sh
node <skill>/scripts/claim-ledger.mjs .
```

Varre números em código/docs e aponta claims sem procedência provável. Todo número mostrado ao jurado deve ter fonte, "estimativa" ou "dado de exemplo". Use antes do congelamento. Guia: `../mechanism-integrity/references/claim-evidence.md`.

## 5. Banca de jurados

Monte a banca descrita em `references/panel.md`: **impacto, técnico, inovação, design, comunicação** (e **patrocinador**, se o evento exigir uma tecnologia). Use `scripts/panel-pack.mjs` para gerar prompts idênticos por papel:

```sh
node <skill>/scripts/panel-pack.mjs --url http://127.0.0.1:3000/ --challenge docs/CHALLENGE.md --packet design/judging/packet.md --out design/judging/panel
```

Cada jurado:
- é um agente separado, sem acesso à conversa nem às intenções do time;
- recebe URL, `docs/CHALLENGE.md`, `design/judging/packet.md` e o prompt do seu papel;
- **usa o app por 5 minutos** com Playwright e, no caso do técnico, lê o repositório;
- dá nota 0–10 com evidência e uma correção.

Depois, gere a consolidação inicial e peça ao moderador para completar:

```sh
node <skill>/scripts/panel-collect.mjs design/judging/panel
```

O **moderador** usa `verdict.md/panel.json`: tabela de notas, nota ponderada pelos pesos oficiais (ou `references/criteria.md`), deliberação, frase de defesa, três correções por ganho de nota por minuto e riscos da demo ao vivo.

## Regras

- Qualquer jurado que não entenda para quem/dor/ação em 5 s bloqueia polimento visual: reescreva a abertura primeiro.
- Registre notas por rodada em `docs/STATUS.md`.
- Após congelamento, correções só mexem em tela, demo e pitch.
- Defeito apontado por 2+ jurados independentes é prioridade 1.

Critérios e pesos: `references/criteria.md`. Formato de banca: `references/panel.md`.
