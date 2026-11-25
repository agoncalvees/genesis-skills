# Genesis Skills

Skills para descobrir, construir, verificar e entregar produtos, com um fluxo específico para hackathons. Funcionam com qualquer stack e agentes que leiam `SKILL.md`. Nascem de ensaios reais (Aceiro, Senha, Lupa da Chamada) e de pesquisa sobre projetos vencedores e critérios de jurados.

## Instalar

Na raiz do seu projeto, com Node.js e npm disponíveis:

```sh
npx skills@latest add agoncalvees/genesis-skills
```

Quando o instalador pedir, selecione **Codex**, **Project** e todas as skills Genesis. O comando abaixo define essas opções e copia os arquivos para o projeto.

```sh
npx --yes skills@latest add agoncalvees/genesis-skills --agent codex --skill "*" --copy --yes
```

Abra a pasta do projeto em **uma nova sessão do Codex** e descreva só a tarefa. O Codex descobre as skills em `.agents/skills/` e usa as descrições para escolher as pertinentes. Para conferir a instalação, abra o seletor de skills do Codex. Guarde o `skills-lock.json` gerado no projeto para registrar a revisão instalada.

## Skills

| Skill | Quando | Saída principal |
|---|---|---|
| `hackathon-day` | O evento começou: regras, linha do tempo, papéis, congelamento, entrega | `docs/CHALLENGE.md`, cronograma |
| `problem-to-pain` | Tema revelado: dor concreta, 3 ideias, pontuação, one-liner | `docs/PRODUCT-BRIEF.md` |
| `mechanism-integrity` | Definir e provar o mecanismo: IA real/regra/simulação, entrada ao vivo, evidência, fallback | `docs/MECHANISM.md` |
| `pitch-structure` | Montar a tela e o pitch: estrutura padrão, `?demo=1`, roteiro de 3 min, templates | `docs/DEMO-SCRIPT.md`, templates |
| `art-direction` | Definir ou revisar a identidade e a composição do produto | `design/DESIGN.md` quando houver decisões duráveis |
| `design-engineering` | Implementar ou revisar interação, motion, mobile, protótipos e correções de gosto | Referência contextual e evidência do trabalho quando aplicável |
| `demo-rehearsal` | Congelar, ensaiar 3x, roteiro=tela, plano B e checklist final | `docs/REHEARSAL.md` |
| `red-team` | Testar robustez de produto ou demo: inputs, falhas, privacidade, mobile e estados extremos | `docs/RED-TEAM.md` |
| `judge-and-verify` | Antes de entregar e a cada ensaio: verificação no navegador e juiz cego | `design/evidence`, `design/judging` |
| `model-orchestra` | Coordenar modelos free em paralelo: smoke, papéis, banca, síntese | `reports/`, `design/judging/panel` |

## Scripts operacionais

- `skills/judge-and-verify/scripts/verify.mjs` — fidelidade/regras, overflow, erros, axe crítico/sério.
- `skills/judge-and-verify/scripts/observe.mjs` — 5s, densidade, story markers, input ao vivo, demo, gates P0.
- `skills/judge-and-verify/scripts/judge-packet.mjs` — pacote único para banca cega (inclui MECHANISM/REHEARSAL/claims).
- `skills/judge-and-verify/scripts/claim-ledger.mjs` — claims/números sem procedência provável.
- `skills/judge-and-verify/scripts/panel-pack.mjs` — gera prompts idênticos para banca multi-modelo.
- `skills/judge-and-verify/scripts/panel-collect.mjs` — consolida notas/pareceres em `verdict.md`/`panel.json`.
- `scripts/model-smoke.mjs` — registra disponibilidade de modelos gratuitos.
- `scripts/skill-lint.mjs` — lint estrutural do pack.

## Instalação a partir de um checkout

No Codex, com Node.js 22 ou superior, inclusive no Windows:

```powershell
node scripts/install-codex.mjs --project "C:\caminho\do\projeto"
node scripts/install-codex.mjs --user
```

O instalador copia as skills Genesis para `.agents/skills/genesis` no projeto ou no perfil. Use um método de instalação por escopo para evitar entradas duplicadas. Rode novamente para atualizar a cópia gerenciada. A migração de projeto remove o bloco padrão de sequência fixa de instalações antigas, preservando o restante do AGENTS.md. Se você adaptou aquele bloco ou tem uma instalação legada duplicada, revise as instruções e os diretórios antigos antes de removê-los.

Para instalar também no Claude Code, use Bash:

```sh
scripts/install.sh --user               # para você, em todos os projetos
scripts/install.sh --project /caminho   # dentro de um projeto
```

### Referências do Emil

O [mapa contextual](skills/design-engineering/references/emil.md) fixa a revisão do upstream. A skill carrega o documento selecionado pela tarefa. Para uso offline, a partir da raiz do projeto:

```powershell
git clone --no-checkout https://github.com/emilkowalski/skills.git .genesis/emil
git -C .genesis/emil checkout --detach 64eb3deb9a5fbfa041faf783e0bc3fd635872e9c
```

Mantenha esse checkout fora do catálogo de skills do agente e exclua `.genesis/emil/` do Git do produto. Ele contém os originais e a licença MIT. Para atualizar a integração, revise o diff upstream, atualize o SHA no mapa e nesta instrução, atualize o checkout opcional e repita as verificações. Sem checkout, use os links versionados.

## Fluxo de hackathon

Para trabalho fora de um evento, selecione só a skill de que a tarefa precisa. Em um hackathon, os passos abaixo são um roteiro de entrega ajustável ao regulamento e ao tempo disponível.

1. `hackathon-day` — regras, tempo, entrega.
2. `problem-to-pain` — dor, usuário, one-liner.
3. `mechanism-integrity` — mecanismo real, fronteira, entrada ao vivo.
4. `pitch-structure` — primeira tela, `?demo=1`, antes/depois.
5. `art-direction` — identidade visual. Use `design-engineering` conforme a necessidade da interação.
6. `demo-rehearsal` — congelar, ensaiar, plano B.
7. `red-team` — quebrar demo antes do jurado.
8. `judge-and-verify` — verify, observe, judge packet, banca.

## Treino

As skills só mudam de versão depois de treino registrado em `TRAINING.md`. Protocolo: `skills/hackathon-day/references/drill-protocol.md`. Matriz de modelos free: `skills/judge-and-verify/references/model-matrix.md`.

Consulte a auditoria de fontes e o [registro da candidata à primeira validação prática](reports/skill-probes/emil-integration.md#candidata-à-primeira-validação-prática).
