# Form Package

Package-local guidance for field work in `packages/react-form`.

## Layout

Fields under [`src/fields/`](./src/fields/) and [`src/tanstack/fields/`](./src/tanstack/fields/) follow the folder layout, `#region` blocks, and public API rules in [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc). `src/tanstack/fields/*` components skip stories — they are thin `useFieldContext` wrappers over their `src/fields/*` counterpart.

## Internal imports

Within this package, import sibling fields with **relative paths** to the concrete module file (e.g. `../../fields/text-field/text-field`), not the folder barrel. **Stories** may use `@pisagor/react-form` / `@pisagor/react-form/tanstack` like apps — see [Storybook](../../.cursor/rules/integrations/storybook.mdc).
