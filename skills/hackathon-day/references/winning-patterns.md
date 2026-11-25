# O que os vencedores têm em comum

Pesquisa de 24/11/2026: anúncios oficiais de vencedores (OpenAI Build Week 2026, TreeHacks 2025 e 2026, Gemini API Developer Competition), relatos de jurados e guias de plataformas. Devpost bloqueou a leitura automática; os padrões abaixo vêm de cerca de 20 projetos premiados e de 5 relatos de julgamento. Quando um item é inferência, está marcado.

## Padrões que se repetem (3 ou mais fontes)

1. **Uma frase, uma pessoa.** "Isto é uma ferramenta que faz X para Y." Os vencedores nomeiam alguém concreto: pessoas com disartria, a recepção de uma clínica veterinária que passou de três veterinários para um, a equipe de reanimação de um hospital no Cairo, quem aprende os tons do vietnamita. Ninguém vence com "plataforma para todos".
2. **Demo ao vivo do caminho principal.** Segundo um jurado, foi "the single largest score differentiator". Slides não mudaram notas; o único slide útil é uma captura da coisa funcionando, como plano B.
3. **Os primeiros 30 segundos fixam a nota.** Quem gasta o começo contextualizando perde um terço do tempo antes de o jurado saber o que está vendo.
4. **Escopo estreito que roda de ponta a ponta** vale mais que uma "plataforma em 36 horas". Corte escopo até algo rodar inteiro.
5. **Superfície visível e imediata.** Áudio em tempo real, uma curva de entonação sobreposta à referência, máquinas 3D desmontáveis, uma bengala que guia. O jurado vê o efeito acontecer.
6. **IA essencial, mas com limites.** Todos os 8 vencedores do OpenAI Build Week descrevem uma fronteira. O usuário confirma antes de agir. Código determinístico calcula e a IA explica. O modelo "não toma a decisão médica" e "não pode inventar" ações. Isso convence mais que "a IA faz tudo".
7. **Acessibilidade, saúde e situações de risco** concentram prêmios de impacto (inferência sobre a amostra, não regra).
8. **Limites ditos com honestidade** aumentaram a nota em vez de reduzi-la ("o que quebra primeiro em escala?").
9. **Plano B gravado.** Uma captura de 60 s; o Wi-Fi falha na maioria dos eventos.
10. **Sem atrito de entrada.** Pule criação de conta e fluxos triviais; se houver login, entregue uma conta pronta. Quem precisa de uma tela de marketing antes do app perde tempo de julgamento.

## Critérios mais comuns

| Evento | Critérios |
|---|---|
| OpenAI Build Week 2026 | implementação técnica, design e UX, impacto potencial, qualidade da ideia |
| TreeHacks | criatividade, complexidade técnica, impacto social |
| Hack Brasil 2026 | execução técnica, implementação técnica, impacto, comunicação (pesos iguais, 0–10) |
| Hackathon Cognition SP | qualidade técnica, apresentação visual, impacto e originalidade (0–10); julgamento assíncrono; top 5 com 3 min no palco |
| Devfolio (recomendado) | técnica, originalidade, praticidade, usabilidade, "wow factor" |

Constantes: **impacto** e **qualidade técnica** estão em todas as listas. **Comunicação/apresentação** aparece como critério explícito ou como filtro (só quem se explica chega ao palco).

## Landing page, login ou app direto?

O app abre **direto na experiência**, já com um exemplo carregado. A "landing" é a faixa de abertura em cima do próprio app (para quem é, dor, ação), não uma página separada. Login só se o problema exigir, e nesse caso com conta de demonstração preenchida. No julgamento assíncrono o jurado abre o link sozinho: a primeira tela e o `?demo=1` precisam funcionar sem nós.

## O que não moveu notas (segundo jurados)

Polimento além da legibilidade, escolha de framework, tamanho do time e credenciais, decks longos, explicar desafios técnicos enfrentados. O design entra pela **clareza**, não pelo enfeite. Não confundir com "feio": apresentação visual é critério explícito no evento da Cognition.

## Fontes
- OpenAI, Build Week winners: https://developers.openai.com/blog/build-week-winners
- Stanford Daily, TreeHacks 2026: https://stanforddaily.com/2026/02/15/12th-annual-treehacks/ e 2025: https://stanforddaily.com/2025/02/18/treehacks-awards-200000-in-prizes-to-students-from-around-the-world/
- Google, Gemini API Developer Competition: https://developers.googleblog.com/en/announcing-the-winners-of-the-gemini-api-developer-competition/
- Relato de jurado: https://dev.to/kurbaitaev/what-judges-actually-score-notes-from-a-year-of-hackathon-judging-3p4l
- Análise de vencedores de IA: https://dev.to/jsb-securedme/what-ai-hackathon-winners-actually-have-in-common-1kla
- TechCrunch, demo de hackathon: https://techcrunch.com/2014/09/01/how-to-crush-your-hackathon-demo/
- Devfolio, julgamento: https://guide.devfolio.co/docs/guide/participating-in-hackathons/judging-1
- Hackathon Cognition SP: https://luma.com/cognition-hack-sp
- Hack Brasil 2026, regulamento: https://hackbrasil.com/regulamento
