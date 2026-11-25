---
name: problem-to-pain
description: Transforma um tema ou "problema difícil" de hackathon numa dor concreta e demonstrável e escolhe a ideia com mais chance de vencer — método de descer três níveis, três ideias por ângulos diferentes, pontuação pela ótica do jurado, critérios de descarte e one-liner. Use logo após o tema ser revelado, quando houver várias ideias e for preciso escolher, ou quando o produto parecer amplo, genérico ou difícil de explicar. Gera docs/PRODUCT-BRIEF.md.
---

# Do problema difícil à dor

Um "problema difícil" costuma ser grande e abstrato. Vencedores atacam **um momento concreto de uma pessoa concreta**. Tempo total: 30 minutos.

## 1. Desça três níveis (5 min)

Problema → **quem sofre mais** (papel, contexto) → **em que momento** do dia → **que decisão ou tarefa** essa pessoa faz mal ou devagar nesse momento.

> Ex.: "saúde pública" → "coordenadora de unidade básica" → "no dia de montar a escala" → "distribui plantões sem ver a demanda por hora".

Faça isso para 2 ou 3 recortes do tema antes de escolher.

## 2. Ache a alavanca tecnológica (5 min)

O que uma máquina faz aqui que a pessoa não faz: ver padrão em volume, simular antes de agir, perceber (visão, áudio, texto longo), traduzir, lembrar, comparar alternativas, agir em escala. A IA entra nessa alavanca **com fronteira**: a pessoa confirma; o cálculo crítico é determinístico; o modelo explica, sugere ou classifica, mas não decide sozinho o que é irreversível. Vencedores descrevem essa fronteira explicitamente.

**Se o tema exige IA**, decida já como ela roda na demo: API com chave (custo e rede no dia), modelo local, ou nenhum dos dois. Ideia cuja "IA" seria uma regra disfarçada perde nos critérios de inovação e técnica.

## 3. Três ideias por ângulos diferentes (5 min)

Uma para **o profissional que decide**, uma para **o cidadão afetado**, uma para **o sistema** (gestão, dados, coordenação). Varie também a mídia: câmera, voz, mapa, simulação, conversa, jogo. Pensar fora da caixa é mudar o **ângulo**, não aumentar o **escopo**.

## 4. Pontue de 1 a 5 e escolha (10 min)

| Critério | Pergunta |
|---|---|
| Frase | Cabe em "X para Y" sem jargão? |
| Dor visível | Há um número ou uma cena que o jurado sente em 20 s? |
| Demo no tempo | O caminho principal roda de ponta a ponta na metade do tempo? |
| Wow na tela | Há um antes × depois que acontece na frente do jurado? |
| Tecnologia essencial | Sem a tecnologia exigida, a solução perde a razão de existir? |
| Aderência | Responde exatamente ao tema e aos critérios oficiais? |

Some e escolha a maior; empate vai para a mais demonstrável. Se houver critérios oficiais com peso, multiplique cada nota (1-5) pelo peso do critério e registre a conta no brief. Cada nota precisa de evidência de 1 linha.

**Descarte** a ideia que: precisa de dados que vocês não têm; depende de integração externa **não controlável** (sem mock, sem cache, sem conta de demo); só mostra valor depois de semanas de uso; exige login/cadastro para mostrar algo; é painel de indicadores sem decisão; é "plataforma para todos". API com chave é aceitável quando há fallback rotulado e plano B offline/vídeo.

## 5. Escreva o brief (5 min)

Crie `docs/PRODUCT-BRIEF.md`, uma linha por campo:

```markdown
One-liner: [Produto] ajuda [quem] a [resultado] sem [custo atual].
Quem sofre:
Momento da dor:
Dor com um número (fonte ou "estimativa"):
Custo da dor:
Promessa mensurável:
Prova na tela (o que o jurado vê acontecer):
Alavanca tecnológica e fronteira (onde a IA age, onde a pessoa decide):
Critérios oficiais → onde e quando são provados:
Ideias descartadas e por quê:
Limites e o que é fictício:
```

Se alguma linha não couber em uma frase, o produto ainda não está claro: volte ao passo 1.

## Armadilhas observadas nos ensaios

- Escolher pela beleza da visualização. Dois ensaios bonitos (simulação de incêndio, fila de saúde) exigiam explicação: a dor não estava na tela.
- Mecanismo complexo sem pessoa: troque "um simulador de X" por "a [pessoa] decide Y em Z minutos em vez de W".
