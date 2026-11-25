# Seleção contextual de referências

Fonte prioritária para decisões de implementação visual: [skills de Emil Kowalski](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c), revisão `64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`, MIT, Copyright (c) 2026 Emil Kowalski.

Abra `skills/<nome>/SKILL.md` no checkout original em `.genesis/emil` do projeto, se o HEAD for a revisão acima e os arquivos estiverem intactos. Sem checkout, abra o mesmo caminho na árvore vinculada ou acesse diretamente `https://raw.githubusercontent.com/emilkowalski/skills/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/skills/<nome>/SKILL.md`. Resolva os arquivos auxiliares na mesma pasta e revisão. Se a referência não estiver acessível, prossiga com a orientação local e registre a limitação quando afetar a revisão.

Use os originais como referências técnicas. Preserve o escopo aprovado, padrões existentes e restrições do ambiente. Recomendações numéricas e estilísticas são pontos de partida contextualizados. Use julgamento de produto diante de divergências. Com um único agente, uma auditoria pode avançar por áreas em sequência e deve ser relatada como uma única avaliação.

| Decisão atual | Referência original |
|---|---|
| Acabamento da interação sem referência mais específica | `emil-design-eng` |
| Comparar direções funcionais antes de decidir | `prototype`; `PICKER.md` se houver seletor |
| Investigar UI com dados reais nas bordas do contrato | `break-ui`; `CATALOG.md` para campos relevantes |
| Extrair candidatas de correções e edições observadas | `learn-taste`; persistência segue a política Genesis |
| Entender como o autor diferencia os fluxos, se o pedido estiver ambíguo | `ask-emil`; selecione pela necessidade atual |
| Escolher primitiva ou dependência justificada pela tarefa | `pick-ui-library` |
| Construir transição web pontual | `animate` |
| Construir motion em React Native ou Expo | `animate-expo` |
| Diagnosticar perda de quadros | `animation-performance` |
| Dar nome a um efeito | `animation-vocabulary` |
| Examinar resposta, física e continuidade espacial à luz das convenções Apple | `apple-design` |
| Construir ou corrigir arraste, swipe e soltura | `gestures` |
| Coordenar elementos que se movem juntos | `choreograph` |
| Revisar a implementação de motion em um componente ou diff | `review-animations`; `STANDARDS.md` quando necessário |
| Auditar motion do produto e planejar correções | `improve-animations`; `AUDIT.md` e `PLAN-TEMPLATE.md` conforme a fase |
| Identificar onde motion ajudaria, sem implementá-lo | `find-animation-opportunities` |
| Reduzir ou remover motion que atrapalha | `remove-animations` |
| Refinar experiência web no celular | `mobile-native` |
| Integrar ou diagnosticar toasts em um projeto com Sonner | `ask-sonner`; `API.md` para assinaturas |
| Escrever, revisar ou migrar Swift nativo | `write-swift` |

Abra `RECIPES.md` em `animate`, `animate-expo` ou `choreograph` apenas para o padrão escolhido. Os dois cheatsheets da raiz servem de índice rápido fora do fluxo normal.
