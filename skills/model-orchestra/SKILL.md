---
name: model-orchestra
description: Use when coordinating two or more independent AI sessions for parallel hackathon research or implementation, with bounded tasks and an explicit integrator.
---

# Orquestra de sessões

Esta skill coordena trabalho independente. Ela não define como pesquisar ou escolher uma ideia e não substitui a banca de `judge-and-verify`.

## Pesquisa da ideia

Quando duas sessões estiverem disponíveis, distribua as duas trilhas de [Decisão rápida com evidência](../problem-to-pain/references/hackathon-discovery.md). Envie a mesma ficha do desafio às duas, oculte preferências e conclusões da outra trilha e defina o retorno no minuto 7. A primeira sessão cobre pessoas, trabalho e oportunidade; a segunda cobre temas, vencedores e mercado. Cada uma devolve até três fatos decisivos com links, implicação e incerteza.

O moderador verifica as fontes e faz a recomendação pelo método `problem-to-pain`. Não peça às sessões para produzir listas longas nem para chegar a consenso. Se uma sessão falhar, siga com a outra e marque a cobertura como solo.

## Implementação depois da escolha

Transforme a tese aceita e o mecanismo em um contrato compartilhado antes de dividir o build. Atribua cada sessão a uma entrega independente, com arquivos, entradas, saídas e critério de pronto explícitos. Nomeie uma pessoa integradora para resolver interfaces e conflitos; evite editar os mesmos arquivos em paralelo.

Cada sessão devolve resumo, arquivos alterados, dependências, como reproduzir e o que não conseguiu concluir. Integre uma entrega por vez e passe a verificação funcional e de demo para `judge-and-verify`; use `red-team` para ataques e casos extremos. Não conte uma resposta de modelo como teste ou evidência de que o produto funciona.
