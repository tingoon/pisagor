# Vue Components

Package-local guidance for `packages/vue` (`@pisagor/vue`). Uses `@pisagor/styles` recipes and `@pisagor/tokens` via `./styles`.

## Heavy imports

Heavy components are **not** on the root `@pisagor/vue` barrel. Import them only from dedicated subpaths; install optional peers when you use these:

- `@pisagor/vue/data-grid` — `@tanstack/vue-table`, `@tanstack/vue-virtual`
- `@pisagor/vue/charts`
- `@pisagor/vue/rich-text-editor` — `@tiptap/vue-3`, `@tiptap/starter-kit`
- `@pisagor/vue/phone-input`

Light components: prefer the root barrel (`import { Accordion } from "@pisagor/vue"`). Use a subpath (`@pisagor/vue/accordion`) only when you need a tight import graph.

## Internal imports

Within this package, import sibling components with relative paths. Apps and stories use `@pisagor/vue` (light barrel) or `@pisagor/vue/<heavy>`.
