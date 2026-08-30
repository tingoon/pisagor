# Pisagor

Multi-framework UI library: React and Vue components on Ark UI, Tailwind CSS v4, and TanStack Form fields.

| Package | Description |
| --- | --- |
| [`@pisagor/react`](./packages/react) | Components, form fields, blocks (`@pisagor/react`, heavy via subpath) |
| [`@pisagor/vue`](./packages/vue) | Vue components, form fields, blocks (`@pisagor/vue`, heavy via subpath) |
| [`@pisagor/utils`](./packages/utils) | `cn` |
| [`@pisagor/tokens`](./packages/tokens) | Design tokens / Tailwind theme |
| [`@pisagor/recipes`](./packages/recipes) | Shared `tv()` class recipes |
| [`@pisagor/tsconfig`](./packages/tsconfig) | Shared TypeScript presets |

Packages export TypeScript source. Use a bundler that compiles TS (Vite, etc.).

## Install

```bash
bun add @pisagor/react @pisagor/utils
```

Peer dependencies: `react` ^19, `react-dom` ^19, Tailwind CSS v4 (Vue: `vue` ^3.5 + Tailwind CSS v4). Heavy subpath deps (TanStack, TipTap, recharts, Phosphor, …) ship with the package.

The root `@pisagor/react` / `@pisagor/vue` barrels export **light** components only. Heavy components are subpath-only: `data-grid`, `data-table`, `charts`, `rich-text-editor`, `phone-input`.

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

React Storybook: [http://127.0.0.1:3001](http://127.0.0.1:3001).  
Vue Storybook: [http://127.0.0.1:3002](http://127.0.0.1:3002).

Optional: [Docker](https://www.docker.com) + VS Code [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) — **Open in Container**, then `/onboarding`.

```bash
bunx biome ci
turbo type-check
bun run knip
```

## License

[MIT](./LICENSE) — Copyright (c) 2026 Tingoon contributors.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Security reports: [SECURITY.md](./SECURITY.md).
