# Form Package

Package-local guidance for field work in `packages/react-form`.

## Commands

From the repository root:

```bash
turbo type-check --filter=@pisagor/react-form
turbo dev --filter=react-storybook
```

Field stories run in React Storybook (`http://127.0.0.1:3001`) under `Forms/Fields/…`. The TanStack integration demo is `Forms/TanStack Form`.

## Layout

Fields under [`src/fields/`](./src/fields/) and [`src/tanstack/fields/`](./src/tanstack/fields/) follow the folder layout, `#region` blocks, and public API rules in [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc). `src/tanstack/fields/*` components skip stories — they are thin `useFieldContext` wrappers over their `src/fields/*` counterpart.

## Exports

| Path | Role |
| ---- | ---- |
| `@pisagor/react-form` | Standalone fields (`src/fields/index.ts`) |
| `@pisagor/react-form/tanstack` | `useAppForm`, connected fields, helpers |

## Heavy field peers

`PhoneField` and `RichTextEditorField` depend on heavy `@pisagor/react` subpaths. Consumers must install the optional peers listed in [README](./README.md#peer-dependencies).

## Internal imports

Within this package, import sibling fields with **relative paths** to the concrete module file (e.g. `../../fields/text-field/text-field`), not the folder barrel. **Stories** may use `@pisagor/react-form` / `@pisagor/react-form/tanstack` like apps — see [Storybook](../../.cursor/rules/integrations/storybook.mdc).
