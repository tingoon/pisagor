# @pisagor/svelte

Accessible Svelte components on Ark UI and Tailwind CSS v4.

```ts
import { Button, Provider } from "@pisagor/svelte";
import "@pisagor/svelte/styles";
```

Peers: `svelte` ^5, `tailwindcss` ^4.

Uses [`@ark-ui/svelte`](https://www.npmjs.com/package/@ark-ui/svelte) pinned to the latest published version (`^5.24.2`). That package currently lags other Ark UI framework packages (react/vue/solid at `^5.39.2`); the lag is upstream.

The root `@pisagor/svelte` barrel exports **light** components only. Heavy components are subpath-only:

- `@pisagor/svelte/data-grid`
- `@pisagor/svelte/data-table`
- `@pisagor/svelte/rich-text-editor`
- `@pisagor/svelte/phone-input`

Form fields: [`@pisagor/svelte-form`](../svelte-form) and `@pisagor/svelte-form/tanstack`. Hooks: `@pisagor/svelte/hooks`. Utils (`createContext`, …): `@pisagor/svelte/utils`.

See the [root README](../../README.md) for Tailwind setup.

Agents: prefer [`@pisagor/mcp`](../mcp) (`bunx @pisagor/mcp`).
