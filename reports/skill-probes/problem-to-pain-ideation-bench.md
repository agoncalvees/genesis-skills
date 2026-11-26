# Sonda comparativa de descoberta para hackathons de 6 horas

O teste de 26/11/2026 usou `62943c6` como baseline. A unidade avaliada é uma proposta curta com uma prova de demo descrita. As notas experimentais não são pesos oficiais nem estimativas de vitória.

## Auditoria da base

| Sinal | Onde aparece | Efeito possível e o que o histórico mede |
|---|---|---|
| Convergência antes da seleção | `SKILL.md`, exploração e descoberta repetem o teto de três caminhos. | Controla a extensão da resposta, mas também limita a geração interna antes de distinguir causas. D5/D6 acharam caminhos distintos e escolheram os mais sustentados pelos episódios fornecidos. A competitividade ainda estava em aberto. |
| Ancoragem em vencedores e cobertura de pesquisa | A trilha competitiva antecipa os vencedores; o contrato pede dois precedentes quando disponíveis. `winning-patterns.md` reúne eventos de durações e critérios distintos. | A biblioteca ajuda a ver o papel do operador, o estado da evidência e precedentes próximos. A quota pode consumir tempo com analogias distantes. O histórico de tutoria EJA menciona um precedente EJA, mas a proximidade temática sozinha não demonstra cópia. |
| Dor descrita sem mudança suficiente | Sondas de rejeição, dor e mecanismo em `TRAINING.md`; critério de cena da descoberta. | Uma perda concreta e uma pessoa que pode agir continuam necessárias. Os relatos de rejeição mostram que gravidade e dados agregados não fazem a proposta convencer por si. Testar o episódio contra o melhor substituto torna verificável a mudança que a intervenção promete. |
| Contrato de execução virou critério de descoberta | O dossiê da skill repete uma referência com oito seções. A sonda build-ready detecta problemas reais de acesso a modelo, fallback, cronograma e aceite. | Os critérios operacionais são úteis depois da escolha. Aprovação de formato não evidencia ganho em originalidade, força da dor ou impacto. A sonda de feedback protege outro comportamento: aceitar uma objeção explícita e associá-la à proposta certa. |
| IA integrada ao fluxo e pouca necessidade da IA | D1 usou regex rotulada como IA. D3/D4 tiveram promessas que o mecanismo não exercitava em variações difíceis. | Uma chamada real ao modelo resolve a honestidade da implementação. Segue em aberto se uma entrada estruturada ou melhoria operacional resolve a tarefa com menos esforço equivalente. Esse é um teste de valor além do teste técnico. |

Os relatórios de contrato red-team e integração de design também foram triados. Eles informam integridade da execução, interface e organização do pack. O resultado de uma interface ou de um gate técnico não foi usado como evidência da qualidade das ideias.

## Desenho do experimento

Todos os braços receberam os mesmos episódios sintéticos, equipes de três pessoas, seis horas, laptop e telefone, sem integrações privadas garantidas e pitch de 90 segundos. Havia API multimodal, salvo no tema offline. Os cenários dispensaram pesquisa externa para dar a todos a mesma evidência do problema. Ausência de pesos oficiais e incertezas de acesso foram iguais por tema. Os agentes receberam o material autorizado em contextos separados e apuraram a influência das instruções após preservar suas fichas originais.

| Rodada | Domínios |
|---|---|
| Desenvolvimento | Criação e figurino, trabalho invisível em turno, jogos e participação, energia limitada. |
| Transferência | Abundância de música sintética, mobilidade adaptada com demo offline, limitações de instrumentos em ciência amadora, microeconomia de reparos e logística. |

Braços iniciais: **Completa** (skill original com referências desde a pesquisa); **Só skill** (arquivo principal da original); **Tardia** (original, com as teses registradas antes das referências); **Compacta** (candidata com separação de fases, critério de parada por diversidade e brief consolidado); **Desafiante** (Compacta com uma intervenção que muda a ação no mesmo episódio, antes da seleção). Os braços são tratamentos de prompt, com uma geração por condição e tema. A ordem de consulta foi instruída e relatada. O contexto e a geração não foram cegos para as próprias condições.

A banca recebeu somente cinco campos iguais por tema, sem títulos de produto, histórico de desenvolvimento, condições, fontes do pack, registros de processo ou brief. Dois jurados independentes avaliaram cada rodada em ordens embaralhadas separadamente, sem chave. Escala de 1 a 5 em dor, originalidade, valor, necessidade da IA, diferença competitiva, experiência, impacto, memorabilidade e prova em seis horas. Os jurados ordenaram as propostas e sinalizaram gates de aderência, operador, IA material e núcleo exercitável. A promoção usa preferência cega por tema/jurado frente à original completa, com verificação do contrato em separado. Empates e regressões contam como resultados. Média simples descreve a amostra.

## Rodada 1 · desenvolvimento

| Condição | Preferências vs. completa (vitórias / empates / derrotas) | Média / 5 | Originalidade | Necessidade da IA | Prova em 6h | Gates sinalizados |
|---|---:|---:|---:|---:|---:|---:|
| Completa | referência | 3,82 | 3,75 | 3,63 | 4,38 | 0/8 |
| Só skill | 2 / 0 / 6 | 3,56 | 3,25 | 2,63 | 4,50 | 1/8 |
| Tardia | 4 / 1 / 3 | 3,92 | 3,25 | 3,63 | 4,38 | 0/8 |
| Compacta | 2 / 0 / 6 | 3,38 | 2,88 | 2,88 | 4,38 | 1/8 |
| Desafiante | 6 / 0 / 2 | 4,07 | 3,75 | 3,88 | 4,75 | 0/8 |

- **T1 figurino.** As cinco recomendações convergiram para uma prova de movimento antes do corte. Consultar referências tarde não quebrou essa convergência. Depois de fechar a ficha, os agentes encontraram intervenções que mudavam a peça, com folga ajustável ou parte substituível. Elas ganharam sentido sob condições específicas, como corte já feito ou alternância de postura, e não foram pontuadas como recomendações. A proposta Desafiante ficou à frente por usar a inferência para propor causas concorrentes e uma prova que as distingue. A costureira experiente ainda é um substituto forte.
- **T2 teatro.** A original completa registrou influência positiva de TRACE e WaitWise na passagem de fala para restrição revisável. As cinco propostas convergiram para o ponto de troca de turno. A condição Só skill empatou com Desafiante para um jurado e foi primeira para o outro. Os jurados valorizaram a divergência na prévia, antes de executar a deixa, e a intervenção que segura avanço com uma restrição pendente. Um roteiro disciplinado pode capturar boa parte do efeito.
- **T3 jogos.** Ambos preferiram a original completa à Desafiante. A original redistribuiu autoria e criou uma situação a partir de contribuições privadas. A Desafiante concentrou-se em sincronizar a pista do improviso. O ganho desse segundo caminho depende de interpretar fala livre com rapidez maior que soltar uma pista escrita. É uma regressão em originalidade e memorabilidade, apesar de cena clara.
- **T4 energia.** Ambos preferiram Desafiante à original completa. Tarefas escolhidas diferiram entre laboratório e padaria. No segundo caso, o ganho descrito foi reorganizar uma janela que fecha para lotes ativos, com caso de informação ausente. A fragilidade segue sendo a inferência baseada em registros operacionais e a previsibilidade dos prazos. Rotular extração como IA real tampouco demonstrou valor no gate sinalizado para Só skill.

O contraste entre Compacta e Desafiante justificou testar a segunda em temas inéditos. A diferença observada não identifica sozinha o efeito causal da instrução, pois cada braço teve um agente gerador e não houve réplicas por célula. A média de originalidade da candidata e da original empatou nesta rodada.

## Rodada 2 · transferência

| Condição | Preferências vs. completa (vitórias / empates / derrotas) | Média / 5 | Originalidade | Necessidade da IA | Prova em 6h | Gates sinalizados |
|---|---:|---:|---:|---:|---:|---:|
| Completa | referência | 3,90 | 3,75 | 3,75 | 4,00 | 0/8 |
| Tardia | 3 / 0 / 5 | 3,75 | 3,63 | 3,38 | 4,00 | 0/8 |
| Desafiante | 4 / 0 / 4 | 3,97 | 4,00 | 3,63 | 4,13 | 0/8 |

- **T5 música.** Os dois jurados preferiram a original. A candidata propôs relacionar notas a diferenças no áudio, mas a demonstração não deixou tão visível o controle sobre qual versão pode efetivamente ser publicada.
- **T6 mobilidade offline.** Ambas as bancas preferiram a original à candidata e Tardia a ambas. A candidata preservou a autoridade do time e incluiu revisão manual, geometria explícita e um roteiro executável em tese. Segmentação local por dois ângulos e marcações acrescentaram risco operacional. Tampouco ficou demonstrado que localizar bordas automaticamente supera a marcação manual. O plano descreveu um critério de latência para MobileSAM, sem rodar o modelo.
- **T7 ciência amadora.** Os dois jurados preferiram a candidata. O caso de dois locais com o mesmo apelido mostra por que ligar um desenho ao registro certo pode reabilitar ou descartar uma observação. A ficha estruturada ainda é substituto forte quando a coleta pode ser planejada.
- **T8 reparos.** Os dois jurados preferiram a candidata. Solicitar a próxima vista que distingue encaixes evitou tratar uma foto sugestiva como confirmação. A ação observável passou de procurar correspondência a verificar o detalhe certo antes de sair.

A transferência mostrou ganho localizado em originalidade e memorabilidade. A soma das preferências empatou e a necessidade de IA recuou. A terceira rodada isolou como hipótese de intervenção a exigência de testar uma mudança que exercite o valor específico da inferência, sob as mesmas condições do substituto.

## Sondas do contrato

Na primeira rodada, os briefs de T2 da original e da candidata Desafiante trouxeram cena, comparador, acesso a dados, rota de IA, fallback e etapas com entrega e aceite. Na transferência, T6 acrescentou modelo offline, teste de dependência e corte se o reconhecimento ficar sem evidência. Nenhum modelo ou app foi executado nestes briefs.

Uma sessão leu um snapshot da candidata instalada e repetiu quatro casos de contrato: duas rejeições explícitas com pedido de melhoria da skill, um pedido de evolução com gargalo operacional diferente do mecanismo atual, uma mudança que torna o pitch offline e um tema amplo sem evidência disponível. As respostas atribuíram os motivos corretamente e encaminharam a sonda sem nova pergunta, preservaram o formulário de reserva ao mudar a confirmação de acesso, reduziram a demo ao caminho local após a regra nova e deram uma recomendação imediata com cena sintética, hipótese e critério para abandono. O brief do tema sem evidência recuperou etapas com artefato, tempo, aceite e uma pessoa integradora, mas ainda usou a expressão genérica “a API de IA a que a equipe já tem acesso”.

## Rodada 3 · teste do valor específico da inferência

Temas inéditos: rituais numa rádio universitária (T9), empréstimo de acervos para aulas (T10), coordenação de microteatro com demo offline (T11) e manutenção de espaço compartilhado (T12). O braço **Prova de inferência** acrescentou um teste: explicitar quanto custa ao melhor substituto tomar a mesma decisão, perturbar uma entrada que exercite a inferência e reabrir a escolha se só a regra posterior mudar. O outro braço manteve a Desafiante, com o brief consolidado já instalado.

| Condição | Preferências vs. completa (vitórias / empates / derrotas) | Média / 5 | Originalidade | Necessidade da IA | Prova em 6h | Gates sinalizados |
|---|---:|---:|---:|---:|---:|---:|
| Completa | referência | 3,85 | 3,63 | 4,00 | 4,00 | 0/8 |
| Desafiante | 6 / 0 / 2 | 3,94 | 4,00 | 4,13 | 4,00 | 0/8 |
| Prova de inferência | 7 / 0 / 1 | 4,03 | 3,88 | 4,13 | 4,25 | 0/8 |

Prova de inferência teve maior média, melhor memorabilidade (4,50 contra 4,00) e venceu nos dois julgamentos de T12. Contra Desafiante, perdeu em T9 e T11 para os dois jurados e dividiu T10. Seu saldo direto foi **3 vitórias e 5 derrotas**. T9 favoreceu a validação com as pessoas cujos relatos seriam interligados. T11 favoreceu dar à produção uma substituição capaz de liberar as duas trocas, com verificação local, em vez de apenas preparar a deixa. A nota de necessidade da IA empatou entre as candidatas. A regra adicional não passou a condição de adoção baseada em preferência direta e ficou fora da versão escolhida.

## Decisão e limites

- **Mantido.** A Desafiante ficou à frente da original completa em **16 de 24** comparações cegas, com **6/8, 4/8 e 6/8** nas três rodadas. A nota média agregada foi **4,00 contra 3,86**, com pesos iguais. O passe abre o espaço até as novas opções repetirem a mesma mudança ou a próxima verificação decidir a escolha. Antes de recomendar, compara intervenções causalmente diferentes no mesmo episódio e testa a melhor alternativa sem IA. A mesma edição consolida o brief em quatro blocos e preserva o prazo do evento.
- **Consulta competitiva.** Só skill perdeu 6/8 na primeira rodada. Tardia teve **7 vitórias, 1 empate e 8 derrotas** contra Completa nas duas rodadas com a ablação. Consultar tarde sozinho não mostrou ganho consistente. O pacote selecionado preserva a consulta após a exploração como parte do método combinado. Os precedentes seguem disponíveis como comparadores quando puderem mudar a decisão, sem quota ou analogia obrigatória.
- **Regressões.** Jogos, música e mobilidade offline tiveram derrota unânime da Desafiante frente à original. Preferir uma perda bem documentada pode ocultar experiências que criam nova agência. A prova offline precisa exercitar o modelo a tempo e separar a contribuição da inferência da do cálculo. A originalidade da candidata melhorou na transferência e no terceiro conjunto, com empate no primeiro.
- **Contrato.** Depois de encontrar uma rota de API genérica no caso sem evidência, a referência passou a pedir o modelo concreto, uma verificação inicial de acesso e latência e um fallback testável. Em sessão nova, o mesmo caso saiu com modelo condicionado ao acesso, verificação no primeiro bloco, contingência manual explícita, responsável pela integração e comparação contra checklist usando as mesmas entradas.
- **Tamanho.** A entrada e as duas referências usadas para tema aberto passaram de 4.301 para 1.398 palavras, redução de **67%**, medida por espaços em branco. Isso mede o texto disponível para leitura, sem estimar tokens da execução.

**Limite experimental.** Três rodadas, 12 temas, 44 fichas e seis sessões de avaliação cega, duas por rodada. Uma geração por condição e tema, com contextos separados por condição. Diferenças entre sessões de geração podem afetar os resultados. Não houve telemetria de tokens ou latência, banca humana, protótipos executados, teste com usuários nem pesquisa competitiva ao vivo. Os julgamentos medem as propostas e as provas descritas nas fichas sob o cenário simulado. Os insumos, saídas, chaves e notas desta execução estão em `.git/pain-eval/` no checkout local.

Consulte o índice em [TRAINING.md](../../TRAINING.md).
