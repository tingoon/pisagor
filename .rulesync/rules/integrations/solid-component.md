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

Folder name, main file, and component export name align: **kebab-case folder** → **`<name>.tsx`** → **PascalCase** component (e.g. `accordion/` → `accordion.tsx` → `Accordion`).

**Light** components live under `src/components/<name>/` (root barrel + `./*`). **Heavy** modules live under `src/<name>/` with dedicated exports only — not on the root barrel: `data-grid`, `data-table`, `phone-input`, `rich-text-editor`. Forms: `@pisagor/solid-form`.

```text
<kebab-name>/
├── <name>.tsx
├── index.ts                  # public shared packages — required
├── <name>.context.tsx        # compound shared Solid context (when present)
└── [optional splits]         # large sub-modules only
```

Package source stays **story-free**. There is no Storybook app for Solid today — block demos live in `apps/solid` (`solid-blocks`). Do **not** add `*.stories.*` under `packages/solid`. If/when Storybook is added, stories go in the app, not the package.

### Implementation surface

Package UI is **Solid JSX** in `.tsx` files (`solid-js` + `@ark-ui/solid`).

- Prefer `splitProps` to separate local props from rest attrs.
- Alias Ark roots to avoid clashes: `Tooltip as TooltipPrimitive`.
- Use accessors / derived helpers for recipe slots when values change (`const slots = () => …`).
- Styling prop is **`class`**, not React’s `className` — Solid DOM uses `class`.

### Context file (`<name>.context.tsx`)

When a compound component uses package-local Solid context (`createContext` from package `utils`, relative path by depth):

- Put context value types, `createContext("Foo")<FooValue>()` / `createContext("Foo")<FooValue>({ … })`, and consumer hooks in `<name>.context.tsx`.
- Export `{ FooContext, useFoo }` from that file; keep Root/Part JSX in `<name>.tsx`.
- Provide with `<FooContext value={…}>` (the helper’s Provider takes a `value` prop) — do not invent a parallel context key.
- Public props / part props stay in `<name>.tsx`. Context value types that public props reference live in the context file (`import type`).
- One `<name>.context.tsx` per component folder even when there are multiple nested contexts (e.g. data-grid / data-table).
- Do not move Ark/Zag `useXContext` re-exports or `XPrimitive.Context` into context files.
- Barrel hooks re-export from `./<name>.context`, not from `<name>.tsx`.
- In `index.ts`, put a blank line between type re-exports and context hook re-exports.

### Public shared packages

- One folder per public component — layout above is required.
- Require `index.ts` barrel (package export map, e.g. `@pisagor/solid/*`).
- Import recipes from `@pisagor/recipes` — do not add local `*.recipe.ts` shims or call `tv()`.

### Block demo app (`apps/solid`)

- `apps/solid` is a **block host** (`solid-blocks`), not Storybook.
- Demo blocks live under `apps/solid/src/blocks/…` and import the public export map (`@pisagor/solid`, heavy subpaths, `@pisagor/solid-form`).
- Do not require `*.stories.tsx` in the package or the app.

### Cross-component imports

- Within package source, prefer **relative** imports between siblings (e.g. `../button`, `../surface/use-form-control-surface`).
- Apps and other packages use the public export map (light barrel or heavy subpath).
- For cyclic pairs, import the concrete module file, not the barrel `index.ts`.
- Import `{name}Recipe` / `{Name}VariantProps` from `@pisagor/recipes` — see [Styling](#styling).
- Shared visual prop contracts (`variant` / `size` / `recipe` / recipe-linked fields) come from `@pisagor/props` — see [Shared props (`@pisagor/props`)](#shared-props-pisagorprops).
- Use relative imports (`../../utils` / `../utils` by depth, `../../hooks` / `../hooks`, siblings) within the package.
- Icons: prefer `@squidlab/phosphor-solid` (re-exported as `@pisagor/solid/icons` for consumers). Shared SVG stand-ins may live in `src/internal/icons` when matching existing parts.
- Class merging: `cn` from `@pisagor/utils`.

### Shared props (`@pisagor/props`)

Framework-agnostic visual props live in [`@pisagor/props`](../../../packages/props). Recipe `tv()` stays in `@pisagor/recipes`; props re-exports the shared surface (`{Name}VariantProps`, optional `recipe`).

- Import: `import type { FooProps as BaseFooProps } from "@pisagor/props"`.
- Public `FooProps` **extends** `BaseFooProps` (plus Ark/DOM / framework-only fields). Do not re-declare `recipe` or variant fields already on the shared type.
- Framework packages own only framework-specific props (event names, slots, refs, `class`, `classNames`, sub-element bags).
- Template: React [`button.tsx`](../../../packages/react/src/components/button/button.tsx) / Solid button under `packages/solid/src/components/button/`.

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

- Author block demos in `apps/solid/src/blocks/…` when documenting compositions for docs.
- Do **not** add `*.stories.tsx` under `packages/solid`.
- If Storybook is introduced later, host stories in the app (mirror `apps/react`), not in the package — [Storybook](stories.mdc) / [Component](component.mdc).
