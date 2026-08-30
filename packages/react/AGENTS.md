# React Components

Package-local guidance for component work in `packages/react` (`@pisagor/react`). Canonical rules: [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc), [Component](../../.cursor/rules/integrations/component.mdc), and [Storybook](../../.cursor/rules/integrations/storybook.mdc).

## Package layout

- **Light:** `src/components/<name>/` — root barrel (`@pisagor/react`) and `./*`
- **Heavy:** `src/<name>/` — dedicated exports only (not on the root barrel): `charts`, `data-grid`, `data-table`, `phone-input`, `rich-text-editor`
- **Public hooks:** `src/hooks/` → `@pisagor/react/hooks`
- **Private:** `src/internal/` — never on the package export map

## Heavy imports

Heavy components are **not** on the root `@pisagor/react` barrel. Import them only from dedicated subpaths:

- `@pisagor/react/data-grid`
- `@pisagor/react/data-table`
- `@pisagor/react/charts`
- `@pisagor/react/rich-text-editor`
- `@pisagor/react/phone-input`

Light components: prefer the root barrel (`import { Button } from "@pisagor/react"`). Use a subpath (`@pisagor/react/button`) only when you need a tight import graph.

## Design tokens (`styles.css`)

Global theme tokens are owned by [`@pisagor/tokens`](../tokens) (`@pisagor/tokens/styles`). This package’s [`src/styles.css`](./src/styles.css) is the React Tailwind entry: `tw-animate-css`, `@import "@pisagor/tokens/styles"`, typography plugin, and `@source` globs for this package and recipes.

Add or change global theme tokens in `@pisagor/tokens` — not here. Do **not** add component-only palettes to the theme (e.g. sidebar chrome, chart series). Scope those on the component (semantic utilities, or CSS under `[data-scope=…][data-part=…]` such as Chart’s `chart-series.css`).

## Recipes

Do not author `tv()` in this package. Import from `@pisagor/recipes/<name>` (and `@pisagor/recipes/form-control` for shared shells). Change recipes in [`packages/recipes`](../recipes).

## Internal imports

Within this package, import sibling components with **relative paths** (`../button`, `../scroll-area`) in component source files. **Stories** may use `@pisagor/react` (light barrel) or `@pisagor/react/<heavy>` like apps. Do not use `@pisagor/react` / `@pisagor/react/*` in non-story `.tsx` / `.ts` under `packages/react/src`. For cyclic dependencies (`input`, `input-group`, `textarea`), import the concrete `.tsx` module instead of the folder barrel.

Package-private helpers live under [`src/internal/`](./src/internal/) — never on the package export map. Public hooks live under [`src/hooks/`](./src/hooks/) (`@pisagor/react/hooks`). Do not re-export internal helpers from component barrels.

Form fields live under [`src/form/`](./src/form/) (`@pisagor/react/form`, `@pisagor/react/form/tanstack`). [`src/blocks/`](./src/blocks/) (`@pisagor/react/blocks`) is an empty scaffold (`.gitkeep` + barrel); add the first block folder when needed — [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc), [Storybook](../../.cursor/rules/integrations/storybook.mdc).

Compound shared React context lives in `<name>.context.tsx` beside the main file — see [React Component Patterns → Context file](../../.cursor/rules/integrations/react-component.mdc#context-file-namecontexttsx).

## Component taxonomy

Prefer placing new work in the lowest [Storybook taxonomy](../../.cursor/rules/integrations/storybook.mdc#meta) level (`primitive` → `standard` → `pattern`) that still solves the use case.

## Product naming

Nav, toolbar, select, overlay/modal, feedback, i18n, and `data-scope` query policy: [Component](../../.cursor/rules/integrations/component.mdc). Public API models: [React Component Patterns → Public API](../../.cursor/rules/integrations/react-component.mdc#public-api).

## Surface + form controls

Form-control shells default to `variant: "primary"`. Pass `variant="secondary"` (or `controlVariant` on Clipboard) when the control sits on a muted surface.
