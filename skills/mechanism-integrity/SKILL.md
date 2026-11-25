---
name: mechanism-integrity
description: Garante que o mecanismo central do hackathon seja real, demonstrável e honesto — IA/regra/simulação com fronteira clara, entrada ao vivo do jurado, evidência de execução, fallback rotulado com o mesmo nome, e claims com procedência. Use quando o tema exigir IA, quando o app parecer "demo pré-calculada", antes de apresentar, ou ao revisar mecanismo, dados, limites e plano B. Gera docs/MECHANISM.md.
---

# Integridade do mecanismo

Um jurado técnico trata "parece IA" sem evidência como simulação disfarçada. Esta skill impede isso.

Para um produto novo, comece pela direção aprovada em `problem-to-pain`. Projete o mecanismo a partir do valor prometido, sem escolher a ideia apenas para caber numa API ou num padrão de demo. A prova de que o mecanismo funciona não prova, por si só, adoção ou valor duradouro.

## 1. Classifique o mecanismo (antes de codar)

Escolha **um** rótulo e use o mesmo nome na tela, no pitch, no README e no `docs/MECHANISM.md`.

**Critério de fronteira (híbrido):** IA pode sugerir, classificar, resumir ou extrair; decisão crítica/irreversível exige regra determinística ou confirmação humana. Se a saída final é sempre regra/score sem modelo no caminho da demo, é regra/heurística, não híbrido.

| Rótulo | Quando usar | Prova mínima na demo |
|---|---|---|
| **IA real** | Chamada a modelo/API/modelo local no caminho da demo | Entrada do jurado muda saída; mostra modelo/latência ou evidência de execução |
| **Regra/heurística** | Léxico, regex, árvore, score determinístico | Diga "regra/heurística", não "IA"; mostre por que acertou |
| **Simulação/modelo didático** | Dados sintéticos ou modelo simplificado | Rotule "simulação/dados fictícios" em todo lugar; mostre limites |
| **Híbrido** | IA sugere/classifica, regra/cálculo decide parte crítica | Desenhe a fronteira: onde IA age, onde pessoa/regra decide |

Se o tema/critério exigir IA e você só tem regra, **não chame de IA**. Suba a nota pela honestidade e por tornar a regra auditável.

## 2. Entrada ao vivo obrigatória

O jurado precisa poder testar um caso próprio em menos de 10 s:

- Campo visível para colar/editar texto, número, arquivo ou escolher cenário.
- Botão claro ("Testar", "Analisar", "Simular") e estado de carregamento.
- Exemplo pré-carregado continua disponível, mas não pode ser o único caminho.
- Mostre um caso difícil/limite (negação, dado faltante, extremo) onde o sistema erra ou pede confirmação.

Sem input ao vivo, a demo vira vídeo pré-calculado.

## 3. Evidência de execução

Registre em `docs/MECHANISM.md` (template: `templates/MECHANISM.md`) e exponha o essencial na UI:

```markdown
# Mecanismo
- Rótulo: IA real | Regra/heurística | Simulação | Híbrido
- Entrada: <o que o jurado pode fornecer>
- Processo: <modelo/API/regra/algoritmo; versão se relevante>
- Saída: <o que muda na tela>
- Fronteira: <onde a IA age; onde a pessoa decide; o que é determinístico>
- Evidência: <latência, log sanitizado, trace, score, citação, diff>
- Fallback: <o que acontece sem rede/chave/cota; mesmo rótulo/aviso>
- Limites: <o que quebra, dado fictício, viés, privacidade/LGPD>
```

Na tela: não exponha segredo, token ou dado pessoal. Exponha procedência: "estimativa", "dado de exemplo", "fonte", "modelo X", "regra Y".

## 4. Fallback honesto

- Sem rede/API/chave/cota: degrade para exemplo local, cache, regra simples ou vídeo de reserva — **sempre rotulado**.
- O fallback não pode fingir ser a IA real.
- Timeout visível; nunca spinner infinito.
- Plano B de demo: vídeo 60 s + build local + dados de exemplo.

## 5. Claims e dados

- Todo número tem fonte, "estimativa" ou "dado de exemplo".
- Texto gerado/calculado não pode ser hardcoded como se fosse dinâmico.
- Dados pessoais/sensíveis: mínimo necessário, fictícios na demo, aviso de privacidade/LGPD quando aplicável.
- Antes/depois precisa usar a mesma base e deixar a unidade clara.

## Referências
- `references/claim-evidence.md` — procedência de números e claims.
- `templates/MECHANISM.md` — doc do mecanismo.

## Gate rápido

- [ ] Rótulo do mecanismo é o mesmo na tela, fala, README e docs.
- [ ] Jurado consegue inserir um caso próprio.
- [ ] Resultado muda com a entrada (teste antes/depois registrado).
- [ ] Existe um caso difícil/erro tratado.
- [ ] Limite principal está visível e será dito em voz alta.
- [ ] Sem rede/chave, o app não quebra nem mente.
