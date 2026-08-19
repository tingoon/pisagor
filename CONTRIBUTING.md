# Contributing

## Setup

1. Install [Bun](https://bun.sh) 1.3.14.
2. `bun install` from the repo root.
3. `turbo dev --filter=react` — React at http://127.0.0.1:3001.
   Optional: `turbo dev --filter=vue` — Vue at http://127.0.0.1:3002.

Dev Containers are optional.

## Checks

```bash
bunx biome ci
turbo type-check
turbo test
bun run knip
```

Commits: [Conventional Commits](https://www.conventionalcommits.org/). Scope with the workspace when the change is local (`feat(react):`, `fix(storybook):`).

## Pull requests

- Describe the change and how you tested it (Storybook story if UI).
- Do not commit `.env`, secrets, or `mcp.json` with credentials.
- If you add env vars for an app, document them in that app’s `.env.example`.
