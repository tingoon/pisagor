# @pisagor/react-form

Form fields and TanStack Form helpers.

## Imports

```ts
import { TextField } from "@pisagor/react-form";
import { useAppForm } from "@pisagor/react-form/tanstack";
```

Public entry points:

| Export | Path | Contents |
| ------ | ---- | -------- |
| Fields | `@pisagor/react-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/react-form/tanstack` | `useAppForm`, connected field components, form helpers |

There is no root barrel beyond these two paths. Import fields from `@pisagor/react-form`, not deep paths under `src/`.

## Peer dependencies

Install alongside this package:

- `react` ^19
- `@tanstack/react-form` ^1 (required only for `@pisagor/react-form/tanstack`)

Fields compose `@pisagor/react`. Some fields pull in **heavy** UI subpaths — install the matching optional peers when you use them:

| Field | UI import | Optional peers |
| ----- | --------- | -------------- |
| `PhoneField` | `@pisagor/react/phone-input` | `react-phone-number-input` |
| `RichTextEditorField` | `@pisagor/react/rich-text-editor` | `@tiptap/react`, `@tiptap/starter-kit` |

See [`@pisagor/react` heavy imports](../react-ui/AGENTS.md#heavy-imports) for the full list.
