# @pisagor/solid-form

Form fields and TanStack Form integration for Pisagor Solid.

```ts
import { TextField } from "@pisagor/solid-form";
import { useAppForm } from "@pisagor/solid-form/tanstack";
import "@pisagor/solid/styles";
import "@pisagor/solid-form/styles";
```

| Entry | Path | Role |
| ----- | ---- | ---- |
| Fields | `@pisagor/solid-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/solid-form/tanstack` | `useAppForm`, connected field components, form helpers |

Depends on `@pisagor/solid`. Peers: `solid-js` ^1, `tailwindcss` ^4.

`PhoneField` and `RichTextEditorField` import `@pisagor/solid/phone-input` and `@pisagor/solid/rich-text-editor`.
