<!-- BEGIN:turborepo-agent-rules -->

# This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": false` in the root `turbo.json` or `turbo.jsonc` to opt out; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.
<!-- END:turborepo-agent-rules -->

# Monorepo

Pisagor is a multi-framework UI library: React, Vue, Solid, Svelte, and Astro packages plus Storybook / docs runners.

Before making changes, read [`.cursor/rules/`](./.cursor/rules/) (generated from [`.rulesync/rules/`](./.rulesync/rules/)). Do not duplicate rule text here.

## Agent workflow

Instruction priority: [Core Boundaries](./.rulesync/rules/core.md).

## Workspace map

```text
├── apps/
│   ├── docs/                 Docs site (port 4000)
│   ├── react/                React Storybook (port 4001)
│   ├── vue/                  Vue Storybook (port 4002)
│   ├── astro/                Astro Storybook (port 4003)
│   ├── solid/                Solid block demos (docs)
│   └── svelte/               Svelte block demos (docs)
├── packages/
│   ├── react/                React UI (`@pisagor/react`)
│   ├── react-form/           React form fields (`@pisagor/react-form`)
│   ├── vue/                  Vue UI (`@pisagor/vue`)
│   ├── vue-form/             Vue form fields (`@pisagor/vue-form`)
│   ├── solid/                Solid UI (`@pisagor/solid`)
│   ├── solid-form/           Solid form fields (`@pisagor/solid-form`)
│   ├── svelte/               Svelte UI (`@pisagor/svelte`)
│   ├── svelte-form/          Svelte form fields (`@pisagor/svelte-form`)
│   ├── astro/                Static Astro UI (`@pisagor/astro`)
│   ├── props/                Shared prop contracts (`@pisagor/props`)
│   ├── recipes/              tv() class recipes (`@pisagor/recipes`)
│   ├── tokens/               Design tokens / Tailwind theme (`@pisagor/tokens`)
│   ├── utils/                Class-name helpers (`@pisagor/utils`)
│   └── mcp/                  MCP server (`@pisagor/mcp`)
├── .rulesync/                Agent rules, commands, skills (source)
└── .cursor/                  Generated Cursor output (`bun run rulesync`)
```

`@pisagor/tokens` = CSS theme; `@pisagor/recipes` = shared `tv()` recipes; `@pisagor/props` = framework-agnostic prop types. UI packages import tokens via their `styles` entries.

Package implementation guidance lives in each package’s `skills/` and in [`.rulesync/rules/integrations/`](./.rulesync/rules/integrations/). Prefer [`@pisagor/mcp`](./packages/mcp) (`bunx @pisagor/mcp`) when available.

Slash commands: author in [`.rulesync/commands/`](./.rulesync/commands/); Cursor loads [`.cursor/commands/`](./.cursor/commands/).

## Getting started

Install Bun, then `bun install` and `bun run setup`. Human steps: [CONTRIBUTING.md](./CONTRIBUTING.md). Optional: Open in Container, then [`/onboarding`](./.rulesync/commands/onboarding.md).

## Development

From the repository root:

```bash
bun run setup
bun run dev
# optional: bun --filter docs
# optional: bunx turbo dev --filter=vue-stories
# optional: bunx turbo dev --filter=astro-stories
```

Docs: `http://127.0.0.1:4000`. React Storybook: `4001`. Vue: `4002`. Astro: `4003`.
