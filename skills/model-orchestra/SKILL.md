---
name: model-orchestra
description: Coordena vários modelos gratuitos em paralelo para construir, julgar, red-teamar e consolidar um hackathon — com papéis claros, mesmo input, smoke de disponibilidade, fallback por cota e síntese por evidência. Use quando houver mais de um agente/modelo disponível, quando quiser banca multi-modelo, ou quando precisar dividir trabalho sem perder consistência.
---

# Orquestra de modelos gratuitos

Use modelos free como **painel especializado**, não como vozes aleatórias. O ganho vem de papéis distintos + mesmo input + síntese.

## 1. Smoke e escalação

Antes do drill:

```sh
node scripts/model-smoke.mjs --out reports/models-smoke-YYYY-MM-DD.json --set opencode/hy4-flash-free=ok ...
```

- `ok`: usar. `quota`/`error`: reserva com backoff; não bloquear o drill.
- Se um modelo falhar, substitua por outro `ok` do mesmo papel.
- Registre modelo, papel, latência percebida e falha em `docs/STATUS.md` ou `TRAINING.md`.

## 2. Papéis recomendados (7 modelos ok)

| Papel | Modelo sugerido | Missão |
|---|---|---|
| Moderador/síntese | hy4-flash-free | consolidar achados, resolver conflitos, priorizar |
| Técnico/mecanismo | flint-40b-free | IA real/fake, input, falhas, código |
| Impacto/comunicação | tidepool-alpha-free | dor, clareza, pitch, 5s |
| Inovação/ângulo | beam-free | diferencial, tecnologia essencial, fronteira |
| Design/clareza | big-pickle | densidade, hierarquia, mobile, a11y |
| Red-team rápido | iceman-free | inputs estranhos, offline, claims, segredos |
| Triagem/gates | nemotron-3.5-lightning-free | checklists, evidências, regressão |

Reservas: deepseek-v4.1-flash-free, nemotron-3.5-super-vl-free (visual quando disponível), mimo-v2.6-flash-free.

## 3. Regras de coordenação

- **Mesmo input**: URL, `CHALLENGE.md`, `design/judging/packet.md`, capturas, docs relevantes.
- **Sem contexto do time** para jurados. Eles avaliam artefato, não intenção.
- **Saída estruturada**: nota 0-10, evidência, melhor ponto, pior defeito, 1 correção.
- **Conflito**: divergência >=2 pontos exige evidência; moderador não faz média cega.
- **Prioridade**: defeito apontado por 2+ modelos independentes = P1 da rodada.
- **Não duplicar trabalho**: um modelo por papel; build e banca não compartilham conclusões antes da síntese.

## 4. Fluxo

1. Smoke de modelos.
2. Build (1 agente) usa skills de produto.
3. Rode `verify.mjs` com `--profile demo`, `observe.mjs` com `--profile tool` ou `--profile landing` conforme a demo, e `judge-packet.mjs`.
4. Banca paralela com `panel-pack.mjs`.
5. Red-team com `red-team` skill.
6. Moderador consolida em `design/judging/panel/verdict.md`.
7. Aplicar só as 3 correções de maior ganho por minuto; revalidar gates.

## 5. Definição de “trabalhando em conjunto”

Só conta como conjunto quando houver: smoke registrado, papéis distintos, artefatos compartilhados, pareceres independentes e veredito consolidado com prioridades.
