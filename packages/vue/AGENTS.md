# Vue Components

Package-local guidance for component work in `packages/vue` (`@pisagor/vue`). Canonical rules: [Vue Component Patterns](../../.cursor/rules/integrations/vue-component.mdc), [Component](../../.cursor/rules/integrations/component.mdc), and [Storybook](../../.cursor/rules/integrations/storybook.mdc).

## Package layout

- **Light:** `src/components/<name>/` — root barrel (`@pisagor/vue`) and `./*`
- **Heavy:** `src/<name>/` — dedicated exports only (not on the root barrel): `data-grid`, `data-table`, `phone-input`, `rich-text-editor`
- **Public hooks:** `src/hooks/` → `@pisagor/vue/hooks`
- **Private:** `src/internal/` — never on the package export map

## Heavy imports

Heavy components are **not** on the root `@pisagor/vue` barrel. Import them only from dedicated subpaths:

- `@pisagor/vue/data-grid`
- `@pisagor/vue/data-table`
- `@pisagor/vue/rich-text-editor`
- `@pisagor/vue/phone-input`

Charts and form fields live in separate packages: [`@pisagor/vue-charts`](../vue-charts), [`@pisagor/vue-form`](../vue-form) (and `/tanstack`).

Light components: prefer the root barrel (`import { Accordion } from "@pisagor/vue"`). Use a subpath (`@pisagor/vue/accordion`) only when you need a tight import graph.

## Design tokens (`styles.css`)

Global theme tokens are owned by [`@pisagor/tokens`](../tokens) (`@pisagor/tokens/styles`). This package’s [`src/styles.css`](./src/styles.css) is the Vue Tailwind entry: `tw-animate-css`, `@import "@pisagor/tokens/styles"`, typography plugin, and `@source` globs for this package and recipes.

Add or change global theme tokens in `@pisagor/tokens` — not here. Do **not** add component-only palettes to the theme (e.g. sidebar chrome, chart series). Scope those on the component (semantic utilities, or CSS under `[data-scope=…][data-part=…]`).

## Recipes

Do not author `tv()` in this package. Import from `@pisagor/recipes/<name>` (and `@pisagor/recipes/form-control` for shared shells). Change recipes in [`packages/recipes`](../recipes).

## Internal imports

Within this package, import sibling components with **relative paths** in component source files. **Stories** may use `@pisagor/vue` (light barrel) or `@pisagor/vue/<heavy>` like apps. Do not use `@pisagor/vue` / `@pisagor/vue/*` in non-story `.ts` under `packages/vue/src`. For cyclic dependencies (`input`, `input-group`, `textarea`), import the concrete `.ts` module instead of the folder barrel.

Package-private helpers live under [`src/internal/`](./src/internal/) — never on the package export map. Public composables live under [`src/hooks/`](./src/hooks/) (`@pisagor/vue/hooks`). Do not re-export internal helpers from component barrels.

Compound shared provide/inject lives in `<name>.context.ts` beside the main file — see [Vue Component Patterns → Context file](../../.cursor/rules/integrations/vue-component.mdc#context-file-namecontextts).

## Component taxonomy

Prefer placing new work in the lowest [Storybook taxonomy](../../.cursor/rules/integrations/storybook.mdc#meta) level (`primitive` → `standard` → `pattern`) that still solves the use case.

## Product naming

Nav, toolbar, select, overlay/modal, feedback, i18n, and `data-scope` query policy: [Component](../../.cursor/rules/integrations/component.mdc) (`@pisagor/vue/…` imports). Public API models: [Vue Component Patterns → Public API](../../.cursor/rules/integrations/vue-component.mdc#public-api).

## Storybook metadata

Same catalog fields as React — [Storybook](../../.cursor/rules/integrations/storybook.mdc):

- `parameters.docs.description.component` — user-visible Autodocs copy
- `parameters.metadata.api` / `taxonomy` — required; hidden metadata
- `parameters.metadata.aliases` — optional; hidden metadata

Mirror the React sibling story when porting. Do not put `api` / `taxonomy` / `aliases` under `docs`.

## Surface + form controls

Form-control shells default to `variant: "primary"`. Pass `variant="secondary"` (or `controlVariant` on Clipboard) when the control sits on a muted surface.
