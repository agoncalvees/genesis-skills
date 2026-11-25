---
name: hackathon-day
description: Organiza um hackathon da revelação do tema à entrega. Use para interpretar regras do evento, definir cronograma e papéis, organizar o congelamento, preparar o ensaio ou decidir o próximo passo durante a competição.
---

# Dia de hackathon

Ajuste a entrega às regras do evento. Se a pessoa enviar só o tema ou pedir uma ideia, use a primeira resposta de `problem-to-pain`: uma recomendação explicada no chat. Quando o pedido for organizar o evento ou conduzir a escolha da equipe, use um único orçamento desde a revelação, normalmente 30 minutos, com triagem de regras e passagem ao brief incluídas. Combine a hora-limite e use a variante curta se o evento exigir.

## 1. Triagem de regras no início da descoberta

Registre em `docs/CHALLENGE.md` o tema **literal**, fonte e horário, critérios oficiais e pesos publicados, prazo de submissão, duração e formato de pitch e entrega, e restrições. Comece pelo que pode eliminar um recorte. Se faltar algo, designe alguém para consultar a organização enquanto a exploração avança. Pesos ausentes ficam em aberto. Verifique:

- Quais os critérios e pesos? Quanto dura o pitch? O julgamento é assíncrono, com o jurado abrindo o link sozinho?
- **Há ferramenta obrigatória?** Um hackathon da Cognition em São Paulo aceitou só projetos feitos com Windsurf ou Devin e iniciados do zero no evento.
- Pode usar código, templates, documentos ou prompts prévios? O repositório precisa ser novo? Público?
- O uso de IA é permitido? Precisa ser declarado?

Se o reaproveitamento estiver incerto, **não reaproveite código**. Estas skills são processo; os templates só são copiados quando permitido.

## 2. Linha do tempo (ajuste às horas reais; exemplo para ~6 h de construção)

| Relógio | Bloco | Saída obrigatória |
|---|---|---|
| T+0:00–0:30 | Descoberta (`problem-to-pain`) | Direção e recorte aprovados com brief imediato, ou rodada encerrada sem aprovação |
| T+0:30–0:45 | **Prova inicial do mecanismo e pitch** após a direção aprovada (`mechanism-integrity`, `pitch-structure`) | Primeiro teste da parte que cria valor ou da dependência mais incerta, mesmo fora da interface. Mecanismo e roteiro registram a fatia demonstrada |
| T+0:45–1:15 | Direção e esqueleto (`art-direction`) | `design/DESIGN.md` curto; app com as seções da estrutura padrão |
| T+1:15–3:00 | **Caminho da demo** | abertura + input ao vivo + mecanismo funcionando de ponta a ponta, feio se preciso |
| T+3:00 | Teste dos 5 segundos (`judge-and-verify`) | `design/judging/observation.json` + packet; densidade/axe/overflow |
| T+3:00–4:45 | Profundidade e beleza | antes × depois; caso difícil; tour `?demo=1`; capricho visual só no caminho da demo |
| T+4:45 | **Congelamento** (`demo-rehearsal`) | nenhuma funcionalidade nova depois daqui |
| T+4:45–5:15 | Endurecer (`red-team`) | `docs/RED-TEAM.md`, verify/observe sem gates P0, e2e do caminho, deploy/build local, vídeo 60 s |
| T+5:15–6:00 | Ensaiar (`demo-rehearsal`) | 3 pitches cronometrados; ajuste a abertura, não o código |

Planeje de trás para frente a partir da submissão e reserve tempo para ensaio e vídeo. Após o aceite, priorize uma fatia completa que prove valor. Ajuste o cronograma se o primeiro teste indicar que o núcleo exige mais tempo. Se precisar cortar, reduza integrações, volume ou interface antes de retirar a condição que torna a solução útil. Use a regra de reabertura de `problem-to-pain` se o corte afetar o valor central ou uma restrição oficial.

## Honestidade técnica (a banca verifica)

- **IA para construir e IA no produto são decisões distintas.** Dentro das regras do evento, use agentes para acelerar pesquisa, código, testes e ensaio. Só inclua um modelo no produto quando a proposta depender dele ou o regulamento pedir.
- **A tecnologia exigida pelo tema precisa ser real no caminho da demo.** Se o tema pede IA, a IA roda de verdade (API ou modelo local), com plano B rotulado. Identifique regras, comportamento simulado e dados fictícios conforme a [integridade do mecanismo](../mechanism-integrity/SKILL.md).
- **Entrada ao vivo.** O jurado precisa poder testar um caso próprio. Sem input, a demo vira resultado pré-calculado.
- **Use o tempo que sobrar na maior incerteza.** Priorize um caso difícil, uma comparação com a prática atual ou uma falha que prejudique a tarefa. Quando o núcleo estiver bem demonstrado, melhore a experiência e a apresentação conforme a necessidade.
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
