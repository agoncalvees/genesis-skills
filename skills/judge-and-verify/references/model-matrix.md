# Matriz de modelos gratuitos para treino

Objetivo: usar todos os modelos free disponíveis para stress-testar as skills, sem depender de um único modelo.

## Smoke (antes de cada drill)

| Modelo | Papel sugerido | Status 24/11/2026 | Observação |
|---|---|---|---|
| opencode/hy4-flash-free | moderador / fallback | ok | estável nas sondas |
| opencode/flint-40b-free | jurado técnico | ok | bom para leitura crítica |
| opencode/tidepool-alpha-free | jurado impacto/comunicação | ok | usar prompt curto e objetivo |
| opencode/iceman-free | red-team rápido | ok | bom para achar brechas |
| opencode/beam-free | jurado inovação | ok | alternar com tidepool |
| opencode/nemotron-3.5-lightning-free | checklist/triagem | ok | rápido para gates |
| opencode/big-pickle | jurado design/clareza | ok | validar com capturas |
| opencode/deepseek-v4.1-flash-free | reserva | quota | retry com backoff |
| opencode/nemotron-3.5-super-vl-free | inspeção visual | quota | usar quando disponível para capturas |
| opencode/mimo-v2.6-flash-free | reserva | quota | retry/backoff |

## Rodadas

1. **R0 Smoke**: sondar todos; registrar `reports/models-smoke-YYYY-MM-DD.json`.
2. **R1 Build**: 1 modelo implementa drill com skills; sem copiar código de produto anterior.
3. **R2 Banca**: 5 modelos diferentes julgam com mesmo packet; moderador agrega.
4. **R3 Red-team**: 1 modelo tenta quebrar (input estranho, rede off, claim sem fonte, IA fake).
5. **R4 Regressão**: após patch de skill, repetir R2 e comparar delta.

## Regras

- Mesmo input para todos os jurados: URL, `CHALLENGE.md`, `design/judging/packet.md`, capturas.
- Sem contexto do time. Sem “o que queríamos fazer”.
- Divergência >=2 pontos exige evidência e deliberação.
- Defeito apontado por 2+ jurados é prioridade 1.
- Registrar custo/quota/latência percebida; modelo com cota vira “reserva”, não some da matriz.
