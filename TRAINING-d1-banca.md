# Treino 1 — banca (Lupa da Chamada)

Banca de 5 jurados, agentes independentes, 5 min de uso do app via Playwright cada (~70 s de relógio cada, em paralelo). Pesos padrão de `criteria.md`.

| Jurado | Nota | Melhor ponto | Pior defeito |
|---|---|---|---|
| Impacto | 7 | "3 têm presença acima de 75%: o sinal estava só nas anotações"; Thiago como falso positivo do filtro | premissa de anotações ricas não sustentada; dados montados para a tese; sem fonte do "1 em cada 4"; nada sobre LGPD com dados de menores |
| Técnico | 5 | resultado auditável: cada ponto com motivo e trecho sublinhado | sem entrada (0 inputs); léxico falha em negação, sinônimos e gravidez; textos fixos; sem testes |
| Inovação | 5 | fronteira IA × humano exemplar; "prioriza conversas" em vez de "prevê evasão" | "a IA" são 6 regex; 0 de 9 paráfrases detectadas; tela se contradiz |
| Design | 7,5 | metáfora do diário corrigido a caneta carrega o argumento | linhas esmaecidas a ~2,9:1; foco padrão do navegador; no celular a troca de aba não mostra o resultado |
| Comunicação | 7 | contraste filtro de faltas × Rafael com 90% | roteiro diz "topo" (tela: 3º); limite não é dito em voz alta; tour cobre o número de fecho |

Nota ponderada: **6,2/10**. Consenso (3 jurados): o rótulo "IA" num mecanismo de regras. Frase de defesa: "o único projeto que mostrou o aluno que o filtro de faltas não pega".
