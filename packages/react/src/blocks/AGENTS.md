# Blocks

Composed UI blocks under `src/blocks/`. Canonical layout: [React Component Patterns](../../../.cursor/rules/integrations/react-component.mdc). Stories: [Storybook](../../../.cursor/rules/integrations/storybook.mdc).

One folder per block. Import as `@pisagor/react/blocks/<name>`. Compose from sibling components and `@pisagor/react/form` when a block is a form; do not re-export primitives.

Within this tree, import sibling blocks with **relative paths**. **Stories** may use `@pisagor/react/blocks/<name>` like apps.
