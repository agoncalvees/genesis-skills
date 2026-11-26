# Tema de hackathon até brief de construção

## Decida no relógio do evento

Leia tema literal, regras, critérios, prazo, pitch e recursos da equipe na conversa, fonte oficial ou `docs/CHALLENGE.md`. Siga a exploração de oportunidades antes de consultar soluções. Investigue a premissa que muda a decisão: procure evidência direta da cena e da consequência, o melhor substituto e, se ajudar a testar a diferença, o precedente mais próximo. Use a [biblioteca de vencedores](../../hackathon-day/references/winning-patterns.md) após formular as primeiras teses. Dê à evidência a força da fonte e do contexto. Separe dano observado, risco e hipótese. Uma descrição de protótipo ou prêmio sustenta somente o estágio documentado.

Se houver sessões independentes, use `model-orchestra` para separar evidência do problema e comparação competitiva. Mantenha os achados sobre soluções disponíveis para a fase de confronto. Em modo solo, faça os passes nessa ordem. Use critérios, pesos e escalas oficiais quando publicados e associe os critérios decisivos à evidência. Sem pesos ou escala, compare qualitativamente. Na decisão, confira aderência, operador capaz de agir, acesso às entradas, inferência que muda a saída quando IA é exigida e núcleo funcional demonstrável. Quando uma premissa seguir aberta, diga o que pode confirmá-la cedo.

## Primeira resposta

Abra com a tese recomendada, tema e relógio conhecido. Desenvolva em quatro blocos proporcionais ao que a equipe precisa para iniciar.

1. **Cena e escolha.** Pessoa, episódio, prática atual, perda ou capacidade bloqueada e quem pode agir. Compare com a melhor alternativa atual e com uma intervenção causalmente diferente. Traga a fonte e seu alcance, o diferencial decisivo e a objeção que pode derrubar a favorita.
2. **Produto e recorte.** Mostre o primeiro uso e a visão completa. Especifique stack, entradas acessíveis, inferência, saída, checagem, responsável pela ação e resposta a ambiguidades. Nomeie o modelo e a interface que a equipe deve testar primeiro. Se a equipe só informou ter uma API, proponha um modelo concreto como hipótese e verifique acesso e latência na primeira tarefa. Recorte pelo tempo mantendo a mudança decisiva. Rotule dados sintéticos. Para falha de modelo, rede ou dados, descreva um fallback executável e o que ainda permite testar.
3. **Prova.** Defina o mesmo caso para prática atual e protótipo. A banca muda uma entrada ao vivo e vê a ação ou o resultado mudar. Inclua o caso difícil e a condição que faria a equipe abandonar a tese. Diga o que a demo consegue observar e o que exige uso real.
4. **Construção.** Faça caber no tempo restante. Dê a cada etapa janela, responsável, artefato e critério de pronto. Identifique a pessoa que integra e o fallback da dependência decisiva. Uma tabela curta funciona bem em trabalho paralelo. Comece testando modelo, dados ou integração que podem derrubar a demo. Reserve integração, teste e ensaio. Inspecione a stack existente quando houver repositório. Use agentes em entregas verificáveis com responsável por integrar.

Quando a equipe pedir artefatos ou já estiver trabalhando no projeto, registre a decisão e o plano em `docs/DISCOVERY.md` e `docs/PRODUCT-BRIEF.md`. A recomendação fecha a exploração e deixa a equipe pronta para decidir e começar.
