---
name: pitch-structure
description: Estrutura padrão de app de hackathon que faz o jurado entender a dor em segundos e o roteiro de pitch de 3 minutos — abertura (para quem, dor com número, promessa, uma ação), experiência com exemplo pré-carregado sem login, antes × depois, como funciona, limites e demonstração guiada ?demo=1 (PitchTour). Use ao montar a tela principal, ao escrever o pitch, quando o app "não se explica sozinho" ou antes de entregar. Inclui templates React copiáveis.
---

# Estrutura do app e do pitch

O jurado não explora o app. Em julgamento assíncrono, ele abre o link sozinho; no palco, vê 3 minutos. A estrutura abaixo funciona para qualquer ideia: **escreva o conteúdo antes de desenhar**.

## Orçamento de informação (regra dura)

O jurado vê o app por segundos. Mostrar tudo é o mesmo que não mostrar nada.

| Onde | Limite |
|---|---|
| Primeira tela (1440 px) | **até 60 palavras**, **1 número em destaque**, **1 ação principal** (no máximo 1 secundária) |
| Primeira tela (360 px) | até 35 palavras |
| Cada tela ou passo | **uma decisão ou uma ideia**; o resto fica recolhido |
| Cada passo do `?demo=1` | título de até 10 palavras e uma frase de até 18 |
| Resultado | **um** número grande; o detalhe aparece ao clicar ou expandir |

Como cortar: (1) o que não responde "para quem / dor / o que faço" sai da primeira tela; (2) **revelação progressiva**: legenda, fórmulas, listas longas e "como funciona" ficam atrás de um clique ou abaixo da dobra; (3) mostre **um caso** (uma pessoa, um aluno, um pedido), não a tabela inteira, e deixe "ver todos" para depois; (4) um número com unidade vale mais que cinco sem contexto; (5) texto de apoio só onde o usuário vai agir; (6) pergunte de cada elemento "se eu tirar isto, o jurado perde a história?". Se a resposta for não, tire.

`scripts/observe.mjs` mede palavras, números e controles da primeira tela; acima do orçamento é defeito, não gosto.

## Estrutura padrão (nesta ordem de leitura)

1. **Abertura, sem rolar, em 360 e 1440 px:** para quem (`audience`), título com o produto, **dor com um número** (`data-story="problem"`), promessa em uma frase (`data-story="promise"`) e **uma** ação principal (`data-story="action"`): "Ver em 60 segundos". Não é landing page separada: a experiência começa logo abaixo.
2. **Experiência com exemplo pronto:** o mecanismo abre já com dados de exemplo rotulados, ou com "Usar exemplo" a um clique. Sem login, sem formulário vazio, sem tela de configuração.
   **O jurado precisa poder alimentar o mecanismo:** um campo para colar ou editar um caso próprio (uma anotação, uma foto, um texto, um número) e ver o resultado mudar na hora. Sem isso, o jurado técnico trata o app como demo pré-calculada (treino 1: "0 inputs na página").
3. **Resultado com antes × depois** (`data-story="result"`): o número grande e a comparação no mesmo quadro.
4. **Como funciona:** 3 ou 4 passos; diga **onde a IA age e onde a pessoa decide**.
5. **Limites e próximo passo:** o que é fictício, o que quebra primeiro, quem adota.
6. **`?demo=1`:** tour de 3 a 5 passos que percorre 1→3 sozinho, executando as ações (clicar, carregar, comparar) e destacando o elemento de cada fala. Funciona com teclado e passador de slides (PageDown/PageUp).

Regras de texto: todo número na tela tem fonte ou o rótulo "estimativa"; o roteiro diz exatamente o que a tela mostra (no treino 1 o roteiro dizia "ele sobe para o topo" e a tela o mostrava em 3º); o tour nunca cobre o elemento de que o passo fala (use `block` e posicione o painel); dados pessoais e sensíveis (menores, saúde, finanças) ganham uma linha sobre quem acessa e sob que regra (ex.: LGPD).

Se o tempo apertar, corte a exploração livre, nunca as camadas 1 a 3 e 6.

## Templates (copie só se o regulamento permitir código prévio)

- `templates/story-content.ts`: todo o texto visível num lugar, campos de uma linha.
- `templates/story-page.tsx`: a página com as seções e marcadores `data-story`.
- `templates/pitch-tour.tsx` + `templates/pitch-tour.css`: o tour guiado (React, sem dependências; acessível; `usePitchMode()` lê `?demo=1`).
- `templates/DEMO-SCRIPT.md`: roteiro de 3 min.

Sem React ou sem permissão para copiar: reproduza a mesma estrutura à mão. O tour é um painel fixo com passos que (a) executam uma ação, (b) rolam até o alvo, (c) marcam o alvo com um contorno, e (d) avançam com →/PageDown e fecham com Esc.

## Pitch de 3 minutos

| Tempo | Bloco | Na tela |
|---|---|---|
| 0:00–0:20 | **Dor**: uma pessoa, uma cena, um número | Abertura |
| 0:20–0:35 | **Promessa**: o one-liner | Abertura → ação |
| 0:35–1:50 | **Demo**: `?demo=1`, um único caminho, sem desvio | Tour |
| 1:50–2:20 | **Como funciona e por que é difícil**: o mecanismo, a tecnologia, a fronteira da IA | Como funciona |
| 2:20–2:45 | **Impacto e viabilidade**: quem adota, quanto melhora, próximo passo | Limites e próximo passo |
| 2:45–3:00 | **Fecho**: repita o número do antes × depois | Resultado |

Regras: diga o limite principal **em voz alta** no bloco "como funciona" (não deixe o jurado descobrir no rodapé); abra com "isto é [produto], que faz X para Y", nunca com contexto longo; não explique desafios técnicos que vocês enfrentaram; nomeie um limite com honestidade; nada que dependa de rede ou login sem plano B; grave um vídeo de 60 s com `?demo=1`; ensaie 3 vezes cronometrando.

## Teste dos 5 segundos

Antes de polir, mostre a captura da primeira tela por 5 segundos (a uma pessoa de fora ou ao juiz da skill `judge-and-verify`): **para quem é? qual a dor? o que eu faço agora?** Qualquer "não sei" bloqueia todo o resto até a abertura ser reescrita.
