# @pisagor/vue-form

Form fields and TanStack Form integration for Pisagor Vue.

```ts
import { TextField } from "@pisagor/vue-form";
import { useAppForm } from "@pisagor/vue-form/tanstack";
import "@pisagor/vue/styles";
import "@pisagor/vue-form/styles";
```

| Entry | Path | Role |
| ----- | ---- | ---- |
| Fields | `@pisagor/vue-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/vue-form/tanstack` | `useAppForm`, connected field components, form helpers |

Peers: `@pisagor/vue`, `vue` ^3.5, `tailwindcss` ^4. Optional peer: `@tanstack/vue-form` (for `./tanstack` only).

```bash
bun add @pisagor/vue @pisagor/vue-form
# optional — required only for ./tanstack
bun add @tanstack/vue-form
```

`PhoneField` and `RichTextEditorField` import `@pisagor/vue/phone-input` and `@pisagor/vue/rich-text-editor`.
