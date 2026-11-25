---
name: red-team
description: Testa a robustez de produtos e demos com entradas extremas plausíveis, falhas, estados visuais, acessibilidade, contrato do mecanismo, claims e privacidade. Use para investigar casos-limite ou validar o caminho crítico antes da entrega.
---

# Red team

Selecione as superfícies que correspondem ao fluxo e às promessas que a tarefa pede verificar. Na revisão de entrega, cubra o caminho crítico e as fronteiras relevantes.

## Superfícies de teste

1. **Input estranho**: vazio, muito longo, emoji, outro idioma, negação, dado faltante, número extremo, arquivo errado.
2. **Contrato da entrada**: compare o que a primeira tela, os rótulos e `docs/MECHANISM.md` prometem com o que o mecanismo realmente lê. Liste cada campo ou condição que deveria afetar a decisão. Execute um caso base e repita mudando somente um campo de cada vez; inclua campo ausente e informação contraditória. Registre o efeito esperado e o observado. Se o campo não alterar a saída, retire a promessa ou rotule claramente que ele não é processado antes da ação principal.
3. **Paráfrases de risco e limites numéricos**: para cada condição de segurança ou elegibilidade, teste a formulação canônica, um sinônimo ou expressão cotidiana e uma descrição ambígua, além de uma negação. Ausência de palavra conhecida não prova segurança; casos desconhecidos ou incertos seguem para confirmação humana. Se texto livre aceita números, teste inteiro válido, zero, negativo, decimal com ponto e vírgula, separador de milhar, limite máximo e texto com mais de um número. Rejeite entradas inválidas com explicação; não converta, trunque nem limite silenciosamente.
4. **Rede/chave/API**: offline, timeout, cota esgotada, chave ausente. Verifique mensagem honesta, recuperação e rótulo do fallback quando existir.
5. **Mecanismo fake**: mudar input e verificar se saída muda; comparar com `docs/MECHANISM.md`; procurar hardcode.
6. **Claims frágeis**: rodar `claim-ledger.mjs`; todo número visível precisa de fonte/estimativa/dado de exemplo.
7. **Mobile/teclado**: em tamanhos e dispositivos pertinentes, confira foco visível, ações sem hover obrigatório, overflow indevido, resultado perceptível e recuperação.
8. **Segredos/privacidade**: buscar token/chave no bundle/repo/log; dados pessoais só fictícios.
9. **Decisão sob restrições**. Quando a solução distribuir recursos, coordenar decisões ou replanejar, teste o encontro de condições plausíveis. Inclua um caso em que uma escolha local prejudique o resultado do conjunto e um caso sem saída válida. Confira se o sistema preserva as restrições, explica o impasse e indica o próximo passo. Se houver promessa de ganho, compare a tarefa com a prática atual sob as mesmas condições.

## Robustez visual e dados

Para teste de UI, selecione `break-ui` pelo [mapa de referências](../design-engineering/references/emil.md). Mapeie campos renderizados e limites nos schemas ou contratos reais. Exercite vazios, opcionais ausentes, texto longo e sem quebras, IDs, Unicode/RTL/emoji, números nos limites, listas grandes e carregamento, falha e recuperação conforme o fluxo. Use entradas aceitas ou inválidas com um resultado esperado defensável.

Alimente as fronteiras usadas pelo componente (input, props, dados de API ou fonte equivalente) por fixtures, stories ou mocks isolados do build de produção. Compare caso base e variação sem modificar CSS ou DOM para produzir o defeito. Registre viewport, ação e evidência da UI renderizada. Distinga defeito funcional, problema de usabilidade e decisão de design que depende de preferência. Use a classificação de severidade para os defeitos observados.

## Saída

Registre em `docs/RED-TEAM.md` (template: `templates/RED-TEAM.md`): ataque, esperado, observado, severidade, correção, status. Para o contrato da entrada, inclua também o campo/condição, caso base, única variação aplicada e decisão sobre a copy.

## Severidade

| Severidade | Critério | Ação |
|---|---|---|
| Alta | mecanismo fake, segredo exposto, quebra total sem fallback, claim enganosa, dado sensível exposto | bloqueia entrega |
| Média | degradação sem rótulo claro, erro confuso, a11y/mobile com workaround | corrige antes do ensaio final |
| Baixa | polimento, copy, caso raro | registra |

## Regra

Qualquer Alta bloqueia entrega. Correção deve ser re-testada e registrada no `docs/RED-TEAM.md`.
