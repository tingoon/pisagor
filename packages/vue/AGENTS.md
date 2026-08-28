# Vue Components

Package-local guidance for `packages/vue` (`@pisagor/vue`). Canonical rules: [Vue Component Patterns](../../.cursor/rules/integrations/vue-component.mdc) and [Storybook](../../.cursor/rules/integrations/storybook.mdc). Uses `@pisagor/recipes` and `@pisagor/tokens` via `./styles`.

## Heavy imports

Heavy components are **not** on the root `@pisagor/vue` barrel. Import them only from dedicated subpaths; install optional peers when you use these:

- `@pisagor/vue/data-grid` — `@tanstack/vue-table`, `@tanstack/vue-virtual`
- `@pisagor/vue/charts`
- `@pisagor/vue/rich-text-editor` — `@tiptap/vue-3`, `@tiptap/starter-kit`
- `@pisagor/vue/phone-input`

Light components: prefer the root barrel (`import { Accordion } from "@pisagor/vue"`). Use a subpath (`@pisagor/vue/accordion`) only when you need a tight import graph.

## Design tokens (`styles.css`)

Global theme tokens are owned by [`@pisagor/tokens`](../tokens) (`@pisagor/tokens/styles`). This package’s [`src/styles.css`](./src/styles.css) is the Vue Tailwind entry: `tw-animate-css`, `@import "@pisagor/tokens/styles"`, typography plugin, and `@source` globs for this package and recipes.

Add or change global theme tokens in `@pisagor/tokens` — not here.

## Recipes

Do not author `tv()` in this package. Import from `@pisagor/recipes/<name>` (and `@pisagor/recipes/form-control` for shared shells). Change recipes in [`packages/recipes`](../recipes).

## Internal imports

Within this package, import sibling components with **relative paths** in component source files. **Stories** may use `@pisagor/vue` (light barrel) or `@pisagor/vue/<heavy>` like apps. Do not use `@pisagor/vue` / `@pisagor/vue/*` in non-story `.ts` under `packages/vue/src`.

Package-private helpers live under [`src/internal/`](./src/internal/). Shared composables live under [`src/internal/hooks/`](./src/internal/hooks/) (`@pisagor/vue/hooks`). Do not re-export internal helpers from component barrels.

Form fields live under [`src/form/`](./src/form/) (`@pisagor/vue/form`, `@pisagor/vue/form/tanstack`). Composed blocks live under [`src/blocks/`](./src/blocks/) (`@pisagor/vue/blocks`).

## Storybook metadata

Same catalog fields as React — [Storybook](../../.cursor/rules/integrations/storybook.mdc):

- `parameters.docs.description.component` — user-visible Autodocs copy
- `parameters.metadata.api` / `taxonomy` — required; hidden metadata
- `parameters.metadata.aliases` — optional; hidden metadata

Mirror the React sibling story when porting. Do not put `api` / `taxonomy` / `aliases` under `docs`.

## Surface + form controls

Form-control shells default to `variant: "primary"`. Pass `variant="secondary"` (or `controlVariant` on Clipboard) when the control sits on a muted surface.
