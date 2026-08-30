# Form fields

Package-local guidance for field work under `packages/react/src/form`.

## Commands

From the repository root:

```bash
turbo type-check --filter=@pisagor/react
turbo dev --filter=react-storybook
```

Field stories run in React Storybook (`http://127.0.0.1:3001`) under `Forms/Fields/…`. The TanStack integration demo is `Forms/TanStack Form`.

## Layout

Fields under [`fields/`](./fields/) and [`tanstack/fields/`](./tanstack/fields/) follow the folder layout, `#region` blocks, and public API rules in [React Component Patterns](../../../.cursor/rules/integrations/react-component.mdc). `tanstack/fields/*` components skip stories — they are thin `useFieldContext` wrappers over their `fields/*` counterpart.

## Exports

| Path | Role |
| ---- | ---- |
| `@pisagor/react/form` | Standalone fields (`fields/index.ts`) |
| `@pisagor/react/form/tanstack` | `useAppForm`, connected fields, helpers |

## Heavy fields

`PhoneField` and `RichTextEditorField` depend on heavy `@pisagor/react` subpaths (`phone-input`, `rich-text-editor`).

## Internal imports

Import sibling fields with **relative paths** to the concrete module file (e.g. `../../fields/text-field/text-field`), not the folder barrel. **Stories** may use `@pisagor/react/form` / `@pisagor/react/form/tanstack` like apps — see [Storybook](../../../.cursor/rules/integrations/storybook.mdc).
