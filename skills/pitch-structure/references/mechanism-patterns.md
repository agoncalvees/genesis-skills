# Padrões de mecanismo demonstrável

Escolha um padrão que gere resultado visível com input real em <30 min.

## 1. Classificador com evidência
- **Entrada**: texto/foto/formulário colado pelo jurado.
- **Saída**: classe + motivo + evidência destacada.
- **Prova**: mostrar trecho que levou à decisão; permitir editar entrada.
- **Armadilha**: chamar regex de IA.

## 2. Simulador com contrafactual
- **Entrada**: parâmetros/cenário.
- **Saída**: antes × depois na mesma base.
- **Prova**: mover parâmetro e ver mudança; mesma semente/cenário.
- **Armadilha**: animação bonita sem relação causal.

## 3. Extrator com citação
- **Entrada**: documento/texto longo.
- **Saída**: campos extraídos com citação/posição.
- **Prova**: clicar no campo e ver trecho fonte.
- **Armadilha**: JSON inventado sem apontar origem.

## 4. Otimizador com restrições
- **Entrada**: restrições e prioridades.
- **Saída**: plano/rota/escala + tradeoff.
- **Prova**: mudar restrição e comparar solução.
- **Armadilha**: solução fixa "otimizada".

## 5. Copiloto humano-no-loop
- **Entrada**: caso real/exemplo.
- **Saída**: sugestão + confiança + ação humana.
- **Prova**: pessoa aceita/edita/rejeita; sistema registra decisão.
- **Armadilha**: IA decide ação irreversível sozinha.
