---
root: false
targets:
  - '*'
description: Shared Solid component patterns — package layout, compound API, context, styling, demos
globs:
  - packages/solid/src/**
cursor:
  alwaysApply: false
---

# Solid Component Patterns

How to build shared UI components in `packages/solid` (`@pisagor/solid`).

**References:** [Component](component.mdc) (product naming), [React Component Patterns](react-component.mdc) / [Vue Component Patterns](vue-component.mdc) (shared recipe authoring + API models), [TypeScript Style Guide](../typescript.mdc). Package docs live in skills and these rules — there is no `packages/solid/AGENTS.md`.

**Out of scope:** design tokens / theme authoring (`@pisagor/tokens`). `tv()` recipe authoring lives in [`@pisagor/recipes`](../../../packages/recipes) — this file covers how components **consume** recipes. Shared recipe rules: [React → Authoring recipes](react-component.mdc#authoring-recipes-pisagorrecipes).

---

## Package layout

Light components live under `src/components/`. Prefer a **flat single file** `src/components/<name>.tsx` (kebab-case → PascalCase export). Use a **folder** only when the component is multi-file.

**Heavy** modules live under `src/<name>/` with dedicated exports only — not on the root barrel: `data-grid`, `data-table`, `phone-input`, `rich-text-editor`. Forms: `@pisagor/solid-form`.

```text
# Typical (single-file)
src/components/<name>.tsx          # parts + Object.assign compound at bottom
src/components/index.ts            # root barrel: export * from "./<name>"

# Multi-file (folder only when needed)
src/components/<name>/
├── <name>.tsx
├── index.ts
├── <name>.context.tsx             # thin non-style context (when present)
└── [optional splits]
```

Package source stays **story-free**. Demos live in `apps/solid` (`solid-stories`). Do **not** add `*.stories.*` under `packages/solid`.

### Implementation surface

Package UI is **Solid JSX** in `.tsx` files (`solid-js` + `@ark-ui/solid`).

- Prefer `splitProps` to separate local props from rest attrs.
- Alias Ark roots: `Tooltip as TooltipPrimitive`.
- Styling prop is **`class`**, not React’s `className`.
- Slot memos use getters for reactivity: `createMemo` + `get slots() { return slots(); }`.

### Slot recipe context (`createSlotRecipeContext`)

Internal helper at `src/internal/create-slot-recipe-context.tsx` (not public `utils`). Same API as React: `{ name, recipe }`, `withProvider` / `withContext`, `Context` / `useStyles`. Same naming as React: PascalCase `name`; part `slot` defaults to kebab-case (`Root` → `base` → `data-part="root"`); camelCase keys pass `slot` + kebab `data-part` via `defaultProps`. Emitted `data-part` / `data-scope` must match React. Prefer native / `ark.*` hosts; Ark primitives when `asChild` / polymorphism is needed. Thin non-style state uses package `createContext` from `utils` with getter values (Solid idiom).

### Context file (`<name>.context.tsx`)

Only for **foldered** multi-file components. Same rules as React — provide with `<FooContext value={…}>`. Single-file components keep `#region Context` in `<name>.tsx`.

### Public shared packages

- Flat file or multi-file folder — both re-export from the root `@pisagor/solid` barrel.
- Import recipes from `@pisagor/recipes` — no local `*.recipe.ts` / `tv()`.

### Stories app (`apps/solid`)

- `apps/solid` is a **stories host** (`solid-stories`), not Storybook.
- Demo blocks live in `apps/docs/src/blocks/solid/…` (docs app), not in this package.

### Cross-component imports

- Relative sibling imports; public map for apps.
- Relative by depth: `../utils` / `../../utils`, `../internal/…`, `../hooks`.
- Icons: `@squidlab/phosphor-solid` (also `@pisagor/solid/icons`). Shared SVG stand-ins may live in `src/internal/icons`.
- Class merging: `cn` from `@pisagor/utils`.

### Shared props (`@pisagor/props`)

Same contract as React — extend `BaseFooProps` from `@pisagor/props`. Template: React [`button.tsx`](../../../packages/react/src/components/button.tsx) / Solid [`button.tsx`](../../../packages/solid/src/components/button.tsx).

---

## Public API

Choose **closed**, **compound**, or **compound + shorthand** per component. Same product surface as React/Vue — [Component](component.mdc) for naming; [React Component Patterns → Public API](react-component.mdc#public-api) for the decision table.

| Model | Public API | Barrel (`index.ts`) |
| ----- | ---------- | ------------------- |
| **Closed** | `Foo` | `export * from "./foo"` / named `Foo` |
| **Compound** | `Foo.Root`, `Foo.Title`, … | `Object.assign(FooRoot, { … })` |
| **Shorthand** | `FooShorthand` or root preset | `Object.assign(FooShorthand, { Root, … })` |

### Do

- Name internals `{Name}Root`, `{Name}Item`, …; export via `Object.assign` on the barrel (same as React).
- Public surface is `Foo.Root` / `Foo.Part` only — no flat `FooPart` siblings beside the namespace.
- Do not re-export `{name}Recipe` from the component barrel.
- Closed multi-slot: private parts + context; barrel exports only `Foo` / `FooProps`.
- Prefer owner `*Props` / Ark-exported `*Props` over inventing passthrough aliases.

### Do not

- Do not ship dual compound + flat surfaces.
- Do not use `<Foo>` as a composition root when shorthand is the default export — use `<Foo.Root>`.
- Do not call `tv()` or keep `#region Variants` in component packages.
- Do not use React `className` / `displayName` conventions — Solid uses `class`; there is no React DevTools `displayName` requirement today.

---

## Styling

Recipes (`tv()`) are owned by **`@pisagor/recipes`**. Components import them; they do not call `tv()`.

### Consuming recipes

- Import from the recipes barrel: `import { buttonRecipe, type ButtonVariantProps } from "@pisagor/recipes"`.
- Shared form-control shells: `import { formControlShellRecipe, … } from "@pisagor/recipes"`.
- Pass `surfaceVariant: useFormControlSurface()` into shell recipes so soft fills stay visible on muted Surface / Frame chrome. Do **not** auto-resolve primary/secondary shell `variant` from Surface.
- **`cn()`:** one logical concern per string; consumer `class` last.
- Use **semantic tokens** (`bg-muted`, `text-muted-foreground`).
- **Root** always accepts **`class`** — never `rootClassName` / React `className`.
- **Single-element recipes:** `cn(fooRecipe({ … }), class)` / `fooRecipe({ …, class })` — no `classNames` prop.
- **Multi-slot recipes:** `const slots = fooRecipe(…)`; merge via `slots.part({ class: classNames?.part })`; type **`classNames`** as `VariantClassNames<{Name}RecipeSlot>` from `internal/types` (`base` omitted — root is always `class`).
- **Root slot:** `slots.base({ class })` — never `classNames?.base`.
- Prefer `slots.part({ class })` over `cn(slots.part(), class)`.
- On **plain** styled nodes, set **`data-scope="{name}"`** and **`data-part="{part}"`** (root uses `data-part="root"`). On machine-backed Ark parts, omit both.
- Apply motion & focus classes consistently with React/Vue siblings (`motion-reduce:transition-none!`, focus-visible rings, disabled states).

### Authoring recipes

Same rules as [React Component Patterns → Authoring recipes](react-component.mdc#authoring-recipes-pisagorrecipes) — one recipe package for all frameworks.

### Override without a slot

1. **Compound part** — pass `class` on `{Name}Part` directly.
2. **Remove** erroneous empty slots from the recipe — do not keep placeholders for typing.
3. **Do not** add `*Props.class` bags solely for styling that belongs on `class` / `classNames`.

---

## Accessibility

- Keep ARIA and semantics from the headless primitive.
- Require an accessible name on icon-only controls (`aria-label` or visually hidden text).
- Set `data-state="loading"` / `aria-busy` on loading; disable pointer events.
- Support `aria-invalid` styling on inputs and triggers.

---

## Demos (not Storybook)

- Author block demos in `apps/docs/src/blocks/solid/…` when documenting compositions for docs.
- Do **not** add `*.stories.tsx` under `packages/solid`.
- If Storybook is introduced later, host stories in the app (mirror `apps/react`), not in the package — [Storybook](stories.mdc) / [Component](component.mdc).
