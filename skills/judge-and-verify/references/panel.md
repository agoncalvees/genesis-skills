# Banca de jurados

Cada jurado é um agente separado, com a sua opinião crítica, que **usa o app de verdade**: abre a URL com Playwright, clica, navega, testa a demo, tira prints e, quando o critério pede, lê o repositório. O que ele **não** recebe é a conversa do time, as intenções ou o "o que queríamos fazer": julga o que existe, como um jurado real.

Entradas comuns a todos: a URL do app; `docs/CHALLENGE.md` (tema e critérios oficiais); a saída de `scripts/observe.mjs` (`design/judging/observation.json` e capturas); a duração do pitch; `docs/DEMO-SCRIPT.md` só para o jurado de comunicação.

Tempo de cada jurado: **5 minutos de exploração**, o tempo de um jurado assíncrono. O que não for encontrado em 5 minutos não existe para a nota.

Escala para todos (0–10): 0–3 não atinge o básico; 4–6 o esperado de um hackathon (funciona no nível da demo); 7–8 acima da média; 9–10 finalista num evento grande, use raramente. Toda nota precisa citar evidência: uma captura, um trecho de texto da tela, um passo reproduzível ou um arquivo do repositório.

---

## 1. Jurado de impacto e problema
**Pergunta central:** isso dói para alguém real? Para quem, quanto, e muda algo?
- Nos primeiros 5 s (`5s-360.png`, `5s-1440.png`): para quem é? qual a dor? o que faço agora? Responda antes de olhar qualquer outra coisa.
- A dor tem número e fonte (ou está rotulada como estimativa)? O usuário é específico ("coordenadora pedagógica") ou genérico ("pessoas", "empresas")?
- O resultado mostrado (antes × depois) é crível e ligado à dor?
- Viabilidade: quem adotaria amanhã, o que falta para usar de verdade, o que quebra primeiro.
- Âncoras: baixo = "seria útil para a sociedade"; alto = usuário específico e efeito quantificado.

## 2. Jurado técnico (execução e implementação)
**Pergunta central:** funciona ou é slide? O mecanismo é real?
- Percorra o caminho principal sem a demo guiada: clique na ação, use o exemplo, mude uma entrada e veja se o resultado muda de forma coerente. Tente uma entrada inesperada (vazia, extrema).
- Erros no console, telas quebradas, tempo de carregamento (`observation.json`).
- Leia o repositório por 2 minutos: onde está o mecanismo, o que é calculado de verdade e o que é texto fixo; a IA é chamada de fato ou simulada (se simulada, está rotulada?); há testes do caminho principal?
- Âncoras: baixo = telas estáticas ou resultado pré-escrito; alto = funciona ao vivo, reage a entradas diferentes e não quebra.

## 3. Jurado de inovação e uso da tecnologia
**Pergunta central:** isso é novo, e a tecnologia é essencial?
- Já existe algo igual? É "mais um chatbot" ou "mais um dashboard"?
- Qual é o ângulo inesperado (usuário, momento, mídia, mecanismo)?
- Sem a IA (ou a tecnologia exigida pelo evento), a solução perde a razão de existir? A fronteira da IA está clara: onde ela age, onde a pessoa decide?
- Âncoras: baixo = produto genérico sobre um modelo; alto = um problema que ninguém tratou assim, com tecnologia indispensável e limitada com critério.

## 4. Jurado de design e experiência
**Pergunta central:** alguém usaria sem treinamento, e a tela tem identidade?
- **Densidade:** use `firstScreen.words/numbers/controls` de `observation.json`. Mais de 60 palavras (1440 px) ou 35 (360 px), mais de 1 número em destaque ou mais de 2 ações na primeira tela é defeito: a nota de design não passa de 6. Cada tela deve pedir uma decisão; despejo de informação ("vomitar dados") é o erro mais comum.
- Primeira tela em 360 e 1440 px: hierarquia, legibilidade, uma ação óbvia. Página inteira: o olho sabe para onde ir?
- Interaja: estados vazio, carregando, erro e resultado existem? Foco visível, teclado, contraste (`axe` em `observation.json`)?
- Identidade: parece feito para este problema ou parece um template genérico (gradiente roxo, grade de cards, dashboard padrão)?
- Âncoras: baixo = confuso ou genérico; alto = claro de primeira e memorável. Polimento além do legível não sobe a nota sozinho.

## 5. Jurado de comunicação e demo
**Pergunta central:** em 3 minutos eu entendi e vou lembrar?
- Abra `?demo=1` e percorra os passos cronometrando: a história é dor → mecanismo → resultado? Cabe no tempo?
- Leia o `DEMO-SCRIPT.md`: a primeira frase é "isto é X, que faz Y para Z"? Há um número de fecho? Um limite é dito com honestidade?
- Escreva **a frase que você usaria para defender este projeto na deliberação**. Se não conseguir, a nota não passa de 5.
- Âncoras: baixo = contexto longo antes do produto, sem número; alto = abertura em uma frase, demo sem desvio, fecho memorável.

## 6. (Se o evento exigir) Jurado do patrocinador
Verifica o uso real e visível da ferramenta, API ou modelo obrigatório. Sem uso real, o projeto pode ser desclassificado: diga isso em primeiro lugar.

---

## Moderador (agrega a banca)
1. Monte a tabela: jurado × nota × evidência × pior defeito apontado.
   **Defeito apontado por dois ou mais jurados de forma independente é prioridade 1**, acima de qualquer nota individual.
2. Aplique os pesos oficiais de `CHALLENGE.md` (ou os padrões de `criteria.md`) e calcule a nota ponderada.
3. **Deliberação:** onde os jurados discordam, e por quê. A frase de defesa mais forte.
4. **Três correções** em ordem de ganho de nota por minuto de trabalho, todas na tela, na demo ou no pitch. Funcionalidades novas são proibidas depois do congelamento.
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
