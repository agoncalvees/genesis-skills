#!/usr/bin/env bash
# Instala as skills Genesis.
#   scripts/install.sh --user              # Claude Code e Codex
#   scripts/install.sh --project <dir>     # Claude Code e Codex, no projeto
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILLS=("$ROOT"/skills/*)

case "${1:-}" in
  --user)
    node "$ROOT/scripts/install-codex.mjs" --user
    for target in "$HOME/.claude/skills"; do
      mkdir -p "$target"
      for skill in "${SKILLS[@]}"; do
        ln -sfn "$skill" "$target/$(basename "$skill")"
      done
      echo "Skills ligadas em $target"
    done
    ;;
  --project)
    DIR="${2:?Informe o diretório do projeto}"
    if command -v cygpath >/dev/null 2>&1; then
      DIR="$(cygpath -u -- "$DIR")"
    fi
    node "$ROOT/scripts/install-codex.mjs" --project "$DIR"
    for target in "$DIR/.claude/skills"; do
      mkdir -p "$target"
      for skill in "${SKILLS[@]}"; do
        rm -rf "$target/$(basename "$skill")"
        cp -R "$skill" "$target/"
      done
    done
    echo "Skills copiadas para $DIR"
    ;;
  *)
    echo "Uso: $0 --user | --project <dir>"; exit 1 ;;
esac
