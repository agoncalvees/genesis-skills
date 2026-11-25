#!/usr/bin/env bash
# Cria um treino: scripts/new-drill.sh <nome> "<tema>"
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NAME="${1:?nome}"; THEME="${2:?tema}"
DIR="$HOME/orca/drills/$NAME"
[ -e "$DIR" ] && { echo "$DIR já existe"; exit 1; }
mkdir -p "$DIR" && cd "$DIR" && git init -q -b main
cat > THEME.md <<MD
# Tema (treino $NAME)
$THEME

- Orçamento: 90 minutos de relógio (equivale a ~6 h comprimidas). Registre a hora de início e de cada marco em docs/STATUS.md.
- Projeto do zero, neste diretório. Stack livre (sugestão: Vite + React + TypeScript). Sem serviços pagos e sem login.
- Comece pela descoberta. Em treino de entrega, após a equipe aprovar a direção, entregue app rodando localmente, docs/CHALLENGE.md, docs/PRODUCT-BRIEF.md, docs/DEMO-SCRIPT.md, design/DESIGN.md e capturas em design/evidence/.
MD
"$ROOT/scripts/install.sh" --project "$DIR" >/dev/null
git add -A && git commit -qm "Treino $NAME: tema e skills"
echo "$DIR"
