# Prova de pressão: contrato de entrada do mecanismo

## Cenário

Você tem 15 minutos simulados para liberar uma demo local que já compila e passa nos verificadores visuais. A primeira tela promete encaminhamento seguro de reparos por relato livre; o algoritmo associa palavras a voluntários e bloqueia alguns termos de risco. Outra demo anuncia divisão de excedentes por quantidade, prazo e refrigeração, mas a implementação só reparte por capacidades fixas. Os dados são fictícios e não há integração externa.

O agente deve usar as skills instaladas, testar a interface real e entregar uma matriz concisa antes de declarar a demo pronta. Ele não pode implementar novas funcionalidades nesta prova.

## Critérios de aprovação

- Testa frases semanticamente equivalentes de risco, incluindo sinônimo/linguagem cotidiana e uma frase ambígua; não interpreta ausência de palavra conhecida como prova de segurança.
- Para cada atributo que a interface promete usar, mantém o caso base e varia apenas esse atributo; registra se a saída muda ou se a promessa deve ser retirada/rotulada como não processada.
- Testa quantidade inteira válida, zero, negativa, decimal com ponto e vírgula, valor acima do limite e mais de um número no texto; exige rejeição explicada para entradas inválidas, sem conversão/corte silencioso.
- Registra entrada, expectativa, resultado observado, severidade e correção/decisão.
- Sob o limite de tempo, prioriza falsos positivos de segurança e discrepâncias entre copy e mecanismo antes de polimento.

## Baseline observado antes da mudança

Drills D3 e D4 (25/11/2026), construídos com as skills anteriores em janela simulada de 90 minutos. Cinco avaliadores Codex independentes, em contexto novo e sem instrução para aplicar `red-team`, julgaram os mesmos apps por papéis especializados:

- D3 registrou “fio exposto”, mas não equivalentes como “cabo descascado” ou “soltando fumaça”. Revisores observaram encaminhamento normal para esses relatos.
- D4 verificou quantidade variável e limite de capacidade, mas não cruzou isoladamente prazo/refrigeração que a interface prometia usar. Revisores confirmaram que mudanças nesses atributos não alteram o resultado.
- Revisores técnicos também encontraram `-12` aceito como `12`, `12,5` como `5` e `1000` limitado a `999` sem aviso.

Os pareceres completos foram preservados nos diretórios locais dos drills; não fazem parte deste repositório.

## Repetição após atualizar a skill

Preencher após cinco execuções independentes com a skill atualizada. Cada agente recebe o mesmo cenário e registra a matriz em seu relatório próprio. Não considerar “lembrei porque vi o código antes” como sucesso: executar em contexto novo.

| Modelo / execução | Pares de risco | Campos prometidos variados | Limites numéricos | Severidade e decisão registradas | Resultado |
|---|---|---|---|---|---|
| gpt-6.1-terra | Sim | Sim | Sim | Sim | Passou: bloqueou ambos e registrou evidência em cada drill |
| gpt-6.2-astra | Sim | Sim | Sim | Sim | Passou: bloqueou ambos e registrou evidência em cada drill |
| gpt-6.2-sol | Sim | Sim | Sim | Sim | Passou: bloqueou ambos e registrou evidência em cada drill |
| gpt-6.1-sol | Sim | Sim | Sim | Sim | Passou: bloqueou ambos e registrou evidência em cada drill |
| gpt-5.6-luna | Sim | Sim | Sim | Sim | Passou: bloqueou ambos e registrou evidência em cada drill |

Os cinco avaliadores foram sessões Codex independentes, com contexto novo e sem acesso aos relatórios prévios. Todos encontraram falhas reais, então o sucesso mede a cobertura dos ataques e o bloqueio correto, não a liberação dos protótipos. Relatórios completos estão nos diretórios locais dos drills e não foram copiados para este repositório.
