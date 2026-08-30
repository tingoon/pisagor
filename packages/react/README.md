# @pisagor/react

Accessible React components on Ark UI and Tailwind CSS v4.

```ts
import { Button, Provider } from "@pisagor/react";
import "@pisagor/react/styles";
```

The root `@pisagor/react` barrel exports **light** components only. Heavy components (optional peers) are subpath-only:

- `@pisagor/react/data-grid` — `@tanstack/react-table`, `@tanstack/react-virtual`
- `@pisagor/react/data-table` — `@tanstack/react-table`
- `@pisagor/react/charts` — `recharts`
- `@pisagor/react/rich-text-editor` — `@tiptap/react`, `@tiptap/starter-kit`
- `@pisagor/react/phone-input` — `react-phone-number-input`

Form fields: `@pisagor/react/form` and `@pisagor/react/form/tanstack`. Composed blocks: `@pisagor/react/blocks`. Hooks: `@pisagor/react/hooks`.

See the [root README](../../README.md) for peers and Tailwind setup.
