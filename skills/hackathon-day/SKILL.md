---
name: hackathon-day
description: Organiza um hackathon da revelação do tema à entrega. Use para interpretar regras do evento, definir cronograma e papéis, organizar o congelamento, preparar o ensaio ou decidir o próximo passo durante a competição.
---

# Dia de hackathon

Ajuste a entrega às regras do evento. Para um produto novo, use `problem-to-pain` para explorar oportunidades e aprovar uma visão de produto com um recorte de hackathon antes de implementar.

## 1. Regras (primeiros 15 min)

Crie `docs/CHALLENGE.md` com: o tema **literal**, fonte e horário, critérios oficiais e pesos, duração e formato do pitch (ao vivo, link assíncrono, vídeo), forma de entrega (repositório, link, vídeo, deck) e restrições. Se faltar algo, liste as perguntas e leve à organização agora:

- Quais os critérios e pesos? Quanto dura o pitch? O julgamento é assíncrono, com o jurado abrindo o link sozinho?
- **Há ferramenta obrigatória?** Um hackathon da Cognition em São Paulo aceitou só projetos feitos com Windsurf ou Devin e iniciados do zero no evento.
- Pode usar código, templates, documentos ou prompts prévios? O repositório precisa ser novo? Público?
- O uso de IA é permitido? Precisa ser declarado?

Se o reaproveitamento estiver incerto, **não reaproveite código**. Estas skills são processo; os templates só são copiados quando permitido.

## 2. Linha do tempo (ajuste às horas reais; exemplo para ~6 h de construção)

| Relógio | Bloco | Saída obrigatória |
|---|---|---|
| T+0:00–0:30 | Descoberta (`problem-to-pain`) | Oportunidades, propostas promissoras, visão, recorte demonstrável e decisão ou próximo aprendizado |
| T+0:30–0:45 | **Mecanismo e pitch** após a direção aprovada (`mechanism-integrity`, `pitch-structure`) | `docs/MECHANISM.md` com rótulo/fronteira/fallback; `docs/DEMO-SCRIPT.md` conecta a visão à fatia demonstrada |
| T+0:45–1:15 | Direção e esqueleto (`art-direction`) | `design/DESIGN.md` curto; app com as seções da estrutura padrão |
| T+1:15–3:00 | **Caminho da demo** | abertura + input ao vivo + mecanismo funcionando de ponta a ponta, feio se preciso |
| T+3:00 | Teste dos 5 segundos (`judge-and-verify`) | `design/judging/observation.json` + packet; densidade/axe/overflow |
| T+3:00–4:45 | Profundidade e beleza | antes × depois; caso difícil; tour `?demo=1`; capricho visual só no caminho da demo |
| T+4:45 | **Congelamento** (`demo-rehearsal`) | nenhuma funcionalidade nova depois daqui |
| T+4:45–5:15 | Endurecer (`red-team`) | `docs/RED-TEAM.md`, verify/observe sem gates P0, e2e do caminho, deploy/build local, vídeo 60 s |
| T+5:15–6:00 | Ensaiar (`demo-rehearsal`) | 3 pitches cronometrados; ajuste a abertura, não o código |

Use os horários como referência. Se faltar uma evidência decisiva, ajuste o cronograma ou reduza o recorte com a equipe antes de avançar. Em treinos de entrega, reserve tempo para ensaio e vídeo.

Use os horários como referência, não como motivo para estreitar a oportunidade antes de explorá-la. Se na metade do tempo o caminho não roda, corte o recorte demonstrável até provar uma parte central da promessa; preserve explícita a visão completa. Uma demo clara revela o valor da proposta, mas não substitui valor distinto para as pessoas.

## Honestidade técnica (a banca verifica)

- **A tecnologia exigida pelo tema precisa ser real no caminho da demo.** Se o tema pede IA, a IA roda de verdade (API ou modelo local), com plano B rotulado. Simulação (regras, léxico, resposta fixa) só se a tela e a fala disserem isso **em todo lugar**, com o mesmo nome. Use `mechanism-integrity` para registrar rótulo, fronteira e evidência em `docs/MECHANISM.md`.
- **Entrada ao vivo.** O jurado precisa poder testar um caso próprio. Sem input, a demo vira resultado pré-calculado.
- **Não termine cedo.** Se o caminho da demo ficou pronto antes da metade, o tempo restante vai para tornar o mecanismo real e testável, não para polimento.
- **Textos e números são calculados/rastreados, não escritos à mão.** Todo número tem fonte, "estimativa" ou "dado de exemplo". Se os dados mudam, a frase muda.
- **Dados de exemplo não podem ser armados.** Inclua casos difíceis (negação, sinônimos, falso positivo) e mostre um em que o sistema erra e a pessoa decide.

## 3. Papéis (3 ou 4 pessoas, um agente principal por pessoa)

- **Produto/pitch:** dono da dor, do one-liner, do roteiro e da apresentação. Ensaia a partir da metade do tempo.
- **Mecanismo:** dono do caminho da demo (lógica, dados, IA) e dos testes dele.
- **Experiência:** abertura, momento-assinatura, tour guiado, verificação visual.
- **Integração e plano B (4ª pessoa):** deploy, vídeo de reserva, checklist de entrega.

Mantenha os agentes simples: tarefas pequenas com arquivos definidos. Orquestração pesada com vários agentes falha por cota no meio do evento.

## 4. Checklist de entrega

- [ ] O link abre direto na experiência, com exemplo carregado, sem login (ou com conta de demonstração preenchida).
- [ ] Primeira tela: para quem, dor e promessa com evidência contextualizada, número quando houver medida útil, e uma ação (verificado em 360 e 1440 px).
- [ ] `?demo=1` conta a história em até 60 s.
- [ ] Limites declarados com honestidade; dados fictícios rotulados.
- [ ] Vídeo de reserva dentro do tempo pedido; repositório, links e vídeo acessíveis sem login.
- [ ] Pitch ensaiado 3 vezes dentro do tempo.

## Evidência

Padrões repetidos entre vencedores e jurados (OpenAI Build Week 2026, TreeHacks 2025–26, Gemini API Competition, relatos de jurados): uma frase e uma pessoa concreta; demo ao vivo do caminho principal ("the single largest score differentiator"); os primeiros 30 s fixam a nota; escopo estreito que roda inteiro; IA essencial **com limites**; limites honestos; gravação de reserva; sem atrito de cadastro. Detalhes e fontes: `references/winning-patterns.md`. Protocolo de drill: `references/drill-protocol.md`.
