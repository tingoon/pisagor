# Contributing

## Setup

Recommended: open the repo in a [Dev Container](https://containers.dev/) (Docker + VS Code/Cursor Dev Containers extension → **Open in Container**). Bun and tooling are already in the image.

Without a container, install [Bun](https://bun.sh) locally first.

Then from the repo root:

```bash
bun install
bun run setup
bun run dev
# optional: bunx turbo dev --filter=vue-stories
# optional: bunx turbo dev --filter=astro-stories
```

React Storybook: http://localhost:4001. Vue: http://localhost:4002. Astro: http://localhost:4003.

## Checks

```bash
bun run check
bun run test
```

```bash
# Report unused exports, files, and deps after substantial edits (see knip.config.ts)
# --fix applies safe removals
# --allow-remove-files deletes unused files
# --fix-type exports,types|dependencies|files|catalog limits scope
bunx knip

# Regenerate artifacts/repomix pack only (see repomix.config.ts)
# --compress keeps structure, drops implementation detail
# --include "apps/react/**,packages/react/**" packs a subset
bunx repomix

# List outdated deps across workspaces (dry run; see taze.config.ts)
# -w writes package.json bumps
# -w -i also runs bun install
bunx taze
```

Commits: [Conventional Commits](https://www.conventionalcommits.org/). Scope with the workspace when the change is local (`feat(react-stories):`, `fix(react):`).

## Pull requests

- Describe the change and how you tested it (Storybook story if UI).
- Do not commit `.env`, secrets, or `mcp.json` with credentials.
- If you add env vars for an app, document them in that app’s `.env.example`.

## Releases

1. In a feature PR, run `bunx changeset` (packages + `patch` / `minor` / `major`). Commit `.changeset/*`.
2. Merge to `main`. CI (**Changesets** workflow) opens a version PR (changelog + bumps).
3. Merge that PR. The same workflow runs `changeset publish` (OIDC Trusted Publishing, no `NPM_TOKEN`) and creates git tags.

Local publish (after `npm login` / OTP), from a clean tree with bumped versions:

```bash
bunx changeset publish
```

Trusted Publisher (once per package): GitHub Actions → org/user `tingoon`, repository `pisagor`, workflow filename `changesets.yml`.
