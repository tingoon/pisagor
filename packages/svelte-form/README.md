# @pisagor/svelte-form

Form fields and TanStack Form integration for Pisagor Svelte.

```ts
import { TextField } from "@pisagor/svelte-form";
import { createAppForm } from "@pisagor/svelte-form/tanstack";
import "@pisagor/svelte/styles";
import "@pisagor/svelte-form/styles";
```

| Entry | Path | Role |
| ----- | ---- | ---- |
| Fields | `@pisagor/svelte-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/svelte-form/tanstack` | `createAppForm`, connected field components, form helpers |

Depends on `@pisagor/svelte`. Peers: `svelte` ^5, `tailwindcss` ^4.

`PhoneField` and `RichTextEditorField` import `@pisagor/svelte/phone-input` and `@pisagor/svelte/rich-text-editor`.
