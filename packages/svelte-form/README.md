# @pisagor/svelte-form

Form fields and TanStack Form integration for Pisagor Svelte. Logic wrappers over `@pisagor/svelte`.

```ts
import { TextField } from "@pisagor/svelte-form";
import { createAppForm } from "@pisagor/svelte-form/tanstack";
```

| Entry | Path | Role |
| ----- | ---- | ---- |
| Fields | `@pisagor/svelte-form` | Standalone field components (`TextField`, `SelectField`, …) |
| TanStack | `@pisagor/svelte-form/tanstack` | `createAppForm`, connected field components, form helpers |

Peers: `@pisagor/svelte`, `svelte` ^5. Optional peer: `@tanstack/svelte-form` (for `./tanstack` only).

```bash
bun add @pisagor/svelte @pisagor/svelte-form
# optional — required only for ./tanstack
bun add @tanstack/svelte-form
```

`PhoneField` and `RichTextEditorField` import `@pisagor/svelte/phone-input` and `@pisagor/svelte/rich-text-editor`.
