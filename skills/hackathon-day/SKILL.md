---
name: hackathon-day
description: Conduz um hackathon cronometrado da revelação do tema ao pitch (regras, linha do tempo, papéis, congelamento, ensaio) e chama as outras skills Genesis na ordem certa (problem-to-pain, pitch-structure, art-direction, judge-and-verify). Use quando um hackathon ou desafio com tempo começar, quando o tema for revelado ou quando perguntarem "o que fazemos agora" durante o evento. Funciona em qualquer repositório e stack. Triggers: hackathon, tema revelado, começou o desafio, cronograma do evento, pitch final.
---

# Dia de hackathon

Os jurados decidem num pitch de cerca de 3 minutos e nos primeiros segundos de tela. Tudo aqui serve a isso. **Não escreva código antes do passo 3 da linha do tempo.**

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
| T+0:00–0:30 | Dor → ideia (`problem-to-pain`) | 3 ideias pontuadas → 1; one-liner; dor com número |
| T+0:30–0:45 | **Pitch primeiro** (`pitch-structure`) | `docs/DEMO-SCRIPT.md` escrito antes do código; momento-assinatura escolhido |
| T+0:45–1:15 | Direção e esqueleto (`art-direction`) | `design/DESIGN.md` curto; app com as seções da estrutura padrão |
| T+1:15–3:00 | **Caminho da demo** | abertura + mecanismo funcionando de ponta a ponta num exemplo pré-carregado, feio se preciso |
| T+3:00 | Teste dos 5 segundos (`judge-and-verify`) | juiz cego sobre a captura da primeira tela |
| T+3:00–4:45 | Profundidade e beleza | antes × depois; tour `?demo=1`; capricho visual só no caminho da demo |
| T+4:45 | **Congelamento** | nenhuma funcionalidade nova depois daqui |
| T+4:45–5:30 | Endurecer | script de verificação, e2e do caminho, deploy ou build local, vídeo de 60 s (plano B) |
| T+5:30–6:00 | Ensaiar | 3 pitches cronometrados; ajuste a abertura, não o código |

Para outra duração, mantenha as proporções: dor e pitch ≈ 12 % do tempo, direção ≈ 8 %, caminho da demo ≈ 30 %, profundidade ≈ 30 %, endurecer e ensaiar ≈ 20 %. Em treinos curtos (90 min), o ensaio e o vídeo continuam obrigatórios.

Regra: se na metade do tempo o caminho da demo não roda de ponta a ponta, **corte escopo até rodar**. Funcionalidade sem demo vale zero.

## 3. Papéis (3 ou 4 pessoas, um agente principal por pessoa)

- **Produto/pitch:** dono da dor, do one-liner, do roteiro e da apresentação. Ensaia a partir da metade do tempo.
- **Mecanismo:** dono do caminho da demo (lógica, dados, IA) e dos testes dele.
- **Experiência:** abertura, momento-assinatura, tour guiado, verificação visual.
- **Integração e plano B (4ª pessoa):** deploy, vídeo de reserva, checklist de entrega.

Mantenha os agentes simples: tarefas pequenas com arquivos definidos. Orquestração pesada com vários agentes falha por cota no meio do evento.

## 4. Checklist de entrega

- [ ] O link abre direto na experiência, com exemplo carregado, sem login (ou com conta de demonstração preenchida).
- [ ] Primeira tela: para quem, dor com número, promessa e uma ação (verificado em 360 e 1440 px).
- [ ] `?demo=1` conta a história em até 60 s.
- [ ] Limites declarados com honestidade; dados fictícios rotulados.
- [ ] Vídeo de reserva dentro do tempo pedido; repositório, links e vídeo acessíveis sem login.
- [ ] Pitch ensaiado 3 vezes dentro do tempo.

## Evidência

Padrões repetidos entre vencedores e jurados (OpenAI Build Week 2026, TreeHacks 2025–26, Gemini API Competition, relatos de jurados): uma frase e uma pessoa concreta; demo ao vivo do caminho principal ("the single largest score differentiator"); os primeiros 30 s fixam a nota; escopo estreito que roda inteiro; IA essencial **com limites**; limites honestos; gravação de reserva; sem atrito de cadastro. Detalhes e fontes: `references/winning-patterns.md`.
