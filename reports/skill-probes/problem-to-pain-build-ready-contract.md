# Sonda: tema até plano de build

## Prompt-base

Usar a skill `problem-to-pain` para o tema “Inteligência artificial como ferramenta de transformação social”. O desafio permite qualquer área, mas exige resolver problema real, gerar valor além da automação e usar IA no núcleo. Prazo de seis horas; tecnologias livres; MVP funcional e demonstrável. Critérios: inovação 25%, problema/impacto 25%, técnica 20%, experiência 15%, viabilidade 15%. A equipe tem três pessoas, dois agentes Claude disponíveis e nenhum acesso garantido a bases privadas. A resposta deve decidir o que construir e preparar a equipe para começar imediatamente. Não peça escolha entre opções nem prometa que a proposta vencerá.

## Critérios de aprovação

1. **Recomendação decidida:** uma tese principal específica e a razão competitiva; compare-a brevemente com pelo menos uma direção de mecanismo diferente para demonstrar por que ficou à frente, sem transferir a decisão à equipe.
2. **Dor fácil de reconhecer:** identifica público afetado e operador que pode agir; reconstrói uma cena com o que ocorre, o que a pessoa tenta hoje, consequência demonstrada e momento de intervenção. Diferencie dano observado de risco plausível; não descreva a perda como ocorrida se a fonte só comprova exposição ou ameaça.
3. **Pesquisa rastreável:** fontes diretas para a dor local, substituto de mercado e precedentes vencedores; informa tema, edição, projeto, mecanismo, critérios publicados e exatamente o que cada fonte comprova. Não presume por que o projeto venceu, não confunde prêmio com demanda e distingue proposta, protótipo, piloto e uso medido.
4. **Mecanismo de IA explicável:** `entrada → inferência específica → checagem/limite → ação humana ou do sistema → resultado`; a IA é necessária ao mecanismo e usa entrada que a equipe consegue obter.
5. **Produto antes e durante o hackathon:** distingue visão do produto de fatia que será construída em seis horas; descreve tela, entrada ao vivo, saída, fonte de dados/modelo, fallback, caso difícil e o que a demo poderá provar.
6. **Plano executável:** uma tabela com blocos que somam o tempo disponível, responsável, entrega e critério de aceite por etapa; primeira dependência a testar, caminho alternativo se falhar e reserva para teste/entrega. Uma lista de papéis sem prazo e pronto verificável não passa.
7. **Confiança honesta:** separa fatos, hipóteses e suposições; se o problema não tiver episódio/registro que demonstre uma dor convincente, apresenta a melhor oportunidade como hipótese com teste imediato, sem chamá-la de validada.
8. **Leitura simples:** abertura compreensível em 20 segundos para alguém fora do tema; detalhes técnicos vêm depois sem esconder a ação do produto.
9. **Critérios da banca:** se houver pesos, cada nota tem justificativa observável; não transforme uma estimativa subjetiva em “chance de ganhar” ou percentual de sucesso.

## Uso da sonda

Gerar uma resposta de base com a skill atual em uma sessão independente. Registrar quais critérios falharam antes da alteração. Depois de editar, repetir o mesmo prompt em contexto novo e aplicar a mesma rubrica; qualquer mudança na rubrica deve ficar registrada como ajuste da sonda, não como aprovação retroativa.

## Sonda de transferência

Tema “Inteligência artificial para uma sociedade mais segura digitalmente”; desafio de prevenir, identificar ou combater golpes digitais, fraudes, deepfakes e manipulação, com autonomia e confiança das pessoas. Prazo quatro horas, ferramentas livres e IA central. Equipe de três pessoas e dois agentes Claude; internet disponível, mas sem chave de API paga, integração financeira ou parceria institucional garantida. Aplicar a mesma rubrica de aprovação. O teste deve verificar que a skill não copia a resposta da transformação social: precisa pesquisar um episódio e substitutos do contexto de segurança, explicar o risco da decisão automatizada, escolher uma direção buildable em quatro horas e nomear exatamente o que a IA pode e não pode verificar.

## Resultado de base antes da edição

Uma sessão independente recomendou um tutor privado de IA para uma aula da EJA, apoiado por um episódio qualitativo e pelo precedente vencedor SEJA+. A resposta explicou a dor e propôs um fluxo, mas não comparou dois precedentes, não pesquisou um substituto de mercado próximo (a própria sessão reconheceu depois que não investigou a EjaBem), não especificou modelo/dados/fallback com suficiente precisão e não dividiu a construção em etapas com responsáveis e critérios de aceite.

**Falhas observadas:** critérios 3, 5 e 6 falharam; o critério 4 ficou parcial porque “a IA adapta a explicação” não especifica como identifica o erro nem como confirma a correção. O critério 7 passou: a proposta foi chamada de aposta e a fonte foi tratada como um episódio, não como prova de prevalência. A recomendação ainda pode ser uma boa direção; a sonda mede completude e rastreabilidade da resposta, não escolhe retrospectivamente outro produto.

## Resultados das primeiras repetições · 26/11/2026

Na repetição do tema social, uma sessão nova entregou Confere Benefício, usou fontes do MDS, Chat Gov.br, Serasa e dois hackathons, mas não mostrou comparação entre causas sociais diferentes. A dor citada comprovava mensagens que ameaçavam benefícios, não dano ocorrido; isso não foi separado como risco vs. dano. O mecanismo era compreensível, mas faltou escolher stack/API e especificar fallback. A lista de pessoas responsáveis não trouxe artefatos, prazos e aceite por tarefa. A nota foi expressa como 4,03/5 e 81%, sem razão observável para cada critério.

Na transferência para segurança digital, a proposta do copiloto pós-golpe partiu de uma perda de R$ 60 mil documentada pela Polícia Civil e usou orientações oficiais do MJSP. Delimitou o que a IA extrai e o que não pode verificar, especificou Qwen local, dados fictícios e casos de teste, e comparou dois hackathons e um produto. Ainda apresentou funções por papel sem uma tabela de etapas, prazos e critérios de pronto. Os dois resultados melhoraram a cena e a pesquisa em contextos distintos, mas falharam a exigência de plano de build verificável; o primeiro também falhou a comparação entre mecanismos e a distinção de dano.
