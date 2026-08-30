# @pisagor/vue

Accessible Vue components on Ark UI and Tailwind CSS v4.

```ts
import { Accordion } from "@pisagor/vue";
import "@pisagor/vue/styles";
```

The root `@pisagor/vue` barrel exports **light** components only. Heavy components are subpath-only:

- `@pisagor/vue/data-grid` — `@tanstack/vue-table`, `@tanstack/vue-virtual`
- `@pisagor/vue/data-table` — `@tanstack/vue-table`
- `@pisagor/vue/charts` — no optional peer
- `@pisagor/vue/rich-text-editor` — `@tiptap/vue-3`, `@tiptap/starter-kit`
- `@pisagor/vue/phone-input` — no optional peer

Form fields: `@pisagor/vue/form` and `@pisagor/vue/form/tanstack`. Composed blocks: `@pisagor/vue/blocks`. Hooks: `@pisagor/vue/hooks`.

See the [root README](../../README.md) for peers and Tailwind setup.
