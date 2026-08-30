# Form fields

Form fields and TanStack Form helpers for Vue.

## Imports

```ts
import { TextField } from "@pisagor/vue/form";
import { useAppForm } from "@pisagor/vue/form/tanstack";
```

| Export | Path | Contents |
| ------ | ---- | -------- |
| Fields | `@pisagor/vue/form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/vue/form/tanstack` | `useAppForm`, connected field components, form helpers |

## Peer dependencies

- `vue` ^3.5
- `@tanstack/vue-form` ^1 (required only for `@pisagor/vue/form/tanstack`)

| Field | UI import | Optional peers |
| ----- | --------- | -------------- |
| `PhoneField` | `@pisagor/vue/phone-input` | none |
| `RichTextEditorField` | `@pisagor/vue/rich-text-editor` | `@tiptap/vue-3`, `@tiptap/starter-kit` |

See [heavy imports](../../AGENTS.md#heavy-imports) for the full list.
