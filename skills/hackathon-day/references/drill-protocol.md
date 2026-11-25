# Protocolo de treino (drill)

## Setup
1. `scripts/new-drill.sh <nome> "<tema>"`
2. Registrar início em `docs/STATUS.md`.
3. Rodar smoke de modelos e salvar `reports/models-smoke-YYYY-MM-DD.json`.

## Execução
- A equipe informa tema e tempo. Para exercitar descoberta, registre o que sustenta a direção ou a próxima verificação. Em treino de entrega, a equipe precisa aprovar explicitamente a direção antes de acionar o agente de build. Se não houver aprovação, encerre a rodada na descoberta.
- Sem copiar código de produtos anteriores.
- Em treino de entrega após aprovação, reúna `CHALLENGE.md`, `PRODUCT-BRIEF.md`, `MECHANISM.md`, `DEMO-SCRIPT.md`, `REHEARSAL.md`, `design/DESIGN.md`, `design/fidelity.json` e evidências.

## Medições
- Registre qualidade da evidência, incertezas sobre demanda e clareza do one-liner. Após aprovação e em treino de entrega, registre também tempos, funcionamento e evidências da demo.
- `verify.mjs` exit 0.
- `observe.mjs --profile tool` (ou `--profile landing`, conforme a demo) exit 0, sem gates P0.
- `judge-packet.mjs` gerado.
- `claim-ledger.mjs` sem claims suspeitas no caminho da demo.

## Banca
- 5 jurados de modelos diferentes, sem contexto do time.
- Moderador agrega nota ponderada, consenso, 3 correções, risco de demo ao vivo.
- Cada falha vira patch em skill + registro em `TRAINING.md`.

## Promoção
Skill/pack só é “validado para hackathon” após 2 drills sem regressão nos gates P0 e com ganho ou estabilidade na nota ponderada.
