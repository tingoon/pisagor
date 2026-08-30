# Form fields

Package-local guidance for field work under `packages/vue/src/form`.

## Commands

From the repository root:

```bash
turbo type-check --filter=@pisagor/vue
turbo dev --filter=vue-storybook
```

Field stories run in Vue Storybook (`http://127.0.0.1:3002`) under `Forms/Fields/…`. The TanStack integration demo is `Forms/TanStack Form`.

## Layout

Fields under [`fields/`](./fields/) and [`tanstack/fields/`](./tanstack/fields/) follow the same folder layout as `@pisagor/react/form`. `tanstack/fields/*` components skip stories — they are thin field-context wrappers over their `fields/*` counterpart.

`@tanstack/vue-form` does not ship `createFormHook`. This package implements an equivalent in [`tanstack/create-form-hook.ts`](./tanstack/create-form-hook.ts) with `provide` / `inject` contexts.

## Exports

| Path | Role |
| ---- | ---- |
| `@pisagor/vue/form` | Standalone fields (`fields/index.ts`) |
| `@pisagor/vue/form/tanstack` | `useAppForm`, connected fields, helpers |

## Heavy fields

`PhoneField` and `RichTextEditorField` depend on heavy `@pisagor/vue` subpaths (`phone-input`, `rich-text-editor`).

## Internal imports

Import sibling fields with **relative paths** to the concrete module file, not the folder barrel. **Stories** may use `@pisagor/vue/form` / `@pisagor/vue/form/tanstack` like apps — see [Storybook](../../../.cursor/rules/integrations/storybook.mdc).
