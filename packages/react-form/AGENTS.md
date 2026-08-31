# React Form

Form fields and TanStack Form integration for `@pisagor/react-form`.

## Commands

```bash
turbo type-check --filter=@pisagor/react-form
turbo dev --filter=react-storybook
```

Field stories run in React Storybook (`http://127.0.0.1:4001`) under `Forms/Fields/…`. The TanStack integration demo is `Forms/TanStack Form`.

## Layout

- `src/fields/` — standalone fields (`@pisagor/react-form`)
- `src/tanstack/` — `useAppForm`, connected fields (`@pisagor/react-form/tanstack`)
- `src/internal/` — package-private helpers

`tanstack/fields/*` skip stories — thin `useFieldContext` wrappers over `fields/*`.

Follow folder layout, `#region` blocks, and public API rules in [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc).

## Conventions

Import light UI from `@pisagor/react`; heavies from `@pisagor/react/phone-input` and `@pisagor/react/rich-text-editor`. Sibling fields: relative paths to the concrete module file, not the folder barrel. Stories may use package exports — see [Storybook](../../.cursor/rules/integrations/storybook.mdc).
