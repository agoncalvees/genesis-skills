---
name: art-direction
description: Define em 30 minutos uma direção de arte original e adequada ao problema para a tela de um hackathon — metáfora, até 3 referências concretas, conceito visual antes do código, design/DESIGN.md curto com tokens e regras verificáveis, motion por intenção, geração de imagem e o que evitar para não parecer interface gerada por IA. Use depois de escolher a ideia e escrever o pitch, antes de desenhar a interface, ou quando a tela parecer genérica.
---

# Direção de arte em 30 minutos

A direção escolhe os componentes, não o contrário. Mas a arte **serve à história**: só comece depois do one-liner e do roteiro (`problem-to-pain`, `pitch-structure`). Capriche no caminho da demo; o resto pode ser simples.

## 1. Direção (10 min)

- **Metáfora de mundo** em uma frase, tirada do contexto do problema ("carta de campo ao entardecer", "painel de senhas de LED", "bula de remédio"). Ela decide material, cor e tipografia.
- **Três atributos e três antiatributos.**
- **Até três referências concretas** (uma página, um objeto, uma infografia, um material), sendo pelo menos uma fora do software. Para cada uma, **uma lição** e onde aplicá-la.
- **Uma cor de sinal** reservada ao que importa (o número, a ação, o estado crítico). O resto é o material neutro.
- **Um par tipográfico com tensão**, com licença aberta e suporte a português (ex.: serifa editorial + grotesca; grotesca condensada + mono). Nunca a fonte do sistema como identidade.

## 2. Conceito antes do código (10 min)

Uma imagem da tela principal: geração de imagem (Codex `image_gen`; Figma `generate_image` consome créditos e precisa de autorização), um frame no Figma ou um esboço HTML estático. O conceito decide a escala do título, onde fica o mecanismo, o momento-assinatura e o que fica em cima da dobra.

Assets: de 1 a 3, estratégicos (ilustração, textura, mapa, fotografia contextual). Prompt com enquadramento, técnica, paleta em hex, o que **não** pode aparecer (texto, logotipos, rostos reais) e uso. Converta para WebP e registre ferramenta, prompt e termos. Sem ferramenta de imagem, registre a limitação e use SVG/Canvas autorais; não finja ilustração com ícones e gradientes.

## 3. `design/DESIGN.md` curto (10 min)

```markdown
# [Produto]
## Direção — metáfora, atributos/antiatributos, referências → lição
## Composição — protagonista e posição; o que fica na primeira dobra; mobile
## Escala — título (clamp), corpo, legenda, números; unidade de espaço
## Tipografia — exibição, corpo, números (mono tabular?)
## Cor e materiais — fundo/material, cor de sinal e onde é permitida, cores de dados
## Motion — mudança → técnica → duração; reduced motion
## Não fazer — proibições específicas desta identidade
```

Defina os tokens como variáveis CSS em `:root` (ex.: `--signal`, `--paper`) e cite-os pelo nome. Escreva também `design/fidelity.json` com as 5 a 10 regras que não podem divergir (ver `judge-and-verify`).

## Menos informação, mais direção

Nos ensaios, toda interface despejou informação demais (a primeira tela do Senha tinha 163 palavras e 39 números; a do Lupa, 247 palavras). Regras: um protagonista por tela e **tudo o mais recuado** (menor, mais claro, recolhido); espaço em branco é hierarquia; legendas, filtros e detalhes só aparecem quando o usuário os pede; no máximo 3 níveis tipográficos visíveis ao mesmo tempo; se a tela precisa de legenda para ser entendida, o gráfico está errado. O orçamento numérico está em `pitch-structure`.

## Princípios que funcionaram nos ensaios

1. **Um protagonista por tela:** o mecanismo ocupa a maior área; os controles orbitam.
2. **Escala com contraste:** título 4 a 8 vezes o corpo; números grandes em mono.
3. **Materialidade:** grão, papel, hachura, ilustração autoral, objetos do contexto (um painel de LED, uma escala de papel quadriculado).
4. **O mecanismo tem o acabamento da arte:** grades e partículas renderizadas suaves, com brilho ou traço, nunca quadrados de debug sobre uma ilustração refinada.
5. **Interação direta:** arrastar, desenhar e comparar sobre o próprio objeto.
6. **Clareza vence enfeite:** jurados relatam que polimento além do legível não muda nota. Uma tela bonita que não diz a dor perde.

## Motion por intenção

| Comunicar | Técnica |
|---|---|
| Mudança de estado | transição curta (120–180 ms) |
| Continuidade espacial | layout/elemento compartilhado (250–400 ms) |
| Transformação de dados | interpolar valores e comprimentos, não redesenhar (400–600 ms) |
| Processamento | o próprio mecanismo em ação ou progresso medido; nada de spinner genérico |
| Resultado | revelação por máscara, número que conta até o valor (uma vez) |

Fade-in e stagger não são padrão. Anime `transform`, `opacity` e `clip-path`. Com `prefers-reduced-motion`, mostre o estado final; o estado nunca depende de animação.

## Acabamento que a banca cobrou

- Elementos esmaecidos (fora do destaque) mantêm contraste ≥ 4,5:1: use cor, não `opacity` baixa sobre texto.
- `:focus-visible` próprio, na paleta, com 2–3 px e `outline-offset`; nunca o azul padrão do navegador sobre fundo escuro.
- No celular, toda ação que muda o resultado rola até o resultado (`scrollIntoView`); senão "parece que nada aconteceu".

## Sinais de interface gerada por IA (evite)

Hero centralizado com gradiente roxo/azul; grade de três cards com ícone; badges pill em tudo; `rounded-2xl` e sombra em todo painel; dashboard com sidebar e KPIs como resposta padrão; emoji como ícone; Inter/Geist sem decisão; "Unlock the power of…"; números redondos sem unidade; texto em inglês esquecido numa interface em português.
