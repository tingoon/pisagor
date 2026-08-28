# UI Components

Package-local guidance for component work in `packages/react` (`@pisagor/react`). Canonical rules: [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc) and [Storybook](../../.cursor/rules/integrations/storybook.mdc).

## Heavy imports

Heavy components are **not** on the root `@pisagor/react` barrel. Import them only from dedicated subpaths; install optional peers when you use these:

- `@pisagor/react/data-grid` — `@tanstack/react-table`, `@tanstack/react-virtual`
- `@pisagor/react/data-table` — `@tanstack/react-table`
- `@pisagor/react/charts` — `recharts`
- `@pisagor/react/rich-text-editor` — `@tiptap/react`, `@tiptap/starter-kit`
- `@pisagor/react/phone-input` — `react-phone-number-input`

Light components: prefer the root barrel (`import { Button } from "@pisagor/react"`). Use a subpath (`@pisagor/react/button`) only when you need a tight import graph.

## Peer dependencies

Install **`@mantine/hooks`** alongside `@pisagor/react` — the library uses `useUncontrolled`, `useMergedRef`, and `useMediaQuery` internally (`use-is-mobile`, clearable inputs, app-shell, action-bar, color-picker). Storybook runners already declare it in `apps/react`.

## Design tokens (`styles.css`)

Global theme tokens are owned by [`@pisagor/tokens`](../tokens) (`@pisagor/tokens/styles`). This package’s [`src/styles.css`](./src/styles.css) is the React Tailwind entry: `tw-animate-css`, `@import "@pisagor/tokens/styles"`, typography plugin, and `@source` globs for this package and recipes.

Add or change global theme tokens in `@pisagor/tokens` — not here. Do **not** add component-only palettes to the theme (e.g. sidebar chrome, chart series). Scope those on the component (semantic utilities, or CSS under `[data-scope=…][data-part=…]` such as Chart’s `chart-series.css`).

## Recipes

Do not author `tv()` in this package. Import from `@pisagor/recipes/<name>` (and `@pisagor/recipes/form-control` for shared shells). Change recipes in [`packages/recipes`](../recipes).

## Internal imports

Within this package, import sibling components with **relative paths** (`../button`, `../scroll-area`) in component source files. **Stories** may use `@pisagor/react` (light barrel) or `@pisagor/react/<heavy>` like apps. Do not use `@pisagor/react` / `@pisagor/react/*` in non-story `.tsx` / `.ts` under `packages/react/src`. For cyclic dependencies (`input`, `input-group`, `textarea`), import the concrete `.tsx` module instead of the folder barrel.

Package-private helpers live under [`src/internal/`](./src/internal/). Do not re-export them from component barrels or `@pisagor/react/hooks`.

Form fields live under [`src/form/`](./src/form/) (`@pisagor/react/form`, `@pisagor/react/form/tanstack`). Composed blocks live under [`src/blocks/`](./src/blocks/) (`@pisagor/react/blocks`).

Compound shared React context lives in `<name>.context.tsx` beside the main file — see [React Component Patterns → Context file](../../.cursor/rules/integrations/react-component.mdc#context-file-namecontexttsx).

## Component Taxonomy

Prefer placing new work in the lowest [Storybook taxonomy](../../.cursor/rules/integrations/storybook.mdc#meta) level (`primitive` → `standard` → `pattern`) that still solves the use case.

## Overlay vs Modal

- Use **overlay** patterns for lightweight anchored content (popover, hover card, dropdown-like surfaces) that should not fully block page flow.
- Use **modal** patterns (dialog, sheet when modal behavior is required) for interruptive tasks requiring explicit user resolution.
- If escape hatch and background interaction are required, choose an overlay. If focus trapping and decision gating are required, choose a modal.

## Toolbar Family

- `action-bar`: bulk/action overlay pattern for table or selection workflows.
- `toolbar`: section-level control bar for page/area actions and filters.
- `button-group`: grouped control primitive for related actions or selections.
- `DataGrid.Toolbar`: grid-scoped toolbar composition for data grid controls and actions.
- `DataTable.Toolbar`: simple table-scoped toolbar for basic data tables.

## Feedback Components

- `alert`: block-level feedback for status, warning, error, or actionable callouts within page flow.
- `announcement`: compact promotional or informational surface; aliases `banner`, `callout` (see [Storybook → Meta](../../.cursor/rules/integrations/storybook.mdc#meta)).

## Naming

### Navigation decision tree

| Need | Component | Import |
| ---- | --------- | ------ |
| Top app bar with brand, nav, actions | `navbar` | `@pisagor/react/navbar` |
| Collapsible app sidebar | `sidebar` | `@pisagor/react/sidebar` |
| Site-wide horizontal nav with dropdowns | `navigation-menu` | `@pisagor/react/navigation-menu` |
| Always-visible nav link list | `menu` | `@pisagor/react/menu` |
| Popup actions from a trigger | `dropdown-menu` | `@pisagor/react/dropdown-menu` |
| Mobile bottom tab bar | `bottom-navigation` | `@pisagor/react/bottom-navigation` |

### New component checklist

1. kebab-case folder and export path (`dropdown-menu`)
2. PascalCase component export (`DropdownMenu`)
3. Story meta (`title`, `parameters.metadata`, docs description) — [Storybook → Meta](../../.cursor/rules/integrations/storybook.mdc#meta)

## Select Stack

- `combobox`: internal base primitive/engine.
- Public selection surfaces:
  - `autocomplete`
  - `select`
  - `listbox`

Prefer public components in app code; only extend `combobox` when building package-level abstractions.

## Compound + Closed Shorthand Policy

Canonical rules: [React Component Patterns → Public API](../../.cursor/rules/integrations/react-component.mdc#public-api).

## i18n and direction

- **Library defaults** (aria-labels, placeholders) ship in English. Consumers override via `Provider` `messages` (`useProviderMessage`) or by passing props.
- **Direction:** pass `dir` to `Provider`, or omit and let locale infer RTL for `ar` / `he` / `fa` / `ur`. Icon mirroring follows resolved direction.
- Consumers own localization; `@pisagor/react` does not ship locale catalogs.

## Structural attributes (`data-scope` / `data-part`)

| Layer | Attribute | Owner | Purpose |
| ----- | --------- | ----- | ------- |
| Structural | `data-scope` + `data-part` | Library (fixed) | Compound part targeting, CSS overrides |

- `data-scope` / `data-part` are not public API; they are an internal contract. Machine-backed parts inherit them from Zag; plain parts set them inline (`data-scope="{name}"`, root `data-part="root"`).
- Components do **not** expose a `testId` prop. Consumers who need `data-testid` can pass it via native HTML attributes (e.g. `data-testid="save-settings"` on a root element that forwards attrs).

Query priority:

1. `getByRole` / `getByLabelText` — accessibility + behavior (preferred)
2. `within(root).querySelector('[data-scope=...][data-part=...]')` — structural parts
3. `getByTestId(...)` — only when the consumer set `data-testid` themselves

## Surface + form controls

Form-control shells default to `variant: "primary"`. Pass `variant="secondary"` (or `controlVariant` on Clipboard) when the control sits on a muted surface.
