# @pisagor/react

Accessible React components on Ark UI and Tailwind CSS v4.

```ts
import { Button, Provider } from "@pisagor/react";
import "@pisagor/react/styles";
```

Peers: `react` ^19, `react-dom` ^19, `tailwindcss` ^4.

The root `@pisagor/react` barrel exports **light** components only. Heavy components are subpath-only:

- `@pisagor/react/data-grid`
- `@pisagor/react/data-table`
- `@pisagor/react/rich-text-editor`
- `@pisagor/react/phone-input`

Charts: [`@pisagor/react-charts`](../react-charts). Form fields: [`@pisagor/react-form`](../react-form) and `@pisagor/react-form/tanstack`. Hooks: `@pisagor/react/hooks`. Utils (`createContext`, …): `@pisagor/react/utils`.

See the [root README](../../README.md) for Tailwind setup.
