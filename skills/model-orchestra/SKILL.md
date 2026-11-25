---
name: model-orchestra
description: Coordena sessões independentes para descobrir direções de produto ou avaliar uma demo de hackathon. Use com Claude Code, Codex ou outros agentes, com papéis claros, prazo e síntese por evidência.
---

# Orquestra de agentes

## Descoberta antes da escolha

Em hackathons, use o relógio de `problem-to-pain`. Use sessões independentes quando a descoberta precisar de perspectivas distintas e houver tempo. Distribua as lentes entre as sessões disponíveis. O moderador consolida as propostas e conduz a decisão pedida pela equipe.

1. Envie a cada sessão a mesma ficha curta com tema literal e fonte, regras, critérios, relógio, capacidades e até três fatos do contexto. Acrescente somente a lente da sessão, **experiência e acesso** ou **capacidade e sistema**, descritas na [referência de exploração](../problem-to-pain/references/opportunity-exploration.md). Mantenha preferências da equipe e resultados dos outros fora dessa entrada.
2. Peça uma resposta proporcional ao tempo disponível. Para cada caminho, peça a ação, o efeito frente à prática atual, a suposição decisiva e uma cena que possa refutar o ganho. Ao evoluir uma ideia, compartilhe a versão atual e o que deve ser preservado. Dê a uma sessão o problema de fortalecer o caminho atual e a outra o de atacar a perda por outro ponto. O moderador concentra a checagem de regras e de evidência.
3. Fixe o retorno um minuto antes do fim da exploração. A equipe pode colar as respostas de sessões separadas no moderador uma vez. No corte, use o que chegou e faça somente a lente ausente no minuto reservado. Na janela relâmpago, comece solo se os retornos já não estiverem disponíveis. Com um agente, faça os dois passes previstos em `problem-to-pain` e registre a cobertura solo. Atribua independência apenas às sessões que realmente rodaram.

O moderador deduplica pelo efeito e pela forma de obtê-lo. Compare os caminhos no mesmo episódio e preserve uma objeção minoritária quando ela puder mudar a escolha. Leve à equipe só as finalistas e a recomendação. Use as notas de banca na avaliação da entrega.

## Avaliação após a escolha

Use os modelos disponíveis como painel especializado com papéis distintos, mesmo artefato e síntese.

## 1. Smoke e escalação

Antes da banca, faça uma chamada curta a cada sessão candidata e registre o resultado.

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
2. Build (1 agente) usa as skills de produto após a direção ser aprovada pela equipe.
3. Rode `verify.mjs` com `--profile demo`, `observe.mjs` com `--profile tool` ou `--profile landing` conforme a demo, e `judge-packet.mjs`.
4. Banca paralela com `panel-pack.mjs`.
5. Red-team com `red-team` skill.
6. Moderador consolida em `design/judging/panel/verdict.md`.
7. Priorizar correções pelo efeito no uso, na prova e na entrega, dentro do tempo disponível. Revalidar gates.

## 5. Definição de “trabalhando em conjunto”

Só conta como conjunto quando houver: smoke registrado, papéis distintos, artefatos compartilhados, pareceres independentes e veredito consolidado com prioridades.
