# Protocolo de treino (drill)

## Setup
1. Use um tema novo e um diretório de treino para os registros, com regras e um limite de tempo explícitos.
2. Registre início, pessoas, agentes disponíveis e orçamento em `docs/STATUS.md` do treino.

## Execução
- Rode a descoberta de `problem-to-pain` e registre o resultado no prazo. Em treino de entrega, só acione o build após aprovação explícita da direção e do recorte.
- Sem copiar código de produtos anteriores.
- Em treino de entrega após aprovação, reúna `CHALLENGE.md`, `PRODUCT-BRIEF.md`, `MECHANISM.md`, `DEMO-SCRIPT.md`, `REHEARSAL.md`, `design/DESIGN.md`, `design/fidelity.json` e evidências.

## Treino de descoberta da skill

Use este ciclo para transformar falhas reais ou sintéticas em mudanças verificáveis de `problem-to-pain`:

1. Antes de editar, guarde o tema, as regras, prazo, equipe e prompt em `reports/skill-probes/`. Escreva critérios observáveis de aprovação e quais trechos da saída provariam cada critério.
2. Rode o prompt em uma sessão nova que leia a skill instalada atual. Guarde a resposta de base. Não esconda a falha dizendo que era “só um exemplo”; identifique exatamente o que faltou, o que foi presumido e qual instrução não ativou.
3. Edite o arquivo canônico mais específico. Não espalhe a mesma regra em várias skills. Se o usuário rejeitou uma proposta, ligue cada frase de feedback à proposta certa; não converta uma preferência de um caso em regra universal sem teste.
4. Rode o mesmo prompt em outra sessão nova, sem mudar a rubrica. Depois faça uma sonda de transferência com outro tema e uma restrição diferente. O modelo que gera a resposta não avalia sozinho o próprio resultado; um moderador compara a saída com os critérios.
5. Registre baseline, alteração, repetições, falhas remanescentes e limites em `TRAINING.md`. A versão fica candidata até passar as repetições. Se houver falha, corrija um ponto e rode a sonda novamente.

Para descoberta, verifique: clareza de pessoa/dor/cena, fontes que sustentam a decisão, comparação com substitutos e vencedores, papel específico da IA, acesso aos dados, núcleo funcional demonstrável, tarefas/aceite de build e honestidade sobre o que prêmio e protótipo provam. Também meça tempo até decisão e até a primeira tarefa que a equipe consegue iniciar sem nova rodada de ideação.

## Medições
- Para descoberta, registre tempo real até decisão ou encerramento, interações humanas, rodadas, diversidade de mecanismos, qualidade da evidência e clareza do one-liner. Se houver telemetria, registre tokens e ferramenta. Anote a cobertura de agentes e o que foi simulado em `TRAINING.md`.
- Em treino de entrega, registre funcionamento e evidências da demo e avalie os gates abaixo.
- `verify.mjs` exit 0.
- `observe.mjs --profile tool` (ou `--profile landing`, conforme a demo) exit 0, sem gates P0.
- `judge-packet.mjs` gerado.
- `claim-ledger.mjs` sem claims suspeitas no caminho da demo.

## Banca
- 5 jurados de modelos diferentes, sem contexto do time.
- Moderador agrega nota ponderada, consenso, 3 correções, risco de demo ao vivo.
- Cada falha vira patch em skill + registro em `TRAINING.md`.

## Promoção
Skill/pack só é “validado para hackathon” após 2 drills sem regressão nos gates P0 e com ganho ou estabilidade na nota ponderada.
