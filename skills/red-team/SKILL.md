---
name: red-team
description: Ataca a demo de hackathon antes do jurado — testa input estranho, rede/API falhando, claims sem fonte, IA simulada, acessibilidade quebrada, fluxo mobile e vazamento de segredo. Use após o caminho da demo funcionar, antes do congelamento final e quando a nota técnica/inovação estiver em risco. Gera docs/RED-TEAM.md.
---

# Red team da demo

O objetivo é quebrar a demo de propósito antes que a banca quebre sem querer.

## Ataques obrigatórios

1. **Input estranho**: vazio, muito longo, emoji, outro idioma, negação, dado faltante, número extremo, arquivo errado.
2. **Rede/chave/API**: offline, timeout, cota esgotada, chave ausente. O app deve falhar com honestidade e cair no plano B rotulado.
3. **Mecanismo fake**: mudar input e verificar se saída muda; comparar com `docs/MECHANISM.md`; procurar hardcode.
4. **Claims frágeis**: rodar `claim-ledger.mjs`; todo número visível precisa de fonte/estimativa/dado de exemplo.
5. **Mobile/teclado**: 360px, sem overflow, foco visível, ação leva ao resultado.
6. **Segredos/privacidade**: buscar token/chave no bundle/repo/log; dados pessoais só fictícios.

## Saída

Registre em `docs/RED-TEAM.md` (template: `templates/RED-TEAM.md`): ataque, esperado, observado, severidade, correção, status.

## Regra

Severidade alta em mecanismo, honestidade, segredo ou quebra total bloqueia entrega.
