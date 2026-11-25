# Banca de jurados

Cada jurado é um agente separado, com a sua opinião crítica, que **usa o app de verdade**: abre a URL com Playwright, clica, navega, testa a demo, tira prints e, quando o critério pede, lê o repositório. O que ele **não** recebe é a conversa do time, as intenções ou o "o que queríamos fazer": julga o que existe, como um jurado real.

Entradas comuns a todos: a URL do app; `docs/CHALLENGE.md` (tema e critérios oficiais); a saída de `scripts/observe.mjs` (`design/judging/observation.json` e capturas); a duração do pitch; `docs/DEMO-SCRIPT.md` só para o jurado de comunicação.

Tempo de cada jurado: **5 minutos de exploração**, o tempo de um jurado assíncrono. O que não for encontrado em 5 minutos não existe para a nota.

Escala para todos (0–10): 0–3 não atinge o básico; 4–6 o esperado de um hackathon (funciona no nível da demo); 7–8 acima da média; 9–10 finalista num evento grande, use raramente. Toda nota precisa citar evidência: uma captura, um trecho de texto da tela, um passo reproduzível ou um arquivo do repositório.

---

## 1. Jurado de impacto e problema
**Pergunta central:** isso dói para alguém real? Para quem, quanto, e muda algo?
- Nos primeiros 5 s (`5s-360.png`, `5s-1440.png`): para quem é? qual a dor? o que faço agora? Responda antes de olhar qualquer outra coisa.
- Que evidência sustenta a dor para um público específico? Confira fonte, episódio, medida e alcance quando apresentados.
- Compare a mesma tarefa com a alternativa atual. Qual consequência muda? Identifique o que foi medido em uso real e o que foi observado na demo.
- Viabilidade: quem adotaria amanhã, o que falta para usar de verdade, o que quebra primeiro.
- Âncoras: baixo = promessa genérica; alto = efeito relevante sustentado por evidência pertinente.

## 2. Jurado técnico (execução e implementação)
**Pergunta central:** funciona ou é slide? O mecanismo é real?
- Percorra o caminho principal sem a demo guiada: clique na ação, use o exemplo, mude uma entrada e veja se o resultado muda de forma coerente. Tente uma entrada inesperada (vazia, extrema).
- Confira erros, overflow e gates P0. Use `firstScreen.liveInputs` para localizar um possível ponto de entrada. Julgue o mecanismo pelo efeito de mudar a entrada real, inclusive por seleção, importação ou outro controle pertinente.
- Erros no console, telas quebradas, tempo de carregamento (`observation.json`).
- Leia o repositório por 2 minutos: onde está o mecanismo, o que é calculado de verdade e o que é texto fixo; a IA é chamada de fato ou simulada (se simulada, está rotulada em tela/fala/docs?); há testes do caminho principal?
- Âncoras: baixo = resultado pré-escrito ou saída que reage mas viola uma restrição; alto = decisão correta na condição que justifica a solução, com limites claros. Use um caso sem saída válida quando pertinente.

## 3. Jurado de inovação e uso da tecnologia
**Pergunta central:** isso é novo, e a tecnologia é essencial?
- Já existe algo igual? É "mais um chatbot" ou "mais um dashboard"?
- Qual é o ângulo inesperado (usuário, momento, mídia, mecanismo)?
- Compare com uma regra, processo ou tecnologia existente que sirva à tarefa. Qual capacidade muda materialmente o resultado? Se houver IA, onde ela agrega valor e como a saída é verificada? Se o evento exigir uma tecnologia, confirme o papel dela.
- Âncoras: baixo = mudança de formato com o mesmo resultado; alto = ganho distinto que se mantém no caso difícil.

## 4. Jurado de design e experiência
**Pergunta central:** alguém usaria sem treinamento, e a tela tem identidade?
- **Densidade:** use `firstScreen.words/numbers/controls` de `observation.json` para orientar a inspeção. Ancore a nota em legibilidade, localização de informação e conclusão da tarefa. Explique o efeito observado da densidade no contexto da tela.
- Primeira tela em 360 e 1440 px: hierarquia, legibilidade, uma ação óbvia. Página inteira: o olho sabe para onde ir?
- Interaja: estados vazio, carregando, erro e resultado existem? Foco visível, teclado, contraste (`axe` em `observation.json`)?
- Identidade: as escolhas de composição, conteúdo e interação ajudam a pessoa a reconhecer os estados, entender os dados e operar o produto?
- Âncoras: baixo = confuso ou genérico; alto = claro de primeira e memorável. Polimento além do legível não sobe a nota sozinho.

## 5. Jurado de comunicação e demo
**Pergunta central:** em 3 minutos eu entendi e vou lembrar?
- Abra `?demo=1` e percorra os passos cronometrando: a história é dor → mecanismo → resultado? Cabe no tempo?
- Leia o `DEMO-SCRIPT.md`: a primeira frase explica o produto? O fecho retoma a consequência demonstrada? Um limite é dito com honestidade?
- Escreva **a frase que você usaria para defender este projeto na deliberação**. Se não conseguir, a nota não passa de 5.
- Âncoras: baixo = contexto longo que deixa a ação e a consequência incertas; alto = abertura direta e fecho sustentado pelo que a demo mostrou.

## 6. (Se o evento exigir) Jurado do patrocinador
Verifica o uso real e visível da ferramenta, API ou modelo obrigatório. Sem uso real, o projeto pode ser desclassificado: diga isso em primeiro lugar.

---

## Moderador (agrega a banca)
1. Monte a tabela: jurado × nota × evidência × pior defeito apontado.
   **Defeito apontado por dois ou mais jurados de forma independente é prioridade 1**, acima de qualquer nota individual.
2. Aplique os pesos oficiais de `CHALLENGE.md` (ou os padrões de `criteria.md`) e calcule a nota ponderada.
3. **Deliberação:** onde os jurados discordam, e por quê. A frase de defesa mais forte.
4. **Correções prioritárias** pela consequência no uso, na prova e na entrega. Funcionalidades novas são proibidas depois do congelamento.
5. **Riscos da demo ao vivo:** o que pode falhar na frente da banca e qual o plano B.

## Formato de saída de cada jurado

```markdown
### Jurado: <papel>
Nota: <0–10>
Em 5 s entendi: <para quem / dor / ação, ou "não entendi">
Evidências: <capturas, passos reproduzidos, arquivos>
Melhor ponto:
Pior defeito:
Uma correção que subiria a nota:
```
