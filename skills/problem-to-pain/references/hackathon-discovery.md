# Tema de hackathon até brief de construção

Use este método quando a equipe trouxer o tema e precisar decidir o que fazer. A primeira resposta deve fechar uma direção e deixar a equipe pronta para começar. A pesquisa pode apontar a aposta mais forte; nenhum método prevê vitória.

## Rodada de decisão

Feche a primeira direção em até 15 minutos quando o evento estiver correndo. Leia o tema literal, fonte oficial, critérios e pesos, requisitos de IA, prazo, pitch, regras de uso de código/dados e o que a equipe tem. Consulte a conversa e `docs/CHALLENGE.md` antes de perguntar. Marque lacunas; não transforme informação ausente em regra.

Se houver duas sessões independentes, distribua duas trilhas por `model-orchestra` e peça retorno no minuto 7. Dê a ambas a mesma ficha, sem revelar preferência nem achados da outra:

| Trilha | Busca | Retorno obrigatório |
|---|---|---|
| Pessoa e problema local | Evidência primária brasileira: registro de operação, auditoria, pesquisa, caso documentado ou relato público. Descubra quem é afetado, o que tentava fazer, o que acontece hoje e quem pode agir. | Uma cena/fato com fonte e data; público afetado e operador; prática atual; consequência; hipótese que ainda falta testar. |
| Desafios, vencedores e mercado | Compare pelo menos dois hackathons relacionados quando as fontes públicas permitirem. Confirme tema, vencedor e critérios em anúncio oficial. Abra demo/repositório. Mapeie produtos e soluções humanas que já servem o público local. | Evento/ano/tema; vencedor e mecanismo; o que a fonte mostra sobre protótipo, piloto ou uso; substituto mais próximo; lacuna que ainda pode importar. Não atribua a vitória a um fator que a banca não publicou. |

Sem sessões paralelas, faça as trilhas em sequência e diga que a cobertura foi solo. Use fontes diretas, datas e links. Cada fonte deve sustentar a afirmação ao lado dela. Uma lista de links sem implicação não é pesquisa.

### Da pesquisa à escolha

Gere **no máximo três mecanismos de valor diferentes no total**, usando as duas lentes de `opportunity-exploration`. Compare cada um nesta cadeia:

`tema → pessoa e episódio → barreira → ação que passa a ser possível → tarefa da IA → resultado observável`

Descarte um caminho ou marque a lacuna quando ele:

- **Sai do tema:** não conecta uma exigência específica do desafio à ação proposta.
- **Não explica a dor:** não mostra quem tenta fazer o quê, qual barreira encontra, como resolve hoje, qual consequência enfrenta e quem consegue mudar o resultado. Aceite testemunho, auditoria ou registro operacional se provar essa sequência; não exija entrevista presencial. Distinga dano ocorrido de exposição/ameaça e perda potencial; não escreva “perdeu” quando a fonte só mostra “poderia perder”. Estatísticas medem escala, mas não comprovam sozinhas que a dor convence.
- **Usa IA como enfeite:** retire o modelo. Se a decisão e o resultado forem iguais, explique por que a IA precisa estar no núcleo ou descarte o caminho. Não deduza que a IA é essencial só porque o tema pede IA ou o projeto concorrente venceu.
- **Depende de recurso inalcançável:** confirme dados, permissões, serviço e pessoa que executa a saída. Se a primeira versão depende de parceria, integração privada ou adesão em massa, reduza para uma entrada acessível que preserve o mecanismo.
- **Repete o que já existe:** compare com a prática atual e o produto/serviço mais próximo, no Brasil quando aplicável. Nomeie o que ainda muda para a pessoa ou para quem opera o serviço.
- **Não cabe no evento:** descreva a menor fatia que exercita a parte valiosa de ponta a ponta. Se for apenas uma tela com saída fixa, não chame de MVP funcional.

Consulte `../../hackathon-day/references/winning-patterns.md` como biblioteca de precedentes, não como fórmula. “Ganhou” confirma o resultado competitivo publicado. Não confirma demanda local, impacto, precisão ou implantação. Diferencie proposta, protótipo demonstrado, piloto e operação medida. Não copie a ideia: compare mecanismo, público, fonte de dados e decisão que falta no contexto local.

Se a banca publicar critérios, pesos e escala, compare a líder e no máximo duas alternativas com eles, mostrando uma justificativa baseada em evidência por critério. Só atribua notas numéricas quando a escala e os pesos oficiais estiverem publicados. Se faltarem, diga isso e compare qualitativamente, sem inventar pesos, notas ou percentuais. A análise é uma estimativa, nunca uma probabilidade de ganhar. A aderência ao tema, a existência de alguém capaz de agir e o núcleo funcional construível são gates; uma média alta não compensa um gate quebrado.

Antes de fechar, faça uma única checagem adversarial: procure o substituto ou fato que mais poderia derrubar a líder. Se a evidência local for limitada, recomende a melhor aposta como hipótese e defina a verificação que pode ocorrer antes ou durante o build. Não consuma o evento procurando certeza perfeita.

## Contrato da primeira resposta

Entregue o resultado nesta ordem. Comece pelo veredito; detalhe a pesquisa e a execução logo abaixo. Não esconda parte essencial atrás de “posso aprofundar”.

### 1. Decisão em linguagem comum

Uma frase com **pessoa + situação + mudança + mecanismo**. Diga por que esta direção ficou à frente e qual é a incerteza que pode mudá-la. Use “aposta mais bem sustentada” quando ainda não houve validação com usuários.

### 2. A dor e para quem

Explique em palavras comuns, nesta forma:

> Quando **[episódio]**, **[pessoa afetada]** tenta **[tarefa]** usando **[prática atual]**. Isso causa **[consequência concreta]**. **[Operador/decisor]** consegue mudar **[etapa]**.

Separe beneficiário da pessoa que usará ou operará o produto. Cite a fonte que demonstra a cena. Se a fonte só demonstra escala, diga isso; não complete a cena com ficção sem rotulá-la como hipótese.

### 3. O que a pesquisa sustenta

Use um quadro curto de **fato / fonte e data / o que prova / limite**. Inclua a melhor evidência local, o substituto mais próximo e dois precedentes competitivos relevantes se disponíveis. Para cada vencedor, escreva tema e ano, mecanismo, critério publicado quando houver, e status da evidência. Explique a semelhança e a diferença em uma linha. Marque fatos, hipóteses e suposições explicitamente.

### 4. Por que esta direção fica à frente

Mostre uma comparação curta entre a recomendação e pelo menos uma candidata de mecanismo diferente, como prevenção vs. resposta, usuário final vs. operador ou decisão individual vs. alocação de recurso. Use tema, força da cena, evidência, diferença para o substituto e dependência crítica. Isso explica por que a equipe deve começar pela direção indicada; não transforme a resposta em um menu nem repita alternativas que só mudam o nome ou a interface.

### 5. O que é o produto e como funciona

Separe **visão do produto** da **fatia do hackathon**. Conte uma cena de ponta a ponta:

`entrada que a pessoa fornece → inferência concreta da IA → checagem/regra/limite → decisão ou ação → resultado`

Diga o que a IA interpreta, classifica, extrai, compara ou prevê; que evidência acompanha sua saída; quem confirma; e o que acontece quando falta dado ou a resposta não é confiável. Não use “assistente inteligente” como explicação do mecanismo.

### 6. MVP funcional que a equipe constrói

Especifique a primeira versão sem abstrações:

- tela principal e ação da pessoa;
- entrada ao vivo que muda a resposta;
- chamada real ao modelo/API ou modelo local e o trabalho que ele executa;
- regras de verificação e ação humana;
- fonte de dados, licença/acesso e qualquer dado sintético rotulado;
- saída que a banca pode observar;
- caso difícil e fallback se modelo, dado ou rede falhar;
- teste de aceite contra a prática atual e o resultado que pode ser medido.

Se o repositório existir, inspecione a stack antes de escolher ferramentas. Sem repositório, escolha uma stack de baixo risco para a equipe e diga a suposição. Nomeie uma rota concreta de inferência — modelo/API ou modelo local — e por que é acessível nesta equipe. Se chave ou máquina não estiver garantida, valide primeiro o acesso e dê um fallback executável; não deixe “conectar uma IA” como tarefa sem dono. O fallback mantém o fluxo testável e é identificado como fallback; não simule o núcleo de IA como se fosse real. Confirme a primeira dependência — acesso ao modelo, dado ou integração — antes de desenhar o resto.

### 7. Plano de construção por ordem e responsável

Distribua o tempo restante em blocos que incluam entrada, mecanismo, integração, casos difíceis, teste e entrega. Mostre uma tabela com **tempo, responsável, tarefa/artefato, critério de pronto e fallback**; os blocos devem caber no relógio real e somar ao prazo. Uma lista de funções (“uma pessoa faz backend”) sem artefato verificável não é um plano. Dê uma tarefa independente por agente disponível, com arquivos ou saída clara, e mantenha uma pessoa integradora responsável por contratos e build. Teste primeiro a dependência decisiva; em paralelo, prepare tela e dados locais. Reserve aproximadamente o último quinto para integração, teste e entrega; ajuste essa reserva às regras do evento, não use o cronograma padrão por reflexo.

### 8. Prova e pitch

Defina a sequência da demo: situação real, entrada alterada ao vivo, mudança de decisão, ação possível e caso difícil. Diga o que ela prova e o que ainda não prova. Conecte a fala aos critérios oficiais e ao público. Se o tempo do pitch não estiver publicado, trate a duração sugerida como hipótese.

## Limite da recomendação

Não apresente vencedor histórico como prova de oportunidade nem a nota comparativa como previsão da banca. Se nenhuma candidata passar pelos gates, diga qual é a melhor aposta e qual impedimento precisa ser verificado primeiro. A resposta deve deixar a equipe pronta para decidir e iniciar o build; ela não afirma que o protótipo já produziu impacto real.
