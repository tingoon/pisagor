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

- React Storybook: http://localhost:4001.
- Vue: http://localhost:4002.
- Astro: http://localhost:4003.

## Chromatic

The **Visual review** workflow publishes each Storybook to Chromatic when related packages, recipes, tokens, or Storybook apps change. Create three Chromatic projects linked to this monorepo, then add repository secrets:

- `CHROMATIC_PROJECT_TOKEN_REACT`
- `CHROMATIC_PROJECT_TOKEN_VUE`
- `CHROMATIC_PROJECT_TOKEN_ASTRO`

Manual run: Actions → **Visual review** → **Run workflow**.

Published remote MCP (`https://main--<app-id>.chromatic.com/mcp`) is currently reliable for **React**. Vue/Astro Storybooks still publish for UI review; their Chromatic `/mcp` route may 404. Cursor OAuth for Chromatic MCP uses client id `cdf3737dff9d485485968e50b63fd8b4` under `auth.client_id`.

Vue Storybook keeps `componentsManifest` on; `experimentalDocgenServer` stays off until Storybook supports TypeScript 7 (no `typescript.sys`). Astro has no components-manifest generator yet.

## Local checks

```bash
bun run check
bun run test
```

## Tooling

```bash
# Report unused exports, files, and deps after substantial edits (see knip.config.ts)
# --fix applies safe removals
# --allow-remove-files deletes unused files
# --fix-type exports,types|dependencies|files|catalog limits scope
bunx knip

# List outdated deps across workspaces (dry run)
# -r recurses into workspaces
# -w writes package.json bumps
# -w -i also runs bun install
bunx taze -r
```

Weekly dependency PRs: Actions → **Dependency Updates** (Renovate; config in `renovate.json`). Manual run via **Run workflow**.

## Turborepo Remote Cache

**Checks** and **Docs Site** share Turborepo artifacts via [Vercel Remote Cache](https://vercel.com/docs/monorepos/remote-caching) (OIDC; no long-lived token). Team: `tingoon` (repo variable `TURBO_TEAM`).

One-time setup (owners):

1. Confirm Remote Caching is on (team Settings → Billing). Already enabled for Tingoon.
2. Add a Turborepo CLI [OIDC policy](https://vercel.com/d?to=%2Ftingoon%2F%7E%2Fsettings%2Fbuild-and-deployment%3FaddOidcPolicy%3Dturborepo-cli&title=Add+a+Turborepo+CLI+OIDC+Policy) scoped to GitHub `tingoon/pisagor`.
3. Repo variable: `gh variable set TURBO_TEAM --body "tingoon"` (already set).

Local (optional): `bunx turbo login` then `bunx turbo link` from the repo root. CI logs should show `Remote caching enabled` after the OIDC policy exists.

Commits: [Conventional Commits](https://www.conventionalcommits.org/). Scope with the workspace when the change is local (`feat(react-stories):`, `fix(react):`).

## Pull requests

- Describe the change and how you tested it (Storybook story if UI).
- Do not commit `.env`, secrets, or `mcp.json` with credentials.
- If you add env vars for an app, document them in that app’s `.env.example`.

## Releases

1. In a feature PR, run `bunx changeset` (packages + `patch` / `minor` / `major`). Commit `.changeset/*`.
2. Merge to `main`. The **Release** workflow opens a version PR (changelog + bumps).
3. Merge that PR. The same workflow runs `changeset publish` (OIDC Trusted Publishing, no `NPM_TOKEN`) and creates git tags.

Local publish (after `npm login` / OTP), from a clean tree with bumped versions:

```bash
bunx changeset publish
```

Trusted Publisher (once per package): GitHub Actions → org/user `tingoon`, repository `pisagor`, workflow filename `changesets.yml`.
