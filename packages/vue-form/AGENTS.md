# Form Package

Package-local guidance for field work in `packages/vue-form` (`@pisagor/vue-form`).

## Layout

Fields under [`src/fields/`](./src/fields/) and [`src/tanstack/fields/`](./src/tanstack/fields/) will follow the same folder layout as `@pisagor/react-form`. `src/tanstack/fields/*` components skip stories — they are thin field-context wrappers over their `src/fields/*` counterpart.

## Internal imports

Within this package, import sibling fields with **relative paths** to the concrete module file, not the folder barrel. **Stories** may use `@pisagor/vue-form` / `@pisagor/vue-form/tanstack` like apps.
