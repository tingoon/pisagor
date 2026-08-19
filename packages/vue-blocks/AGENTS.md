# Blocks Package

Package-local guidance for composed blocks in `packages/vue-blocks` (`@pisagor/vue-blocks`).

## Layout

One folder per block under [`src/components/`](./src/components/). When the first block lands, add a `"./*"` export map and import as `@pisagor/vue-blocks/<name>`. Compose from `@pisagor/vue` (and `@pisagor/vue-form` when a block is a form); do not re-export primitives.

## Internal imports

Within this package, import sibling blocks with **relative paths**. **Stories** may use `@pisagor/vue-blocks/<name>` like apps.
