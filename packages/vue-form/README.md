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

Depends on `@pisagor/vue`. Peers: `vue` ^3.5, `tailwindcss` ^4.

`PhoneField` and `RichTextEditorField` import `@pisagor/vue/phone-input` and `@pisagor/vue/rich-text-editor`.
