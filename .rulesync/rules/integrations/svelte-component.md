---
root: false
targets:
  - '*'
description: Shared Svelte component patterns — package layout, compound API, context, styling, demos
globs:
  - packages/svelte/src/**
cursor:
  alwaysApply: false
---
# Svelte Component Patterns

How to build shared UI components in `packages/svelte` (`@pisagor/svelte`).

**References:** [Component](component.mdc) (product naming), [React Component Patterns](react-component.mdc) / [Solid Component Patterns](solid-component.mdc) (shared recipe authoring + API models), [TypeScript Style Guide](../typescript.mdc). Package docs live in skills and these rules — there is no `packages/svelte/AGENTS.md`.

**Out of scope:** design tokens / theme authoring (`@pisagor/tokens`). `tv()` recipe authoring lives in [`@pisagor/recipes`](../../../packages/recipes) — this file covers how components **consume** recipes. Shared recipe rules: [React → Authoring recipes](react-component.mdc#authoring-recipes-pisagorrecipes).

---

## Package layout

Light components live under `src/components/`. Prefer a **folder** with one `.svelte` file per part (Svelte compounds need multiple SFCs). Flatten to a single file at `src/components/<name>.svelte` (plus a root-barrel export) **only** when the folder would otherwise be just `index.ts` + one implementation file.

**Heavy** modules live under `src/<name>/` with dedicated exports only — not on the root barrel: `data-grid`, `data-table`, `phone-input`, `rich-text-editor`. Forms: `@pisagor/svelte-form`.

```text
# Typical compound (multi-file folder)
src/components/<kebab-name>/
├── <name>-root.svelte
├── <name>-title.svelte
├── <name>.svelte              # shorthand compose (when present)
├── index.ts                   # Object.assign compound export
├── <name>.context.ts          # createSlotRecipeContext (+ thin non-style state)
└── [optional splits]

# Closed / single-file (flattened)
src/components/<name>.svelte   # default export
src/components/index.ts        # export { default as Foo } from "./foo.svelte"
```

Package source stays **story-free**. Demos live in `apps/svelte` (`svelte-stories`). Do **not** add `*.stories.*` under `packages/svelte`.

### Implementation surface

Package UI is **Svelte 5 SFCs** (`.svelte`) with runes (`$props()`, `$derived`, snippets).

- One **file per part** for compounds; barrel `Object.assign`s them into `Foo.Root` / `Foo.Part`.
- Destructure `$props()` with `class: className` when you need a local binding (Svelte reserves `class`); prefer `let { children, ...rest } = $props()` when using slot-recipe helpers.
- Prefer `Snippet` for slot-like content on shorthand APIs; render with `{@render children?.()}`.
- Alias Ark roots: `Accordion as AccordionPrimitive`; plain nodes via native elements or `Ark` from `@ark-ui/svelte/factory` when `asChild` / polymorphism is needed.
- Styling prop is **`class`**, not React’s `className`.

### Slot recipe context (`createSlotRecipeContext`)

Internal helper at `src/internal/create-slot-recipe-context.svelte.ts` (not public `utils`). Same model as React / Solid: `{ name, recipe }`, `withProvider` / `withContext`, `Context` / `useStyles`.

Svelte cannot use HOCs that return components; call the helpers **once in the part `<script>`** with a getter over `$props()` (typically after peeling `children`):

```svelte
<script lang="ts">
import { withProvider } from "./alert.context";

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<div {...root.props}>
  {@render children?.()}
</div>
```

```svelte
<script lang="ts">
import { withContext } from "./alert.context";

let { children, ...rest }: Props = $props();
const title = withContext(() => rest, { name: "Title" });
</script>

<div {...title.props}>
  {@render children?.()}
</div>
```

- PascalCase `name`; part `slot` defaults to kebab-case (`Root` → `base` → `data-part="root"`); camelCase keys pass `slot` + kebab `data-part` via `defaultProps`.
- Emitted `data-part` / `data-scope` and variant `data-*` must match React.
- Prefer native hosts; Ark primitives when polymorphism / machine parts are required.
- Hand-written parts: `Context.set({ get slots() { return slots }, get variants() { return variants } })` / `useStyles()` — read getters in markup (do not destructure once).
- Thin non-style state uses package `createContext` from `utils` with getter values (Svelte idiom). Dual providers (breadcrumb, timer, steps, bottom-navigation, listbox, tags-input, tree-view, file-upload, …) share the React `name` / `data-scope` pattern — do not lift everything to the root.

### Context file (`<name>.context.ts`)

For **foldered** multi-file components. Export `createSlotRecipeContext` bindings (`withProvider` / `withContext` / `useStyles` / `Context`). Keep non-slot state in the same file as a separate `createContext`. Single-file closed components do not need a context file.

### Public shared packages

- Folder or flat file — both re-export from the root `@pisagor/svelte` barrel.
- Import recipes from `@pisagor/recipes` — no local `*.recipe.ts` / `tv()`.

### Stories app (`apps/svelte`)

- `apps/svelte` is a **stories host** (`svelte-stories`), not Storybook.
- Demo blocks live in `apps/docs/src/blocks/svelte/…` (docs app), not in this package.

### Cross-component imports

- Relative sibling imports; public map for apps.
- Relative by depth: `../utils` / `../../utils`, `../internal/…`, `../hooks`.
- Icons: `phosphor-svelte` (e.g. `import XIcon from "phosphor-svelte/lib/XIcon"`).
- Class merging: `cn` from `@pisagor/utils`.

### Shared props (`@pisagor/props`)

Same contract as React — extend `BaseFooProps` from `@pisagor/props`. Template: React [`button.tsx`](../../../packages/react/src/components/button.tsx) / Svelte [`button.svelte`](../../../packages/svelte/src/components/button.svelte).

---

## Public API

Choose **closed**, **compound**, or **compound + shorthand** per component. Same product surface as React/Vue — [Component](component.mdc) for naming; [React Component Patterns → Public API](react-component.mdc#public-api) for the decision table.

| Model | Public API | Barrel (`index.ts`) |
| ----- | ---------- | ------------------- |
| **Closed** | `Foo` | `export { default as Foo } from "./foo.svelte"` |
| **Compound** | `Foo.Root`, `Foo.Title`, … | `Object.assign(FooRoot, { … })` |
| **Shorthand** | default SFC + attached parts | `Object.assign(FooShorthand, { Root, … })` |

### Do

- Implement compound parts as separate `.svelte` files; shorthand composes them — never the reverse.
- Export via `Object.assign(FooShorthand, { Root, Item, … })` when shorthand exists; otherwise `Object.assign(FooRoot, { … })`.
- Public surface is `Foo.Root` / `Foo.Part` only — no flat `FooPart` siblings beside the namespace.
- Do not re-export `{name}Recipe` from the component barrel.
- Prefer owner props / Ark-exported part props; omit `class` from sub-element bags that fight `classNames`.

### Do not

- Do not ship dual compound + flat surfaces.
- Do not use `<Foo>` as a composition root when shorthand is the default export — use `<Foo.Root>`.
- Do not call `tv()` in component packages.
- Do not author public package components as `.ts` `h()` trees — SFCs are the package idiom.

---

## Styling

Recipes (`tv()`) are owned by **`@pisagor/recipes`**. Components import them; they do not call `tv()`.

### Consuming recipes

- Import from the recipes barrel: `import { buttonRecipe, type ButtonVariantProps } from "@pisagor/recipes"`.
- Shared form-control shells: `import { formControlShellRecipe, … } from "@pisagor/recipes"`.
- Pass `surfaceVariant` from `useFormControlSurface()` into shell recipes. Do **not** auto-resolve primary/secondary shell `variant` from Surface.
- Prefer `$derived` / slot-recipe helpers so variant changes update classes.
- **`cn()`:** one logical concern per string; consumer `class` last.
- Use **semantic tokens** (`bg-muted`, `text-muted-foreground`).
- **Root** always accepts **`class`** — never `rootClass` / React `className`.
- **Single-element recipes:** `fooRecipe({ …, class })` / helpers — no `classNames` prop.
- **Multi-slot recipes:** merge via `slots.part({ class: classNames?.part })`; type **`classNames`** as `VariantClassNames<{Name}RecipeSlot>` from `internal/types` (`base` omitted — root is always `class`).
- **Root slot:** `slots.base({ class })` — never `classNames?.base`.
- Prefer `slots.part({ class })` over `cn(slots.part(), class)`.
- On **plain** styled nodes, set **`data-scope="{name}"`** and **`data-part="{part}"`** (root uses `data-part="root"`) — helpers emit these. On machine-backed Ark parts, omit both when the machine owns them.
- Apply motion & focus classes consistently with React/Solid siblings.

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

- Author block demos in `apps/docs/src/blocks/svelte/…` when documenting compositions for docs.
- Do **not** add `*.stories.*` under `packages/svelte`.
- If Storybook is introduced later, host stories in the app (mirror `apps/react`), not in the package — [Storybook](stories.mdc) / [Component](component.mdc).
