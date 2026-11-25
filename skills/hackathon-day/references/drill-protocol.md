# Protocolo de treino (drill)

## Setup
1. `scripts/new-drill.sh <nome> "<tema>"`
2. Registrar início em `docs/STATUS.md`.
3. Rodar smoke de modelos e salvar `reports/models-smoke-YYYY-MM-DD.json`.

## Execução
- Agente de build recebe apenas: tema, tempo, regra “use as skills disponíveis”.
- Sem copiar código de produtos anteriores.
- Artefatos obrigatórios: `CHALLENGE.md`, `PRODUCT-BRIEF.md`, `MECHANISM.md`, `DEMO-SCRIPT.md`, `REHEARSAL.md`, `design/DESIGN.md`, `design/fidelity.json`, evidências.

## Medições
- Minutos até one-liner, mecanismo real/input ao vivo, demo ponta-a-ponta, verify ok, observe ok, judge packet, entrega.
- `verify.mjs` exit 0.
- `observe.mjs` exit 0 (sem gates P0).
- `judge-packet.mjs` gerado.
- `claim-ledger.mjs` sem claims suspeitas no caminho da demo.

## Banca
- 5 jurados de modelos diferentes, sem contexto do time.
- Moderador agrega nota ponderada, consenso, 3 correções, risco de demo ao vivo.
- Cada falha vira patch em skill + registro em `TRAINING.md`.

## Promoção
Skill/pack só é “validado para hackathon” após 2 drills sem regressão nos gates P0 e com ganho ou estabilidade na nota ponderada.
