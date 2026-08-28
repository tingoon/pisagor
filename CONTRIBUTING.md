# Contributing

## Setup

Recommended: open the repo in a [Dev Container](https://containers.dev/) (Docker + VS Code/Cursor Dev Containers extension → **Open in Container**). Bun and tooling are already in the image.

Then from the repo root:

```bash
bun install
turbo dev --filter=react-storybook
# optional: turbo dev --filter=vue-storybook
```

React Storybook: http://127.0.0.1:3001. Vue: http://127.0.0.1:3002.

Without a container, install [Bun](https://bun.sh) locally and run the same commands.

## Checks

```bash
bunx biome ci
turbo type-check
turbo test
bun run knip
```

Commits: [Conventional Commits](https://www.conventionalcommits.org/). Scope with the workspace when the change is local (`feat(react-storybook):`, `fix(react):`).

## Pull requests

- Describe the change and how you tested it (Storybook story if UI).
- Do not commit `.env`, secrets, or `mcp.json` with credentials.
- If you add env vars for an app, document them in that app’s `.env.example`.
