# Pisagor

Multi-framework UI library: React and Vue components on Ark UI, Tailwind CSS v4, and TanStack Form fields.

| Package | Description |
| --- | --- |
| [`@pisagor/react`](./packages/react) | React UI (heavy via subpath) |
| [`@pisagor/react-charts`](./packages/react-charts) | React charts (Recharts) |
| [`@pisagor/react-form`](./packages/react-form) | React form fields + TanStack |
| [`@pisagor/vue`](./packages/vue) | Vue UI (heavy via subpath) |
| [`@pisagor/vue-charts`](./packages/vue-charts) | Vue charts |
| [`@pisagor/vue-form`](./packages/vue-form) | Vue form fields + TanStack |
| [`@pisagor/utils`](./packages/utils) | `cn` |
| [`@pisagor/tokens`](./packages/tokens) | Design tokens / Tailwind theme |
| [`@pisagor/recipes`](./packages/recipes) | Shared `tv()` class recipes |
| [`@pisagor/tsconfig`](./packages/tsconfig) | Shared TypeScript presets |

Packages export TypeScript source. Use a bundler that compiles TS (Vite, etc.).

## Install

```bash
bun add @pisagor/react @pisagor/utils
```

Peer dependencies: `react` ^19, `react-dom` ^19, Tailwind CSS v4 (Vue: `vue` ^3.5 + Tailwind CSS v4). Optional packages: `@pisagor/react-charts` / `@pisagor/vue-charts`, `@pisagor/react-form` / `@pisagor/vue-form`. Remaining heavy subpath deps (TipTap, table, phone, …) ship with the UI package.

The root `@pisagor/react` / `@pisagor/vue` barrels export **light** components only. Heavy components are subpath-only: `data-grid`, `data-table`, `rich-text-editor`, `phone-input`.

```tsx
import { Button, Provider } from "@pisagor/react";
import "@pisagor/react/styles";

export function App() {
  return (
    <Provider>
      <Button>Save</Button>
    </Provider>
  );
}
```

Import styles once in the app CSS (Tailwind v4). Point `@source` at the package if your scanner does not pick up workspace files:

```css
@import "tailwindcss";
@import "@pisagor/react/styles";
```

## Development

Requires [Bun](https://bun.sh).

```bash
bun install
turbo dev --filter=react-storybook
# optional: turbo dev --filter=vue-storybook
```

React Storybook: [http://127.0.0.1:4001](http://127.0.0.1:4001).
Vue Storybook: [http://127.0.0.1:4002](http://127.0.0.1:4002).

Optional: [Docker](https://www.docker.com) + VS Code [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) — **Open in Container**, then `/onboarding`.

```bash
bunx biome ci
turbo type-check
bun run knip
```

## License

[MIT](./LICENSE) — Copyright (c) 2026 Pisagor contributors.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Security reports: [SECURITY.md](./SECURITY.md).
