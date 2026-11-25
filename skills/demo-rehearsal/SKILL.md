---
name: demo-rehearsal
description: Congela o produto de hackathon e transforma o que existe em demo defendível — roteiro igual à tela, ?demo=1, ensaios cronometrados, plano B (vídeo/build local/dados), checklist de entrega e verificação final. Use no congelamento, antes de submeter, quando o roteiro divergir da tela, ou quando houver risco de rede/login/API. Gera docs/REHEARSAL.md.
---

# Ensaio e entrega

Depois do congelamento, correção só pode mexer em tela, demo, pitch e evidência. Funcionalidade nova é proibida.

## 1. Congelamento (T-75 a T-60 min antes do fim)

- Declare o congelamento em `docs/STATUS.md` com hora.
- O caminho da demo é: abertura → entrada/exemplo → mecanismo → resultado antes/depois → limite.
- Tudo fora do caminho vira "não mostrar". Esconda botões quebrados.

## 2. Roteiro = tela

Escreva `docs/DEMO-SCRIPT.md` com falas e alvo visual:

| Tempo | Fala | Na tela | Prova |
|---|---|---|---|
| 0:00–0:20 | Dor com pessoa e número | `[data-story=problem]` | número com fonte/estimativa |
| 0:20–0:35 | One-liner | `[data-story=promise]` | frase curta |
| 0:35–1:50 | Demo ao vivo | `?demo=1` / input real | resultado muda |
| 1:50–2:20 | Como funciona + limite | mecanismo/fronteira | IA real/regra rotulada |
| 2:20–2:45 | Impacto e adoção | resultado/next | próximo passo concreto |
| 2:45–3:00 | Fecho | antes × depois | mesmo número |

Cada afirmação da fala precisa ter um elemento correspondente visível. Se não tiver, corte a fala.

## 3. Ensaio cronometrado (mínimo 3)

Registre em `docs/REHEARSAL.md` (template: `templates/REHEARSAL.md`):

```markdown
| # | Data/hora | Duração | Onde travou | Ajuste feito (tela/fala) |
|---|---|---:|---|---|
| 1 | | | | |
```

Regras:
- Cronometre de verdade. Passe do tempo = corte fala, não acelere.
- Ensaio 1: encontra buracos. Ensaio 2: ajusta abertura/fecho. Ensaio 3: grava plano B.
- Se demo depender de rede/API, um ensaio deve ser com rede ruim/desligada.

## 4. Plano B

- [ ] Vídeo de 60–90 s com `?demo=1`, sem áudio obrigatório.
- [ ] Build local roda (`npm/bun run build && preview` ou equivalente).
- [ ] Dados de exemplo carregam sem login.
- [ ] Conta demo preenchida se login for inevitável.
- [ ] Link público/backup acessível sem autenticação extra.
- [ ] Segredos não aparecem no vídeo, README, logs ou tela.

## 5. Checklist final de entrega

Use também `references/submission-checklist.md`.

- [ ] `CHALLENGE.md`, `PRODUCT-BRIEF.md`, `MECHANISM.md`, `DEMO-SCRIPT.md`, `REHEARSAL.md` existem.
- [ ] `node <judge-and-verify>/scripts/verify.mjs <url> --spec design/fidelity.json --out design/evidence`.
- [ ] `node <judge-and-verify>/scripts/observe.mjs <url> --out design/judging`.
- [ ] Primeira tela passa 5s em 360/1440.
- [ ] Input ao vivo funciona; caso difícil tratado.
- [ ] Limite dito em voz alta.
- [ ] Link, vídeo e repositório conferidos em janela anônima.
