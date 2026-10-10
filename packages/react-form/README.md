# @pisagor/react-form

Form fields and TanStack Form integration for Pisagor React. Logic wrappers over `@pisagor/react`.

```ts
import { TextField } from "@pisagor/react-form";
import { useAppForm } from "@pisagor/react-form/tanstack";
```

| Entry | Path | Role |
| ----- | ---- | ---- |
| Fields | `@pisagor/react-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/react-form/tanstack` | `useAppForm`, connected field components, form helpers |

Peers: `@pisagor/react`, `react` ^19, `react-dom` ^19. Optional peer: `@tanstack/react-form` (for `./tanstack` only).

```bash
bun add @pisagor/react @pisagor/react-form
# optional — required only for ./tanstack
bun add @tanstack/react-form
```

`PhoneField` and `RichTextEditorField` import `@pisagor/react/phone-input` and `@pisagor/react/rich-text-editor`.
