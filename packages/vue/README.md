# @pisagor/vue

Accessible Vue components on Ark UI and Tailwind CSS v4.

```ts
import { Accordion } from "@pisagor/vue";
import "@pisagor/vue/styles";
```

The root `@pisagor/vue` barrel exports **light** components only. Heavy components (optional peers) are subpath-only:

- `@pisagor/vue/data-grid`
- `@pisagor/vue/charts`
- `@pisagor/vue/rich-text-editor`
- `@pisagor/vue/phone-input`

Styles import `@pisagor/tokens` and scan `@pisagor/styles` recipes.
