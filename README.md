# Pisagor

Multi-framework UI library: React, Vue, Solid, Svelte, and Astro components on Ark UI (client frameworks), Tailwind CSS v4, and TanStack Form fields.

| Package | Description |
| --- | --- |
| [`@pisagor/react`](./packages/react) | React UI |
| [`@pisagor/react-form`](./packages/react-form) | React form fields + TanStack |
| [`@pisagor/vue`](./packages/vue) | Vue UI |
| [`@pisagor/vue-form`](./packages/vue-form) | Vue form fields + TanStack |
| [`@pisagor/solid`](./packages/solid) | Solid UI |
| [`@pisagor/solid-form`](./packages/solid-form) | Solid form fields + TanStack |
| [`@pisagor/svelte`](./packages/svelte) | Svelte UI |
| [`@pisagor/svelte-form`](./packages/svelte-form) | Svelte form fields + TanStack |
| [`@pisagor/astro`](./packages/astro) | Static Astro UI |
| [`@pisagor/props`](./packages/props) | Shared prop type contracts |
| [`@pisagor/utils`](./packages/utils) | `cn` and shared helpers |
| [`@pisagor/tokens`](./packages/tokens) | Design tokens / Tailwind theme |
| [`@pisagor/recipes`](./packages/recipes) | Shared `tv()` class recipes |
| [`@pisagor/mcp`](./packages/mcp) | MCP server for agents |

Packages export TypeScript source (Astro components are `.astro`). Use a bundler that compiles TS (Vite, etc.).

## Install

```bash
bun add @pisagor/react
# or @pisagor/vue / @pisagor/solid / @pisagor/svelte / @pisagor/astro
```

Peers (pick the matching framework): `react` ^19 + `react-dom` ^19, `vue` ^3.5, `solid-js` ^1, `svelte` ^5, or `astro` ^7 — plus Tailwind CSS v4.

Optional form packages: `@pisagor/react-form`, `@pisagor/vue-form`, `@pisagor/solid-form`, `@pisagor/svelte-form` (no Astro form package).

The root barrels for React / Vue / Solid / Svelte export **light** components only. Heavy components are subpath-only: `data-grid`, `data-table`, `rich-text-editor`, `phone-input`. Astro is a static subset on the same light barrel (`@pisagor/astro`).

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

Import styles once in the app CSS (Tailwind v4). Framework entries pull tokens, recipe scanning, and package sources — no extra `@source` for the library:

```css
@import "tailwindcss";
@import "@pisagor/react/styles";
```

Swap the package name for Vue, Solid, Svelte, or Astro (`@pisagor/vue/styles`, …). Form packages (`@pisagor/*-form`) are logic wrappers — they have no styles entry.

## Docs

Documentation site: [https://tingoon.github.io/pisagor/](https://tingoon.github.io/pisagor/) (GitHub Pages). Per-framework routes: `/react`, `/vue`, `/solid`, `/svelte`, `/astro`.

```bash
bun --filter docs dev
```

## License

[MIT](./LICENSE)
