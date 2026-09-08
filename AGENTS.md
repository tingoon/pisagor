# Monorepo

Pisagor is a multi-framework UI library: React and Vue component packages plus Storybook runners.

Before making changes, read [`.agents/rules/`](./.agents/rules/) (Cursor loads generated [`.cursor/rules/`](./.cursor/rules/)). Do not duplicate rule text here.

## Agent workflow

Instruction priority: [Core Boundaries](./.agents/rules/core.md).

## Workspace map

```text
├── apps/
│   ├── react/                React Storybook (port 4001)
│   └── vue/                  Vue Storybook (port 4002)
├── packages/
│   ├── react/                  React UI (`@pisagor/react`)
│   ├── react-charts/           React charts (`@pisagor/react-charts`)
│   ├── react-form/             React form fields (`@pisagor/react-form`)
│   ├── vue/                    Vue UI (`@pisagor/vue`)
│   ├── vue-charts/             Vue charts (`@pisagor/vue-charts`)
│   ├── vue-form/               Vue form fields (`@pisagor/vue-form`)
│   ├── recipes/                tv() class recipes (`@pisagor/recipes`)
│   ├── tokens/                 design tokens / Tailwind theme (`@pisagor/tokens`)
│   ├── utils/                  class-name helpers (`@pisagor/utils`)
│   └── tsconfig/               TypeScript configs (`@pisagor/tsconfig`)
├── .agents/                    agent rules, commands, MCP (rulesync source)
└── .cursor/                    generated Cursor output (`bun run rulesync`)
```

`@pisagor/tokens` = CSS theme; `@pisagor/recipes` = shared `tv()` recipes. UI packages import tokens via their `styles.css` entries.

| Path | Notes |
| ---- | ----- |
| `apps/react` (`react-storybook`) | React Storybook |
| `apps/vue` (`vue-storybook`) | Vue Storybook |
| `packages/react` | [AGENTS.md](./packages/react/AGENTS.md) |
| `packages/react-charts` | [AGENTS.md](./packages/react-charts/AGENTS.md) |
| `packages/react-form` | [AGENTS.md](./packages/react-form/AGENTS.md) |
| `packages/vue` | [AGENTS.md](./packages/vue/AGENTS.md) |
| `packages/vue-charts` | [AGENTS.md](./packages/vue-charts/AGENTS.md) |
| `packages/vue-form` | [AGENTS.md](./packages/vue-form/AGENTS.md) |
| `packages/recipes` | [AGENTS.md](./packages/recipes/AGENTS.md) |
| `packages/tokens` | [AGENTS.md](./packages/tokens/AGENTS.md) |
| `packages/utils` | [README.md](./packages/utils/README.md) |
| `packages/tsconfig` | [README.md](./packages/tsconfig/README.md) |

Slash commands: author in [`.agents/commands/`](./.agents/commands/); Cursor loads [`.cursor/commands/`](./.cursor/commands/).

## Getting started

Install Bun, then `bun install` and `bun run setup`. Human steps: [CONTRIBUTING.md](./CONTRIBUTING.md). Optional: Open in Container, then [`/onboarding`](./.agents/commands/onboarding.md).

## Development

From the repository root:

```bash
bun run setup
bun run dev
# optional: bunx turbo dev --filter=vue-storybook
```

React Storybook: `http://127.0.0.1:4001`. Vue Storybook: `http://127.0.0.1:4002`.
