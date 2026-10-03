# @pisagor/solid

Accessible Solid components on Ark UI and Tailwind CSS v4.

```ts
import { Button, Provider } from "@pisagor/solid";
import "@pisagor/solid/styles";
```

Peers: `solid-js` ^1, `tailwindcss` ^4.

Built on [`@ark-ui/solid`](https://www.npmjs.com/package/@ark-ui/solid) (currently pinned to `^5.39.2`).

The root `@pisagor/solid` barrel exports **light** components only. Heavy components are subpath-only:

- `@pisagor/solid/data-grid`
- `@pisagor/solid/data-table`
- `@pisagor/solid/rich-text-editor`
- `@pisagor/solid/phone-input`

Form fields: [`@pisagor/solid-form`](../solid-form) and `@pisagor/solid-form/tanstack`. Hooks: `@pisagor/solid/hooks`. Utils (`createContext`, …): `@pisagor/solid/utils`.

See the [root README](../../README.md) for Tailwind setup.

Agents: prefer [`@pisagor/mcp`](../mcp) (`bunx @pisagor/mcp`). This package also ships Intent skills under `skills/`.
