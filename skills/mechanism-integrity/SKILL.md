---
name: mechanism-integrity
description: Use quando for preciso projetar ou testar o mecanismo de um produto, comparar formas de resolver a parte difícil, verificar a contribuição da IA ou provar a execução e os limites de uma demo.
---

# Integridade do mecanismo

Parta do resultado que o produto promete. Durante a ideação, use a seção de projeto quando o mecanismo puder mudar a escolha. No build ou na revisão de uma demo, use as verificações seguintes. Separe evidência de execução, ganho na tarefa e adoção.

## Projete o mecanismo

1. Identifique a ação mais difícil que precisa funcionar para entregar o resultado. Explique o que entra, de onde vem, quais condições precisam ser respeitadas, o que sai e quem pode agir sobre a saída.
2. Compare a opção mais direta com uma alternativa quando houver um problema concreto, como decisões que competem pelo mesmo recurso, dados que mudam durante a execução ou volume que inviabiliza revisão manual. Uma regra ou um processo direto serve quando entrega o mesmo resultado. Adicione capacidade na parte que resolve a diferença e descreva o custo ou a contrapartida.
3. Em mecanismos com IA, mostre qual leitura, previsão, busca ou decisão depende do modelo e como é verificada. Compare com uma alternativa sem o modelo quando isso ajudar a verificar a contribuição da IA. Em fluxos com decisões que interagem, teste uma alteração que mude mais de uma escolha, além de um caso em que não haja solução válida.
4. Defina a menor prova que preserve o problema. Use o mesmo caso para a melhor alternativa atual e o mecanismo proposto, com a mesma unidade e restrições. Mostre a ação ou o resultado que muda e como saber se a variação foi correta. Use o template para registrar isso quando houver construção ou revisão técnica.

## 1. Classifique o mecanismo (antes de codar)

Escolha **um** rótulo e use o mesmo nome na tela, no pitch, no README e no `docs/MECHANISM.md`.

**Critério de fronteira (híbrido):** IA pode sugerir, classificar, resumir ou extrair; decisão crítica/irreversível exige regra determinística ou confirmação humana. Se a saída final é sempre regra/score sem modelo no caminho da demo, é regra/heurística, não híbrido.

| Rótulo | Quando usar | Prova mínima na demo |
|---|---|---|
| **IA real** | Chamada a modelo/API/modelo local no caminho da demo | Entrada do jurado muda saída; mostra modelo/latência ou evidência de execução |
| **Regra/heurística** | Léxico, regex, árvore, score determinístico | Diga "regra/heurística", não "IA"; mostre por que acertou |
| **Simulação/modelo didático** | A lógica da demo representa de forma simplificada ou substitui a operação prometida | Rotule "simulação" em todo lugar e mostre limites |
| **Híbrido** | IA sugere/classifica, regra/cálculo decide parte crítica | Desenhe a fronteira: onde IA age, onde pessoa/regra decide |

Rotule a procedência dos dados separadamente. Um modelo ou algoritmo pode rodar de verdade sobre dados fictícios. Se o tema exigir IA e o caminho só usa regras, identifique o mecanismo como regra e registre a exigência pendente.

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
- [ ] Uma mudança relevante de entrada produz o resultado esperado e a prova compara o desfecho com a alternativa aplicável.
- [ ] Existe um caso difícil/erro tratado.
- [ ] Limite principal está visível e será dito em voz alta.
- [ ] Sem rede/chave, o app não quebra nem mente.
