# Pisagor

Multi-framework UI library: React and Vue components on Ark UI, Tailwind CSS v4, and TanStack Form fields.

| Package | Description |
| --- | --- |
| [`@pisagor/react`](./packages/react) | Components (`@pisagor/react/button`, …) |
| [`@pisagor/vue`](./packages/vue) | Vue components (Accordion for now) |
| [`@pisagor/react-form`](./packages/react-form) | Fields and TanStack Form helpers |
| [`@pisagor/react-hooks`](./packages/react-hooks) | Shared React hooks |
| [`@pisagor/vue-composables`](./packages/vue-composables) | Shared Vue composables |
| [`@pisagor/utils`](./packages/utils) | `cn` |
| [`@pisagor/tokens`](./packages/tokens) | Design tokens / Tailwind theme |
| [`@pisagor/styles`](./packages/styles) | Shared `tv()` class recipes |
| [`@pisagor/react-blocks`](./packages/react-blocks) | Composed blocks (empty until filled) |

Packages export TypeScript source. Use a bundler that compiles TS (Vite, etc.).

## Install

```bash
bun add @pisagor/react @pisagor/react-hooks @pisagor/utils
```

Peer dependencies: `react` ^19, `react-dom` ^19, `@phosphor-icons/react` ^2, Tailwind CSS v4.

Heavy components need extra optional peers: `chart` → `recharts`; `data-grid` → `@tanstack/react-table` + `@tanstack/react-virtual`; `rich-text-editor` → `@tiptap/react` + `@tiptap/starter-kit`; `phone-input` → `react-phone-number-input`.

```tsx
import { Button } from "@pisagor/react/button";
import { Provider } from "@pisagor/react/provider";
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

There is no root `@pisagor/react` barrel — import each component path.

## Development

Requires [Bun](https://bun.sh) 1.3.14 (see `packageManager` in `package.json`).

```bash
bun install
turbo dev --filter=react
# optional: turbo dev --filter=vue
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
