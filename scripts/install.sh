#!/usr/bin/env bash
# Instala as skills Genesis.
#   scripts/install.sh --user              # ~/.claude/skills e ~/.codex/skills (links simbólicos)
#   scripts/install.sh --project <dir>     # cópia em <dir>/.claude/skills e <dir>/.codex/skills + ponteiro no AGENTS.md
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILLS=("$ROOT"/skills/*)

case "${1:-}" in
  --user)
    for target in "$HOME/.claude/skills" "$HOME/.codex/skills"; do
      mkdir -p "$target"
      for skill in "${SKILLS[@]}"; do
        ln -sfn "$skill" "$target/$(basename "$skill")"
      done
      echo "Skills ligadas em $target"
    done
    ;;
  --project)
    DIR="${2:?Informe o diretório do projeto}"
    for target in "$DIR/.claude/skills" "$DIR/.codex/skills"; do
      mkdir -p "$target"
      for skill in "${SKILLS[@]}"; do
        rm -rf "$target/$(basename "$skill")"
        cp -R "$skill" "$target/"
      done
    done
    if ! grep -qs "genesis-skills" "$DIR/AGENTS.md"; then
      cat >> "$DIR/AGENTS.md" <<'MD'

## Hackathon (genesis-skills)
Siga as skills em `.claude/skills/` (mesmo conteúdo em `.codex/skills/`), nesta ordem: `hackathon-day` → `problem-to-pain` → `pitch-structure` → `art-direction` → `judge-and-verify`. Agentes sem suporte a skills: leia os arquivos `SKILL.md` diretamente.
MD
    fi
    echo "Skills copiadas para $DIR"
    ;;
  *)
    echo "Uso: $0 --user | --project <dir>"; exit 1 ;;
esac
