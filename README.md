# Genesis Skills

Skills para vencer hackathons com qualquer stack e qualquer agente que leia `SKILL.md` (Claude Code, Codex; outros leem os arquivos diretamente). Nascem de ensaios reais (Aceiro, Senha, Lupa da Chamada) e de pesquisa sobre projetos vencedores e critérios de jurados.

## Skills

| Skill | Quando | Saída principal |
|---|---|---|
| `hackathon-day` | O evento começou: regras, linha do tempo, papéis, congelamento, entrega | `docs/CHALLENGE.md`, cronograma |
| `problem-to-pain` | Tema revelado: dor concreta, 3 ideias, pontuação, one-liner | `docs/PRODUCT-BRIEF.md` |
| `mechanism-integrity` | Definir e provar o mecanismo: IA real/regra/simulação, entrada ao vivo, evidência, fallback | `docs/MECHANISM.md` |
| `pitch-structure` | Montar a tela e o pitch: estrutura padrão, `?demo=1`, roteiro de 3 min, templates | `docs/DEMO-SCRIPT.md`, templates |
| `art-direction` | Antes de desenhar: direção, conceito, DESIGN.md, motion, anti-slop | `design/DESIGN.md` |
| `demo-rehearsal` | Congelar, ensaiar 3x, roteiro=tela, plano B e checklist final | `docs/REHEARSAL.md` |
| `red-team` | Atacar a demo antes do jurado: inputs estranhos, offline, claims, segredos, mobile | `docs/RED-TEAM.md` |
| `judge-and-verify` | Antes de entregar e a cada ensaio: verificação no navegador e juiz cego | `design/evidence`, `design/judging` |
| `model-orchestra` | Coordenar modelos free em paralelo: smoke, papéis, banca, síntese | `reports/`, `design/judging/panel` |

## Scripts operacionais

- `skills/judge-and-verify/scripts/verify.mjs` — fidelidade/regras, overflow, erros, axe crítico/sério.
- `skills/judge-and-verify/scripts/observe.mjs` — 5s, densidade, story markers, input ao vivo, demo, gates P0.
- `skills/judge-and-verify/scripts/judge-packet.mjs` — pacote único para banca cega (inclui MECHANISM/REHEARSAL/claims).
- `skills/judge-and-verify/scripts/claim-ledger.mjs` — claims/números sem procedência provável.
- `skills/judge-and-verify/scripts/panel-pack.mjs` — gera prompts idênticos para banca multi-modelo.
- `skills/judge-and-verify/scripts/panel-collect.mjs` — consolida notas/pareceres em `verdict.md`/`panel.json`.
- `scripts/model-smoke.mjs` — registra disponibilidade de modelos gratuitos.
- `scripts/skill-lint.mjs` — lint estrutural do pack.

## Instalar

```sh
scripts/install.sh --user               # para você, em todos os projetos
scripts/install.sh --project /caminho   # dentro de um projeto
```

## Fluxo recomendado

1. `hackathon-day` — regras, tempo, entrega.
2. `problem-to-pain` — dor, usuário, one-liner.
3. `mechanism-integrity` — mecanismo real, fronteira, entrada ao vivo.
4. `pitch-structure` — primeira tela, `?demo=1`, antes/depois.
5. `art-direction` — identidade visual e motion com intenção.
6. `demo-rehearsal` — congelar, ensaiar, plano B.
7. `red-team` — quebrar demo antes do jurado.
8. `judge-and-verify` — verify, observe, judge packet, banca.

## Treino

As skills só mudam de versão depois de treino registrado em `TRAINING.md`. Protocolo: `skills/hackathon-day/references/drill-protocol.md`. Matriz de modelos free: `skills/judge-and-verify/references/model-matrix.md`.
