# Integração de design engineering

Base Genesis em `2c4bfc0`. Fonte técnica revisada em `64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`. O inventário contém 20 skills, nove arquivos auxiliares de skills e sete arquivos de raiz. [Árvore original](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c)

## Arquitetura

O Genesis instala um ponto de entrada contextual junto das skills próprias. Ele consulta um original por decisão, com o arquivo auxiliar pertinente quando necessário. A revisão fixa permite reproduzir a leitura. O checkout local opcional permite uso offline e conserva a licença de Emil Kowalski e os caminhos relativos. A referência remota é suficiente quando houver acesso à rede. [Licença MIT](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/LICENSE)

Instalar todo o upstream como skills descobríveis tornaria seus metadados visíveis em tarefas alheias e permitiria ativações sobrepostas. Manter cópias adaptadas das skills acrescentaria uma segunda base para manter. A adaptação local fica concentrada na seleção, nas fronteiras de prototipagem e fixtures, na persistência de gosto e nos critérios de avaliação do Genesis.

## Competências analisadas

| Originais | Aplicação e limites no Genesis |
|---|---|
| `ask-emil`, `emil-design-eng` | Seletor por tarefa e referência geral de pressão, tooltip, origem, interrupção, acessibilidade e refinamento. Escolher pela decisão atual, inclusive manutenção de uma única interação. |
| `prototype` e `PICKER.md` | Alternativas que divergem no mesmo contexto, comparação à escala real e promoção após escolha. O seletor pertence ao ambiente de exploração. |
| `learn-taste` | Rastrear correções e edições, propor regra, motivo e escopo, lidar com conflitos e persistir por confirmação. Preferências pessoais recorrentes podem ficar em arquivo privado, com identidade no DESIGN.md do produto. |
| `break-ui` e `CATALOG.md` | Variações plausíveis que chegam pela fronteira real, comparação com baseline e evidência. Usar o catálogo por tipo de dado e fixtures fora da produção. |
| `pick-ui-library`, `ask-sonner` e `API.md` | Consultar primitivas, bibliotecas existentes e receitas de notificações quando o projeto pedir. O catálogo informa a escolha dentro da stack e do design system do produto. |
| `animate` e `RECIPES.md`, `choreograph` e `RECIPES.md`, `gestures` | Escolha do meio mais simples, timing, interrupção, coreografia por relação entre elementos e continuidade do gesto. Preferir solução nativa para transições simples. |
| `animation-performance`, `animation-vocabulary` | Diagnóstico com evidência de frames e custo de layout, paint ou composição. Glossário para dar nome ao efeito sem presumir sua implementação. |
| `apple-design`, `mobile-native` | Feedback, manipulação direta, física e continuidade, além de viewport, safe areas, teclado e toque na web. Materiais, volumes e estética seguem a identidade e plataforma do produto. |
| `animate-expo` e `RECIPES.md`, `write-swift` | Caminhos para Expo e Swift nativo. O primeiro cobre worklets, gestos e haptics. O segundo cobre modelagem, concorrência e APIs Swift. Cada caminho depende da stack e da ferramenta concretas. |
| `review-animations` e `STANDARDS.md`, `improve-animations` e `AUDIT.md` / `PLAN-TEMPLATE.md` | Revisão localizada e auditoria ampla são decisões distintas. Use sintomas, prioridade e reprodução, contextualizando as tabelas de tempo e frequência. |
| `find-animation-opportunities`, `remove-animations` | Investigar onde a animação ajuda e onde ela cria espera ou distração. Usar ausência de motion como uma solução legítima em fluxos frequentes. |

Os arquivos de raiz incluem README, licença, cheatsheets de UI e desempenho, metadados Git e o marcador vazio `.pl`. Os atalhos técnicos dos cheatsheets apontam para as referências detalhadas quando um caso pede investigação.

## Conflitos resolvidos

| No Genesis anterior ou no upstream | Decisão |
|---|---|
| Instalação de projeto prescrevia toda a sequência de hackathon | Descoberta por skill e remoção do bloco padrão legado. O roteiro de evento continua disponível para hackathons. |
| Fontes, metáforas, cor de sinal, escalas, materiais e número de níveis eram prescritos | Composição, densidade e identidade respondem à tarefa. O acabamento das interações fica na competência técnica. |
| Motion vinha com durações prescritas e rolagem automática no celular | Avaliar utilidade, frequência, reversão e feedback. Ajustar o método ao dispositivo, aos tokens e à ação. |
| Densidade bloqueava o observe e limitava a nota do jurado | Palavras, números e controles orientam a inspeção. A avaliação depende do efeito observado no fluxo. |
| Verificação sem spec exigia marcadores de pitch | O perfil de produto verifica falhas técnicas e contratos declarados. Os perfis de demo mantêm verificações próprias quando selecionados. |
| O upstream oferece rotinas prescritivas, picker próprio e auditoria paralela | Os recursos são consultados sob demanda. A execução pode ser sequencial com um agente, e decisões de preferência conservam confirmação explícita. |

## Verificação no Windows

- Node.js 24 executou o lint estrutural, com 10 skills e zero erros ou avisos, e as sete regressões. A instalação cobriu destino com espaços e acento, reinstalação, migração do bloco padrão de AGENTS.md e proteção de uma instalação alheia. A cópia nativa criou um caminho com acento corrompido neste ambiente. A instalação passou após a troca por leitura e escrita explícitas de arquivos. O instalador via Git Bash também gravou os dois destinos de projeto.
- O método `skills/list` do Codex Desktop 0.169.0-alpha.11.1 descobriu as 10 skills Genesis em um projeto temporário. O checkout do Emil permaneceu fora do catálogo. Um roteiro local consultou o mapa e abriu quatro originais da revisão fixada para perda de quadros, dados adversariais, remoção de motion e Swift. O CLI estava sem login durante essa rodada inicial.
- Os avaliadores rodaram em Chromium com um fixture temporário. Um produto denso sem marcadores de pitch passou nos perfis de produto. O perfil de demo sinalizou marcadores ausentes. HTTP 503 e overflow foram detectados. O gerador de pacote produziu evidência de acordo com o perfil.
- A rodada cobriu execução técnica e estrutura. O validador auxiliar em Python exigia PyYAML, que estava ausente. O lint do Genesis e a descoberta nativa foram executados.

## Candidata à primeira validação prática

Esta baseline reúne o pacote Genesis revisado para uso em um projeto independente. A instalação por projeto usa `npx skills` e copia o pacote atual. O registro da revisão instalada fica no `skills-lock.json` do projeto. Após seguir o [procedimento de instalação e abertura de sessão](../../README.md#instalar), basta descrever a tarefa.

- A instalação de teste com `skills` 1.9.0 encontrou YAML incompatível em `hackathon-day`. Após a correção, as 10 skills foram copiadas para `.agents/skills/` e descobertas pelo Codex no Windows. O pacote incluiu os scripts e o mapa de referências.
- A revisão alinhou ensaio e banca aos perfis explícitos de demo e restringiu os gatilhos de pitch e ensaio ao contexto de hackathon.
- As 20 entradas do mapa foram conferidas contra a árvore do Emil em `64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`. O checkout foi testado e o acesso HTTPS direto retornou 200 para duas skills, um catálogo e a licença.
- Em uma sessão autenticada e independente, um pedido de revisão de CSS com perda de quadros levou o Codex a selecionar `design-engineering` e abrir `animation-performance` no checkout fixado. O pedido forneceu a tarefa e o arquivo, sem nomear skills. A tentativa com o modo local `read-only` selecionou a skill, mas a política do runner bloqueou a leitura. O teste com `workspace-write` registrou as leituras.
- O lint estrutural, as sete regressões e a sintaxe dos 13 scripts JavaScript foram verificados localmente.

A candidata aguarda validação prática em um produto. Avaliação visual, axe em produto, dispositivos físicos, Expo, Swift/Xcode, ativação no Claude Code e instalação global ficam fora da verificação local. A opção de checkout fixado mantém as referências disponíveis quando a sessão restringe o acesso à internet.
