#!/usr/bin/env bash
set -euo pipefail

cd /workspace

for port in 4000 4001 4002 4003; do
  if ss -tln | grep -q ":${port} "; then
    echo "Port ${port} already in use; skipping duplicate start."
    exit 0
  fi
done

exec bun run dev
