# @pisagor/react-form

Form fields and TanStack Form integration for Pisagor React.

```ts
import { TextField } from "@pisagor/react-form";
import { useAppForm } from "@pisagor/react-form/tanstack";
import "@pisagor/react/styles";
import "@pisagor/react-form/styles";
```

| Entry | Path | Role |
| ----- | ---- | ---- |
| Fields | `@pisagor/react-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/react-form/tanstack` | `useAppForm`, connected field components, form helpers |

Depends on `@pisagor/react`. Peers: `react` ^19, `react-dom` ^19, `tailwindcss` ^4.

`PhoneField` and `RichTextEditorField` import `@pisagor/react/phone-input` and `@pisagor/react/rich-text-editor`.
