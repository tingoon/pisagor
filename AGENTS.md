# Monorepo

Pisagor is a multi-framework UI library: React and Vue component packages plus Storybook runners.

Before making changes, read [`.cursor/rules/`](./.cursor/rules/). Do not duplicate rule text here.

## Agent workflow

Instruction priority: [Core Boundaries](./.cursor/rules/core.mdc).

## Workspace map

```text
├── apps/
│   ├── react/                React Storybook (port 3001)
│   └── vue/                  Vue Storybook (port 3002)
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
└── .cursor/                    rules and commands
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

Slash commands: [`.cursor/commands/`](./.cursor/commands/).

## Getting started

Install Bun, then `bun install`. Human steps: [README.md](./README.md). Optional: Open in Container, then [`/onboarding`](./.cursor/commands/onboarding.md).

## Development

From the repository root:

```bash
turbo dev --filter=react-storybook
turbo dev --filter=vue-storybook
```

React Storybook: `http://127.0.0.1:3001`. Vue Storybook: `http://127.0.0.1:3002`.
