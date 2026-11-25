---
name: red-team
description: Ataca a demo de hackathon antes do jurado — testa input estranho, rede/API falhando, claims sem fonte, IA simulada, acessibilidade quebrada, fluxo mobile e vazamento de segredo. Use após o caminho da demo funcionar, antes do congelamento final e quando a nota técnica/inovação estiver em risco. Gera docs/RED-TEAM.md.
---

# Red team da demo

O objetivo é quebrar a demo de propósito antes que a banca quebre sem querer.

## Ataques obrigatórios

1. **Input estranho**: vazio, muito longo, emoji, outro idioma, negação, dado faltante, número extremo, arquivo errado.
2. **Contrato da entrada**: compare o que a primeira tela, os rótulos e `docs/MECHANISM.md` prometem com o que o mecanismo realmente lê. Liste cada campo ou condição que deveria afetar a decisão. Execute um caso base e repita mudando somente um campo de cada vez; inclua campo ausente e informação contraditória. Registre o efeito esperado e o observado. Se o campo não alterar a saída, retire a promessa ou rotule claramente que ele não é processado antes da ação principal.
3. **Paráfrases de risco e limites numéricos**: para cada condição de segurança ou elegibilidade, teste a formulação canônica, um sinônimo ou expressão cotidiana e uma descrição ambígua, além de uma negação. Ausência de palavra conhecida não prova segurança; casos desconhecidos ou incertos seguem para confirmação humana. Se texto livre aceita números, teste inteiro válido, zero, negativo, decimal com ponto e vírgula, separador de milhar, limite máximo e texto com mais de um número. Rejeite entradas inválidas com explicação; não converta, trunque nem limite silenciosamente.
4. **Rede/chave/API**: offline, timeout, cota esgotada, chave ausente. O app deve falhar com honestidade e cair no plano B rotulado.
5. **Mecanismo fake**: mudar input e verificar se saída muda; comparar com `docs/MECHANISM.md`; procurar hardcode.
6. **Claims frágeis**: rodar `claim-ledger.mjs`; todo número visível precisa de fonte/estimativa/dado de exemplo.
7. **Mobile/teclado**: 360px, sem overflow, foco visível, ação leva ao resultado.
8. **Segredos/privacidade**: buscar token/chave no bundle/repo/log; dados pessoais só fictícios.

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
