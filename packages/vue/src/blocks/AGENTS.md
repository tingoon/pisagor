# Blocks

Composed UI blocks under `src/blocks/`. Stories: [Storybook](../../../.cursor/rules/integrations/storybook.mdc).

One folder per block. Import as `@pisagor/vue/blocks/<name>`. Compose from sibling components and `@pisagor/vue/form` when a block is a form; do not re-export primitives.

Within this tree, import sibling blocks with **relative paths**. **Stories** may use `@pisagor/vue/blocks/<name>` like apps.
