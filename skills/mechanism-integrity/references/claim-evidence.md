# Claim ledger e evidência

## Regra
Toda afirmação forte mostrada ao jurado precisa ser de um destes tipos:

| Tipo | Exemplo | Como marcar |
|---|---|---|
| Medido agora | "Analisado em 1,8 s" | medição real/log |
| Fonte externa | "Evasão média 7% (INEP, 2024)" | fonte + ano/link |
| Estimativa | "~2 h por semana (estimativa)" | rótulo explícito |
| Dado de exemplo | "Aluno fictício para demo" | rótulo explícito |
| Calculado pelo app | "3 casos com risco alto" | derivado de entrada visível |

## Anti-padrões
- Número redondo sem unidade/fonte.
- "IA detectou" quando é regex/score fixo.
- Antes/depois com bases diferentes.
- Depoimento/caso real inventado.
- Porcentagem sem denominador.

## Teste rápido
Use `skills/judge-and-verify/scripts/claim-ledger.mjs <dir>`. Ele é heurístico: revise os achados, não aceite cegamente. O objetivo é não deixar claim frágil chegar na banca.
