---
root: false
targets:
  - "*"
description: Shared product naming — overlay/modal, toolbar, nav, select, feedback, i18n, data-scope
globs:
  - packages/react/src/**
  - packages/vue/src/**
  - packages/solid/src/**
  - packages/svelte/src/**
  - packages/astro/src/**
cursor:
  alwaysApply: false
---

# Component

Framework-agnostic product naming and catalog policy for Pisagor component packages.

**Sibling frameworks:** `react`, `vue`, `solid`, `svelte`, and `astro` (Astro is a static subset). Full interactive sets: `@pisagor/react`, `@pisagor/vue`, `@pisagor/solid`, `@pisagor/svelte` (forms: `@pisagor/{framework}-form`). Implementation patterns: [React Component Patterns](react-component.mdc), [Vue Component Patterns](vue-component.mdc), [Solid Component Patterns](solid-component.mdc), [Svelte Component Patterns](svelte-component.mdc), [Astro Component Patterns](astro-component.mdc). Storybook hosts: `apps/react`, `apps/vue`, `apps/astro` — package source stays story-free. `apps/solid` / `apps/svelte` are story hosts (`solid-stories` / `svelte-stories`), not Storybook.

Import paths below use `@pisagor/{pkg}` for light components — substitute `react`, `vue`, `solid`, `svelte`, or `astro` as appropriate. Heavy modules stay on dedicated subpaths (`data-grid`, `data-table`, `phone-input`, `rich-text-editor`).

Import from package barrels; use subpaths only for CSS, separate entries, or names missing from the root. This covers Ark (`@ark-ui/<fw>`), Zag, Phosphor (`phosphor-svelte`, not `phosphor-svelte/lib/*`) and our own packages. Allowed subpaths: CSS (`@pisagor/*/styles`); separate runtime or tooling entries (`react-dom/client`, `solid-js/web`, `svelte/elements`, `astro/*`, `storybook/test`, `@storybook/*/node`); packages whose root does not export the name (`@squidlab/phosphor-solid/icons`, `@modelcontextprotocol/sdk/server/*`, React `createGridCollection` from `@ark-ui/react/collection`); lazy-loaded heavy modules (`@tanstack/highlight/core` and `/languages/*`); and our intentional subpaths (`/hooks`, `/utils`, `data-grid`, `data-table`, `phone-input`, `rich-text-editor`, form `/tanstack`, `@pisagor/presets/pisagor`). Lint enforces this (`no-restricted-imports` in `bunfig.toml`, `noRestrictedImports` in `biome.json`); add a new exception there, or a disable comment that says why.

Type imports: when an import has 3 or more inline `type X` specifiers, split it into a value import plus one `import type { … } from "…"` with all the types (keep aliases, e.g. `SliderRootProps as SliderRootPrimitiveProps`). An import with only types is always a pure `import type`. Imports with 1–2 inline types stay inline. No linter enforces the 3+ threshold: Biome `useImportType` (`auto`, `inlineType`, `separatedType`) and oxlint `consistent-type-imports` (`fixStyle`) only pick one style for every import, so follow this by hand. `bun fmt` and Biome `useImportType` (`auto`) leave both forms as they are.

Blank line before `return`: put one empty line between the preceding statements and a `return` (e.g. `const { m } = useLocale();`, an empty line, then `return (`). A `return` that is the first statement of its block or `case` needs none. This applies to `.ts`/`.tsx` and the script blocks of `.vue`, `.svelte` and `.astro` files. No tool enforces it: `bun lint` rejects `padding-line-between-statements` / `newline-before-return` as formatting rules, `bun fmt` has no such option, and Biome has no equivalent rule, so follow it by hand.

Host element props — match the runtime host, do not mix:

| Host                                  | React props type                                              | Notes                                                                                                           |
| ------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `ark.button` / `ark.div` / …          | `HTMLArkProps<"tag">` from `@ark-ui/react`                    | Includes `PolymorphicProps` (`asChild`). Do **not** also extend `ComponentProps` / `PolymorphicProps`.          |
| `ark.*` when `asChild` + native props | `ArkComponentProps<"tag">` from `packages/react/src/internal` | `ComponentProps<"tag">` + `PolymorphicProps`. Do **not** mix with `HTMLArkProps` / separate `PolymorphicProps`. |
| Native `<button>` / `<div>` / …       | `ComponentProps<"tag">` from `react`                          | No Ark types.                                                                                                   |
| Never                                 | `ComponentProps<typeof ark.tag>`                              | Prefer `HTMLArkProps<"tag">` (or `ArkComponentProps` when `asChild` + native props).                            |

**When to use `ark.*` / `<Ark>` vs native (all frameworks):** Prefer a **native** tag for presentational / layout chrome. Use the Ark factory only when polymorphism (`asChild` / `as-child`) is meaningful — interactive triggers/close controls, link surfaces (`a` for router `Link`), or public roots/titles that consumers morph (`Button`, `Card` / `Card.Title`, `LinkBox`, `Item` root, `Announcement.Root`, `Breadcrumb.Link`, `AvatarGroup.Count`, heading titles). Do not expose polymorphism on Badge, Skeleton, Dialog Body/Header/Footer, Table cells, Field shells, or similar leaves. `withContext("div")` / `<div>` / `h("div", …)` are fine; see `alert`, `progress`, `app-shell`. Astro is native-only (no Ark / no `asChild`).

| Framework | Polymorphic host props                                                            | Native host props                           |
| --------- | --------------------------------------------------------------------------------- | ------------------------------------------- |
| React     | `HTMLArkProps<"tag">` / `ArkComponentProps<"tag">` (`@ark-ui/react` / `internal`) | `ComponentProps<"tag">`                     |
| Solid     | `HTMLArkProps<"tag">` from `@ark-ui/solid` (includes `ref`)                       | `ComponentProps<"tag">` from `solid-js`     |
| Vue       | Runtime via `ark.*` + attrs (no separate prop type)                               | `h("tag", …)` / `withContext("tag")`        |
| Svelte    | `<Ark as="tag">` when polymorphism needed                                         | `HTMLAttributes<Element>` on native `<tag>` |
| Astro     | —                                                                                 | `HTMLAttributes<"tag">` from `astro/types`  |

---

## Overlay vs modal

- Use **overlay** patterns for lightweight anchored content (popover, hover card, dropdown-like surfaces) that should not fully block page flow.
- Use **modal** patterns (dialog, sheet when modal behavior is required) for interruptive tasks requiring explicit user resolution.
- If escape hatch and background interaction are required, choose an overlay. If focus trapping and decision gating are required, choose a modal.

## Toolbar family

- `action-bar`: bulk/action overlay pattern for table or selection workflows.
- `toolbar`: section-level control bar for page/area actions and filters.
- `button-group`: grouped control primitive for related actions or selections.
- `DataGrid.Toolbar`: grid-scoped toolbar composition for data grid controls and actions.
- `DataTable.Toolbar`: simple table-scoped toolbar for basic data tables.

## Feedback

- `alert`: block-level feedback for status, warning, error, or actionable callouts within page flow.
- `announcement`: compact promotional or informational surface; aliases `banner`, `callout` (see [Storybook → Meta](stories.mdc)).

## Navigation decision tree

| Need                                    | Component           | Import           |
| --------------------------------------- | ------------------- | ---------------- |
| Top app bar with brand, nav, actions    | `navbar`            | `@pisagor/{pkg}` |
| Collapsible app sidebar                 | `sidebar`           | `@pisagor/{pkg}` |
| Site-wide horizontal nav with dropdowns | `navigation-menu`   | `@pisagor/{pkg}` |
| Always-visible nav link list            | `menu`              | `@pisagor/{pkg}` |
| Popup actions from a trigger            | `dropdown-menu`     | `@pisagor/{pkg}` |
| Mobile bottom tab bar                   | `bottom-navigation` | `@pisagor/{pkg}` |

### New component checklist

1. kebab-case file or folder and export path (`dropdown-menu.tsx` / `dropdown-menu/`)
2. PascalCase component export (`DropdownMenu`)
3. When the framework has a Storybook app (`apps/react`, `apps/vue`, `apps/astro`), add story meta there (`title`, `parameters.metadata`, docs description) — [Storybook → Meta](stories.mdc). Do not colocate `*.stories.*` inside component packages.

## Select stack

- `combobox`: internal base primitive/engine.
- Public selection surfaces:
  - `autocomplete`
  - `select`
  - `listbox`

Prefer public components in app code; only extend `combobox` when building package-level abstractions.

## i18n and direction

- **Library defaults** (aria-labels, placeholders) ship as English UI messages. Consumers override them via `Provider` `messages` or by passing props. Components call `const { m } = useLocale();` once at the top of the component/setup and use `m(key, prop)` in markup (the prop wins when it is not `null`/`undefined`); use `formatMessage(m(key), values)` for placeholders.
- **Direction:** inferred from `Provider` `locale` (RTL for `ar` / `he` / `fa` / `ur`). Icon mirroring follows resolved direction.
- Consumers own localization; packages do not ship locale catalogs.

## Structural attributes (`data-scope` / `data-part`)

| Layer      | Attribute                  | Owner           | Purpose                                |
| ---------- | -------------------------- | --------------- | -------------------------------------- |
| Structural | `data-scope` + `data-part` | Library (fixed) | Compound part targeting, CSS overrides |

- `data-scope` / `data-part` are not public API; they are an internal contract. Machine-backed parts inherit them from Zag; plain parts set them inline (`data-scope="{name}"`, root `data-part="root"`). How to emit them on nodes: [React](react-component.mdc#styling) / [Vue](vue-component.mdc#styling) / [Solid](solid-component.mdc#styling) / [Svelte](svelte-component.mdc#styling).
- Components do **not** expose a `testId` prop. Consumers who need `data-testid` can pass it via native HTML attributes on a root that forwards attrs.

Query priority:

1. `getByRole` / `getByLabelText` — accessibility + behavior (preferred)
2. `within(root).querySelector('[data-scope=…][data-part=…]')` — structural parts
3. `getByTestId(...)` — only when the consumer set `data-testid` themselves
