# Blocks Package

Package-local guidance for composed blocks in `packages/react-blocks` (`@pisagor/react-blocks`). Canonical layout and public API: [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc). Stories: [Storybook](../../.cursor/rules/integrations/storybook.mdc).

## Layout

One folder per block under [`src/components/`](./src/components/). When the first block lands, add a `"./*"` export map and import as `@pisagor/react-blocks/<name>`. Compose from `@pisagor/react` (and `@pisagor/react-form` when a block is a form); do not re-export primitives.

## Internal imports

Within this package, import sibling blocks with **relative paths**. **Stories** may use `@pisagor/react-blocks/<name>` like apps.
