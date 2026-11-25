# Protocolo de treino (drill)

## Setup
1. Use um tema novo e um diretório de treino para os registros, com regras e um limite de tempo explícitos.
2. Registre início, pessoas, agentes disponíveis e orçamento em `docs/STATUS.md` do treino.

## Execução
- Rode a descoberta de `problem-to-pain` e registre o resultado no prazo. Em treino de entrega, só acione o build após aprovação explícita da direção e do recorte.
- Sem copiar código de produtos anteriores.
- Em treino de entrega após aprovação, reúna `CHALLENGE.md`, `PRODUCT-BRIEF.md`, `MECHANISM.md`, `DEMO-SCRIPT.md`, `REHEARSAL.md`, `design/DESIGN.md`, `design/fidelity.json` e evidências.

## Medições
- Para descoberta, registre tempo real até decisão ou encerramento, interações humanas, rodadas, diversidade de mecanismos, qualidade da evidência e clareza do one-liner. Se houver telemetria, registre tokens e ferramenta. Anote a cobertura de agentes e o que foi simulado em `TRAINING.md`.
- Em treino de entrega, registre funcionamento e evidências da demo e avalie os gates abaixo.
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
