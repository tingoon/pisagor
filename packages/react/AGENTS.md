# UI Components

Package-local guidance for component work in `packages/react` (`@pisagor/react`). See [React Component Patterns](../../.cursor/rules/integrations/react-component.mdc) and [Storybook](../../.cursor/rules/integrations/storybook.mdc) for the canonical rules — this file only covers package-specific policy.

## Heavy imports

Heavy components are **not** on the root `@pisagor/react` barrel. Import them only from dedicated subpaths; install optional peers when you use these:

- `@pisagor/react/data-grid` — `@tanstack/react-table`, `@tanstack/react-virtual`
- `@pisagor/react/charts` — `recharts`
- `@pisagor/react/rich-text-editor` — `@tiptap/react`, `@tiptap/starter-kit`
- `@pisagor/react/phone-input` — `react-phone-number-input`

Light components: prefer the root barrel (`import { Button } from "@pisagor/react"`). Use a subpath (`@pisagor/react/button`) only when you need a tight import graph.

## Design tokens (`styles.css`)

Global theme tokens live in [`src/styles.css`](./src/styles.css): fonts, type scale, core surfaces (`background` / `card` / `popover`), brand/interactive (`primary` / `secondary` / `muted` / `accent`), status (`destructive` / `info` / `success` / `warning`), chrome (`border` / `input` / `ring` / `radius`), elevation, motion, z-index, and `--breakpoint-md`.

Do **not** add component-only palettes to `:root` (e.g. sidebar chrome, chart series). Scope those on the component (semantic utilities, or CSS under `[data-scope=…][data-part=…]` such as Chart’s `chart-series.css`).

## Internal imports

Within this package, import sibling components with **relative paths** (`../button`, `../scroll-area`) in component source files. **Stories** may use `@pisagor/react` (light barrel) or `@pisagor/react/<heavy>` like apps. Do not use `@pisagor/react` / `@pisagor/react/*` in non-story `.tsx` / `.ts` under `packages/react/src`. For cyclic dependencies (`input`, `input-group`, `textarea`), import the concrete `.tsx` module instead of the folder barrel.

Package-private helpers live under [`src/internal/`](./src/internal/) (e.g. [`internal/form-control/`](./src/internal/form-control/) for Surface shell resolution). Do not re-export them from component barrels or `@pisagor/react/hooks`.

Compound shared React context lives in `<name>.context.tsx` beside the main file — see [React Component Patterns → Context file](../../.cursor/rules/integrations/react-component.mdc#context-file-namecontexttsx).
## Component Taxonomy

- **Primitive**: low-level wrappers over Ark UI or DOM primitives; narrowly scoped behavior and styling surface.
- **Standard**: reusable product-facing building blocks composed from primitives (inputs, buttons, cards, navigational controls).
- **Pattern**: higher-level composed UX patterns that coordinate multiple components and interactions.

Prefer placing new work in the lowest taxonomy level that still solves the use case.

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
- `announcement`: compact promotional or informational surface; Storybook `parameters.metadata.aliases`: `banner`, `callout`.

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

### Storybook metadata

- Canonical sidebar name → `title` only (no aliases in title).
- API model → `parameters.metadata.api` (`closed` | `compound` | `compound-shorthand`) — hidden metadata; not shown in Docs UI.
- Taxonomy → `parameters.metadata.taxonomy` (`primitive` | `standard` | `pattern`) — hidden metadata; not shown in Docs UI.
- Alternative names → `parameters.metadata.aliases` (optional); not repeated in `description` — hidden metadata; not shown in Docs UI.

### New component checklist

1. kebab-case folder and export path (`dropdown-menu`)
2. PascalCase component export (`DropdownMenu`)
3. Storybook `title`: `Components/<Category>/<Component Name>`
4. `parameters.metadata.api` + `parameters.metadata.taxonomy` + `parameters.docs.description.component`
5. `parameters.metadata.aliases` when common alternative names exist

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

Form controls inside [`Surface`](./src/components/surface/surface.tsx) automatically resolve a **secondary** shell unless overridden. Resolution is handled internally via [`useFormControlVariant`](./src/internal/form-control/use-form-control-variant.ts) — apps do not import it; pass `variant="primary"` on a control to override.

| Context | Resolved shell | Visual |
| ------- | -------------- | ------ |
| No Surface, or `Surface variant="transparent"` | `primary` | Page-level (`bg-transparent`, subtle shadow) |
| `Surface variant="default"` | `secondary` (inset) | `bg-muted/40`, no shadow |
| `Surface variant="secondary"` / `"tertiary"` | `secondary` (elevated) | `bg-background`, no shadow |
| Explicit `variant="primary"` on a control | `primary` | Overrides automatic behavior |

**DOM attributes**

- Surface: `data-scope="surface"` `data-part="root"`, `data-variant` (`default` | `secondary` | `tertiary` | `transparent`)
- Form controls: `data-variant` (`primary` | `secondary`) on the control node — distinct values from Surface; scope selectors with `data-scope` / `data-part`

**Compound components**

Roots such as `Select`, `Combobox`, `NumberInput`, and `DatePicker` accept optional `variant?: FormControlVariant` and propagate it to triggers/groups via `FormControlVariantProvider`. Sub-parts can still pass an explicit `variant` to override.

**Clipboard**

Clipboard uses two distinct props: `variant` for display mode (`button` | `input` | `value`), and `controlVariant` for Surface shell resolution (`primary` | `secondary`). Do not overload `variant` for both.

**Portals**

Portaled dropdown/list content (Select, Combobox, etc.) does not inherit Surface context from the trigger. Until portal shell propagation is implemented, wrap portaled content in `Surface` or pass `controlVariant` / `variant` when the shell must match.

**Non-Surface containers**

`Card`, `Dialog`, and other muted backgrounds are not `Surface` contexts. Either wrap fields in `Surface` or pass explicit `variant` / `controlVariant` on controls.
