---
name: model-orchestra
description: Use when coordinating two or more independent AI sessions for parallel hackathon research or implementation, with bounded tasks and an explicit integrator.
---

# Orquestra de sessões

Esta skill coordena trabalho independente. Ela não define como pesquisar ou escolher uma ideia e não substitui a banca de `judge-and-verify`.

## Pesquisa da ideia

Quando duas sessões estiverem disponíveis, distribua a pesquisa seguindo o [método de decisão e brief](../problem-to-pain/references/hackathon-discovery.md). Envie a mesma ficha a ambas. A primeira busca evidência de episódios, consequências e quem pode agir. A segunda busca o melhor substituto e o precedente relevante, quando houver. Cada sessão devolve os fatos decisivos com fonte, implicação e incerteza. Combine um retorno que deixe tempo para comparar, por exemplo no minuto 7 de uma descoberta de 15 minutos.

O moderador mantém os achados competitivos reservados até formular as primeiras teses. Depois verifica as fontes, usa os comparadores para atacar as teses e recomenda pelo método `problem-to-pain`. Se só uma sessão responder, use seus achados e complete a busca decisiva em modo solo.

## Implementação depois da escolha

Transforme a tese aceita e o mecanismo em um contrato compartilhado antes de dividir o build. Atribua cada sessão a uma entrega independente, com arquivos, entradas, saídas e critério de pronto explícitos. Nomeie uma pessoa integradora para resolver interfaces e conflitos; evite editar os mesmos arquivos em paralelo.

Cada sessão devolve resumo, arquivos alterados, dependências, como reproduzir e o que não conseguiu concluir. Integre uma entrega por vez e passe a verificação funcional e de demo para `judge-and-verify`; use `red-team` para ataques e casos extremos. Não conte uma resposta de modelo como teste ou evidência de que o produto funciona.
