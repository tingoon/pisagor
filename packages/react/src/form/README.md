# Form fields

Form fields and TanStack Form helpers.

## Imports

```ts
import { TextField } from "@pisagor/react/form";
import { useAppForm } from "@pisagor/react/form/tanstack";
```

| Export | Path | Contents |
| ------ | ---- | -------- |
| Fields | `@pisagor/react/form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/react/form/tanstack` | `useAppForm`, connected field components, form helpers |

## Peer dependencies

- `react` ^19
- `@tanstack/react-form` ^1 (required only for `@pisagor/react/form/tanstack`)

| Field | UI import | Optional peers |
| ----- | --------- | -------------- |
| `PhoneField` | `@pisagor/react/phone-input` | `react-phone-number-input` |
| `RichTextEditorField` | `@pisagor/react/rich-text-editor` | `@tiptap/react`, `@tiptap/starter-kit` |

See [heavy imports](../../AGENTS.md#heavy-imports) for the full list.
