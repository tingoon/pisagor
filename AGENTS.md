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
│   ├── react-blocks/           composed UI blocks (`@pisagor/react-blocks`)
│   ├── react-form/             form fields (`@pisagor/react-form`)
│   ├── react-hooks/            React hooks (`@pisagor/react-hooks`)
│   ├── react/                  React UI components (`@pisagor/react`)
│   ├── vue-blocks/             composed Vue blocks (`@pisagor/vue-blocks`)
│   ├── vue-composables/        Vue composables (`@pisagor/vue-composables`)
│   ├── vue-form/               Vue form fields (`@pisagor/vue-form`)
│   ├── vue/                    Vue UI components (`@pisagor/vue`)
│   ├── styles/                 tv() class recipes (`@pisagor/styles`)
│   ├── tokens/                 design tokens / Tailwind theme (`@pisagor/tokens`)
│   ├── utils/                  class-name helpers (`@pisagor/utils`)
│   └── tsconfig/               TypeScript configs (`@pisagor/tsconfig`)
└── .cursor/                    rules and commands
```

`@pisagor/tokens` = CSS theme; `@pisagor/styles` = shared `tv()` recipes. `@pisagor/vue` imports tokens via `styles.css`; `@pisagor/react` still duplicates tokens in its own `styles.css` until wired.

| Path | Notes |
| ---- | ----- |
| `apps/react` | React Storybook |
| `apps/vue` | Vue Storybook |
| `packages/react-blocks` | [AGENTS.md](./packages/react-blocks/AGENTS.md) |
| `packages/react-form` | [AGENTS.md](./packages/react-form/AGENTS.md) |
| `packages/react` | [AGENTS.md](./packages/react/AGENTS.md) |
| `packages/vue-blocks` | [AGENTS.md](./packages/vue-blocks/AGENTS.md) |
| `packages/vue-form` | [AGENTS.md](./packages/vue-form/AGENTS.md) |
| `packages/vue` | [AGENTS.md](./packages/vue/AGENTS.md) |

Slash commands: [`.cursor/commands/`](./.cursor/commands/).

## Getting started

Install Bun, then `bun install`. Human steps: [README.md](./README.md). Optional: Open in Container, then [`/onboarding`](./.cursor/commands/onboarding.md).

## Development

From the repository root:

```bash
turbo dev --filter=react
turbo dev --filter=vue
```

React Storybook: `http://127.0.0.1:3001`. Vue Storybook: `http://127.0.0.1:3002`.
