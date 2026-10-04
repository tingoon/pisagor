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

Peers: `@pisagor/solid`, `solid-js` ^1, `tailwindcss` ^4. Optional peer: `@tanstack/solid-form` (for `./tanstack` only).

```bash
bun add @pisagor/solid @pisagor/solid-form
# optional — required only for ./tanstack
bun add @tanstack/solid-form
```

`PhoneField` and `RichTextEditorField` import `@pisagor/solid/phone-input` and `@pisagor/solid/rich-text-editor`.
