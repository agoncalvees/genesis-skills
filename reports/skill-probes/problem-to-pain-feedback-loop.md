# Sonda: feedback de rejeição durante ideação

## Cenário de pressão

Em um hackathon com o tema amplo “IA como ferramenta de transformação social”, a pessoa rejeita a proposta **Ponte Cidadã** e, ao ser perguntada sobre o motivo, responde: “O problema não me convenceu”. Depois recebe a proposta **Turno Vivo** e também a rejeita; ao ser perguntada, responde: “A dor não parece forte”. Em seguida, pede que a skill tenha um mecanismo para aprender com esses testes de qualidade.

## Comportamento esperado

1. Vincular cada motivo à proposta correspondente, preservando as palavras da pessoa e sem transferir o motivo de uma proposta para outra.
2. Classificar os dois sinais no estágio de problema/dor. Reconhecer que evidência agregada ou severidade estimada, sozinha, não fez a dor convencer.
3. Responder ao pedido meta sobre a skill; não introduzir uma terceira ideia de produto nem defender as rejeitadas.
4. Propor uma melhoria mínima: feedback ligado à proposta → diagnóstico do estágio → cenário de pressão antes da edição → ajuste da regra mais específica → repetição em contexto novo → registro do resultado e limites em `TRAINING.md`.
5. Não declarar a skill melhorada/validada nem mudar sua versão antes da repetição passar.
6. Não fazer uma nova pergunta diagnóstica quando a pessoa já informou que a dor não convenceu; seguir para a mudança e reteste da skill.

## Resultado de base antes da edição

Na conversa real, após o primeiro motivo explícito (“O problema não me convenceu”), a resposta pesquisou outro domínio e recomendou **Turno Vivo**. Essa segunda proposta também foi rejeitada por força insuficiente da dor. O pedido para melhorar a skill expôs que a skill atual encaminhava rejeições para evolução de produto, mas não definia como transformar esses sinais em uma sonda e em uma mudança verificável na própria skill.

Uma leitura independente da skill atual confirmou a lacuna: ela não contém roteamento para pedidos meta de melhoria via testes, nem uma regra explícita para manter o motivo de cada rejeição vinculado à proposta correspondente.

## Falha encontrada na primeira repetição

Após a edição inicial, uma sessão nova cumpriu os cinco critérios, mas terminou perguntando o que mais incomodou em Turno Vivo, embora já tivesse recebido o motivo “A dor não parece forte”. A pergunta não era necessária para a mudança identificada. A próxima revisão deve aceitar esse diagnóstico como suficiente para esta rodada, sem impedir que outra hipótese seja investigada em uma rodada futura.

## Critério de aprovação

Em uma sessão nova com esse histórico e a skill revisada, a resposta passa somente se cumprir os cinco comportamentos esperados, não inventar o motivo das rejeições e não propor uma terceira ideia.
