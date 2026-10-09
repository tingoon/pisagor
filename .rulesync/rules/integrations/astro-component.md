---
root: false
targets:
  - '*'
description: Shared Astro component patterns — package layout, static slot-recipe helper, styling, React parity
globs:
  - packages/astro/src/**
  - packages/astro/examples/**
cursor:
  alwaysApply: false
---
# Astro Component Patterns

How to build shared UI components in `packages/astro` (`@pisagor/astro`). Astro is the **static subset** of the catalog: no client JS, no Ark machines — only components that render meaningfully as HTML + CSS.

**References:** [Component](component.mdc) (product naming), [React Component Patterns](react-component.mdc) (source of truth for API + DOM), [Svelte Component Patterns](svelte-component.mdc) (closest file layout), [TypeScript Style Guide](../typescript.mdc).

**Out of scope:** `tv()` recipe authoring lives in [`@pisagor/recipes`](../../../packages/recipes) — this file covers how Astro components **consume** recipes.

---

## Package layout

Same layout rules as Svelte: a **folder** with one `.astro` file per part for compounds, a **flat file** for single-file components.

```text
# Compound (multi-file folder)
src/components/<kebab-name>/
├── <name>-root.astro
├── <name>-title.astro
├── <name>.astro               # shorthand compose (when present)
├── <name>.context.ts          # createSlotRecipeContext bindings
└── index.ts                   # Object.assign compound export

# Closed / single-file (flattened)
src/components/<name>.astro    # default export
src/components/index.ts        # export { default as Foo } from "./foo.astro"
```

- Flatten to `src/components/<name>.astro` whenever the folder would only hold `index.ts` + one `.astro` file.
- The root part is always `<name>-root.astro`; `<name>.astro` is reserved for the shorthand.
- Folders re-export from the root barrel with `export * from "./<name>"`.
- Package source stays **story-free**. Storybook lives in `apps/astro`; doc examples live in `packages/astro/examples/<id>/`.

---

## Slot recipe helper (`createSlotRecipeContext`)

Internal helper at `src/internal/create-slot-recipe-context.ts` (not public, not `@pisagor/utils`). It has the **same name and options** as the React / Solid / Svelte helpers — `{ name, recipe }` → `withProvider` / `withContext` / `useStyles` — so parts read the same in every framework.

### Why it is static (no context)

Astro has no component context API: a component cannot provide a value that its slotted children read during render (children are rendered independently, and `Astro.locals` is request-scoped, not tree-scoped). So the Astro helper is **static**:

- `withProvider(props, opts)` resolves the root's variants (`defaultVariants` + props), consumes the `recipe` override and variant keys, and emits `class`, `data-scope`, `data-part` and variant `data-*` — the same attributes React's `withProvider` emits.
- `withContext(props, opts)` styles a descendant part from the recipe's **default variants**.
- `useStyles()` returns those default-variant `{ slots, variants }` for hand-written parts.

This produces the same classes as React because no Pisagor recipe styles a child slot from a root variant; parts whose slot depends on a variant (e.g. `Card.Media`, `Item.Media`) take that variant as their own prop and call `useStyles().slots.media({ class, variant })`. **Keep it that way:** when a recipe adds a root variant that changes a child slot, give the child part its own prop (or style it from the root with `data-*` selectors) instead of relying on context.

```astro
---
// alert/alert.context.ts
// export const { withContext, withProvider } =
//   createSlotRecipeContext({ name: "Alert", recipe: alertRecipe });
import type { HTMLAttributes } from "astro/types";
import { withProvider } from "./alert.context";

type Props = HTMLAttributes<"div"> & BaseAlertProps;
const root = withProvider(Astro.props, { name: "Root", slot: "base" });
---

<div {...root.props}><slot /></div>
```

```astro
---
import { withContext } from "./alert.context";

const title = withContext(Astro.props, { name: "Title" });
---

<div {...title.props}><slot /></div>
```

- PascalCase `name`; `slot` defaults to kebab-case (`Root` → `base` → `data-part="root"`).
- camelCase slots (`panelHeader`) pass `slot` plus a kebab `data-part` via `defaultProps`.
- `defaultProps` go before consumer props (consumer wins); `class` merges.
- Dual scopes mirror React (e.g. `breadcrumb` + `breadcrumb-item` get two helper instances in one context file).
- Single-file components may call the helper in-file (`avatar.astro`) or use the recipe directly when there is one element.

### Context file (`<name>.context.ts`)

One per foldered compound. Export only the helper bindings the parts use. No runtime state — there is none to share.

---

## Styling

- Import recipes from `@pisagor/recipes`; never call `tv()` in the package.
- Every component accepts **`recipe`** (default `fooRecipe`) and **consumes** it — it must never leak to the DOM.
- Styling prop is **`class`** (Astro), never `className`.
- **Single-element recipes:** `recipe({ …variants, class })` — no `classNames`.
- **Multi-slot shorthands:** accept `classNames?: VariantClassNames<FooRecipeSlot>` from `src/internal/types` and pass `classNames.part` to the matching part; root stays `class`.
- Do not hardcode variant defaults in shorthands — let the recipe's `defaultVariants` apply so output matches React.

---

## DOM parity with React

React is the reference. For the same props an Astro component must emit the same:

- element tags and part structure;
- `data-scope` / `data-part` and variant `data-*` (including default variants);
- class list (same recipe slots, same order of merge);
- ARIA that React renders statically (e.g. `role`, `aria-current`, `aria-live`, `aria-value*`).

Allowed differences — attributes only an Ark machine or client JS can produce:

- generated `id`s, `dir`, `hidden` toggles, load-state transitions (Avatar renders image or fallback statically);
- behaviour (no click-to-focus, no dismiss, no live updates);
- a root `recipe` override does not reach descendant parts (no context — pass `recipe` per part if needed).

Use `aria-hidden="true"` (not bare `aria-hidden`, which renders as an empty value). Do not add placeholder fallback text that React does not render.

---

## Shared props (`@pisagor/props`)

Same contract as React — extend `BaseFooProps` from `@pisagor/props` and the matching `HTMLAttributes<"tag">` from `astro/types`.

## Public API

Same product surface as React ([React Component Patterns → Public API](react-component.mdc#public-api)): closed `Foo`, compound `Foo.Root` / `Foo.Part`, or shorthand `Foo` + attached parts via `Object.assign`. No flat `FooPart` siblings beside the namespace; do not re-export recipes from component barrels.
