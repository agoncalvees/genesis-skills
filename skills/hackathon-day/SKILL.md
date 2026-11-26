---
name: hackathon-day
description: Use when organizing an active hackathon and the user needs rules interpreted, a timeline or build roles, scope freeze, rehearsal, or a delivery plan. For the product idea itself, use problem-to-pain.
---

# Dia de hackathon

A skill de hackathon organiza regras, relógio e entrega. Para decidir o que construir, encaminhe a descoberta a `problem-to-pain`, que é a fonte única do método. Use `model-orchestra` só para distribuir a pesquisa entre sessões independentes. Não repita aqui o brainstorm, a pontuação ou os prompts de pesquisa.

## 1. Triagem de regras no início da descoberta

Registre em `docs/CHALLENGE.md` o tema **literal**, fonte e horário, critérios oficiais e pesos publicados, prazo de submissão, duração e formato de pitch e entrega, e restrições. Comece pelo que pode eliminar um recorte. Se faltar algo, designe alguém para consultar a organização enquanto a exploração avança. Pesos ausentes ficam em aberto. Verifique:

- Quais os critérios e pesos? Quanto dura o pitch? O julgamento é assíncrono, com o jurado abrindo o link sozinho?
- **Há ferramenta obrigatória?** Um hackathon da Cognition em São Paulo aceitou só projetos feitos com Windsurf ou Devin e iniciados do zero no evento.
- Pode usar código, templates, documentos ou prompts prévios? O repositório precisa ser novo? Público?
- O uso de IA é permitido? Precisa ser declarado?

Se o reaproveitamento estiver incerto, **não reaproveite código**. Estas skills são processo; os templates só são copiados quando permitido.

## 2. Linha do tempo (ajuste às horas reais; exemplo para seis horas)

| Relógio | Bloco | Saída obrigatória |
|---|---|---|
| T+0:00–0:15 | Regras e recomendação (`hackathon-day`, `problem-to-pain`) | `CHALLENGE.md` e tese recomendada pelo método de descoberta |
| T+0:15–0:30 | **Prova inicial do mecanismo e pitch** (`mechanism-integrity`, `pitch-structure`) | Primeiro teste da ação que cria valor ou da dependência mais incerta. Mecanismo e roteiro registram a parte demonstrada |
| T+0:30–0:55 | Direção e esqueleto (`art-direction`) | `design/DESIGN.md` curto; app com as seções da estrutura padrão |
| T+0:55–2:45 | **Caminho funcional principal** | abertura + input ao vivo + mecanismo funcionando de ponta a ponta |
| T+2:45 | Teste dos 5 segundos (`judge-and-verify`) | `design/judging/observation.json` + packet; densidade/axe/overflow |
| T+2:45–4:45 | Profundidade e experiência | antes × depois; caso difícil; tour `?demo=1`; refinamento das partes usadas no pitch |
| T+4:45 | **Congelamento** (`demo-rehearsal`) | nenhuma funcionalidade nova depois daqui |
| T+4:45–5:15 | Endurecer (`red-team`) | `docs/RED-TEAM.md`, verify/observe sem gates P0, e2e do caminho, deploy/build local, vídeo 60 s |
| T+5:15–6:00 | Ensaiar (`demo-rehearsal`) | 3 pitches cronometrados; ajuste a abertura, não o código |

Planeje de trás para frente a partir da submissão e reserve tempo para ensaio e vídeo. A descoberta entrega uma recomendação e encerra a ideação; reabra a direção só quando uma regra ou evidência nova invalidar a premissa central. Depois, teste cedo o mecanismo e distribua a implementação entre as pessoas e sessões disponíveis. Preserve a ambição do produto e identifique com clareza o que o protótipo conseguiu demonstrar no prazo.

## Honestidade técnica (a banca verifica)

- **IA para construir e IA no produto são decisões distintas.** Dentro das regras do evento, use agentes para acelerar pesquisa, código, testes e ensaio. Só inclua um modelo no produto quando a proposta depender dele ou o regulamento pedir.
- **A tecnologia exigida pelo tema precisa ser real no caminho da demo.** Se o tema pede IA, a IA roda de verdade (API ou modelo local), com plano B rotulado. Identifique regras, comportamento simulado e dados fictícios conforme a [integridade do mecanismo](../mechanism-integrity/SKILL.md).
- **Entrada ao vivo.** O jurado precisa poder testar um caso próprio. Sem input, a demo vira resultado pré-calculado.
- **Use o tempo que sobrar na maior incerteza.** Priorize um caso difícil, uma comparação com a prática atual ou uma falha que prejudique a tarefa. Quando o núcleo estiver bem demonstrado, melhore a experiência e a apresentação conforme a necessidade.
- **Textos e números são calculados/rastreados, não escritos à mão.** Todo número tem fonte, "estimativa" ou "dado de exemplo". Se os dados mudam, a frase muda.
- **Dados de exemplo não podem ser armados.** Inclua casos difíceis (negação, sinônimos, falso positivo) e mostre um em que o sistema erra e a pessoa decide.

## 3. Papéis depois da escolha

- **Produto/pitch:** dono da dor, do one-liner, do roteiro e da apresentação. Ensaia a partir da metade do tempo.
- **Mecanismo:** dono do caminho da demo (lógica, dados, IA) e dos testes dele.
- **Experiência:** abertura, momento-assinatura, tour guiado, verificação visual.
- **Integração e plano B (4ª pessoa):** deploy, vídeo de reserva, checklist de entrega.

Para dividir implementação entre modelos, use `model-orchestra`. Mantenha uma pessoa integradora responsável pelas interfaces e pela verificação final.

## 4. Checklist de entrega

- [ ] O link abre direto na experiência, com exemplo carregado, sem login (ou com conta de demonstração preenchida).
- [ ] Primeira tela: para quem, dor e promessa com evidência contextualizada, número quando houver medida útil, e uma ação (verificado em 360 e 1440 px).
- [ ] `?demo=1` conta a história em até 60 s.
- [ ] Limites declarados com honestidade; dados fictícios rotulados.
- [ ] Vídeo de reserva dentro do tempo pedido; repositório, links e vídeo acessíveis sem login.
- [ ] Pitch ensaiado 3 vezes dentro do tempo.

## Evidência

Use `references/winning-patterns.md` como biblioteca de precedentes com fontes por caso, não como fórmula de vitória. Não repita alegações sobre peso de demo, primeiros segundos, Wi-Fi ou preferência de jurados sem evidência publicada pelo evento. Para o pitch, torne pessoa, ação e prova compreensíveis; para a demo, ensaie o fluxo e um plano B conforme as condições reais do evento. Protocolo de drill: `references/drill-protocol.md`.
