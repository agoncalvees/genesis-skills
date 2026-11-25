---
name: judge-and-verify
description: Verifica produtos web no navegador com evidência de estados, viewport, acessibilidade, erros e contratos declarados. Em hackathons, também instrumenta a demo e orienta a avaliação pelos critérios da banca.
---

# Verificar e julgar

Com o app rodando, execute as verificações pertinentes e compare a evidência com a tarefa da pessoa. Para hackathons, selecione os perfis de demo e os critérios do evento.

## 1. Verificação de regras (`scripts/verify.mjs`)

```sh
node <skill>/scripts/verify.mjs http://127.0.0.1:3000/ [--profile product|demo] [--spec design/fidelity.json] [--out design/evidence]
```

Requer Playwright no projeto (`bun add -d @playwright/test && bunx playwright install chromium`). O perfil padrão `product` verifica HTTP, overflow e erros, além dos contratos declarados no `fidelity.json` quando houver. `--profile demo` acrescenta os marcadores de pitch na primeira tela se a spec não definir seletores. Se `@axe-core/playwright` estiver instalado, roda axe WCAG 2A/2AA e falha em violações críticas/sérias. Inspecione as capturas e exercite o fluxo para avaliar usabilidade e identidade.

```json
{
  "viewports": [360, 768, 1440],
  "waitFor": "main",
  "firstViewport": ["[data-primary-action]"],
  "states": [{ "name": "resultado", "actions": [{ "click": "text=Usar exemplo" }] }],
  "probes": [
    { "name": "Erro", "selector": "[data-error]", "states": ["resultado"], "optional": true, "expect": { "color": "{--text-danger}" } }
  ]
}
```

- Valores: `{--var}` lê a variável CSS do `:root`; `>= 64px`, `<= 300ms`, `= 0px` comparam números; `~texto` exige que contenha; o resto é igualdade.
- `viewports` e `states` restringem a regra; `optional: true` aceita ausência; `all: true` verifica todos os elementos.
- Em `states`, exercite as mudanças relevantes para a tarefa. Inclua antes e depois quando fizerem parte do contrato de demo. Use `fonts` somente para fontes web que o projeto tenha declarado e espere carregar.

## 2. Observação como jurado (`scripts/observe.mjs`)

```sh
node <skill>/scripts/observe.mjs http://127.0.0.1:3000/ [--profile product|tool|landing] [--out design/judging] [--click "text=Usar exemplo"]
```

Em 360 e 1440 px, registra tempo até conteúdo, primeira tela, página inteira, erros, overflow, densidade e axe (se instalado). Gera `observation.json` e capturas. O clique acontece com seletor explícito no perfil de produto. Os perfis de demo acrescentam a navegação do tour.

No perfil padrão `product`, os gates P0 cobrem falha HTTP, overflow e erros de console/página. Use `--click` com um seletor de ação seguro para o ambiente de teste. Os perfis de demo `tool` e `landing` verificam também os marcadores `problem/promise/action` na primeira tela e exercitam o tour. `tool` exige input ao vivo por padrão. Use `--no-require-input` quando o contrato não exigir um campo de texto. A densidade é evidência descritiva. Gates falhando geram código de saída `2`.

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

O **moderador** usa `verdict.md/panel.json` para reunir notas, evidências, riscos e correções. Registre separadamente a evidência de que o mecanismo rodou, a evidência de ganho na tarefa e a clareza da apresentação. Antes do congelamento, priorize falhas que invalidam o resultado ou a prova.

## Regras da banca em hackathon

- Qualquer jurado que não entenda para quem/dor/ação em 5 s bloqueia polimento visual: reescreva a abertura primeiro.
- Registre notas por rodada em `docs/STATUS.md`.
- Após congelamento, correções só mexem em tela, demo e pitch.
- Defeito apontado por 2+ jurados independentes é prioridade 1.

Critérios e pesos: `references/criteria.md`. Formato de banca: `references/panel.md`.
