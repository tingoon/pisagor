# Pisagor

Multi-framework UI library: React and Vue components on Ark UI, Tailwind CSS v4, and TanStack Form fields.

| Package | Description |
| --- | --- |
| [`@pisagor/react`](./packages/react) | React UI |
| [`@pisagor/react-charts`](./packages/react-charts) | React charts (Recharts) |
| [`@pisagor/react-form`](./packages/react-form) | React form fields + TanStack |
| [`@pisagor/vue`](./packages/vue) | Vue UI |
| [`@pisagor/vue-charts`](./packages/vue-charts) | Vue charts |
| [`@pisagor/vue-form`](./packages/vue-form) | Vue form fields + TanStack |
| [`@pisagor/utils`](./packages/utils) | `cn` and shared helpers |
| [`@pisagor/tokens`](./packages/tokens) | Design tokens / Tailwind theme |
| [`@pisagor/recipes`](./packages/recipes) | Shared `tv()` class recipes |

Packages export TypeScript source. Use a bundler that compiles TS (Vite, etc.).

## Install

```bash
bun add @pisagor/react @pisagor/utils
```

Peers: `react` ^19, `react-dom` ^19, Tailwind CSS v4. For Vue: `vue` ^3.5 and `@pisagor/vue` instead of the React packages.

Optional: `@pisagor/react-charts` / `@pisagor/vue-charts`, `@pisagor/react-form` / `@pisagor/vue-form`.

The root `@pisagor/react` / `@pisagor/vue` barrels export **light** components only. Heavy components are subpath-only: `data-grid`, `data-table`, `rich-text-editor`, `phone-input`.

## Usage

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

## Docs

Storybook: [https://tingoon.github.io/pisagor/](https://tingoon.github.io/pisagor/) — [React](https://tingoon.github.io/pisagor/react/) · [Vue](https://tingoon.github.io/pisagor/vue/).

## License

[MIT](./LICENSE)
