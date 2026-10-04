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

**References:** [Component](component.mdc) (product naming), [React Component Patterns](react-component.mdc) / [Vue Component Patterns](vue-component.mdc) (shared recipe authoring + API models), [TypeScript Style Guide](../typescript.mdc). Package docs live in skills and these rules — there is no `packages/svelte/AGENTS.md`.

**Out of scope:** design tokens / theme authoring (`@pisagor/tokens`). `tv()` recipe authoring lives in [`@pisagor/recipes`](../../../packages/recipes) — this file covers how components **consume** recipes. Shared recipe rules: [React → Authoring recipes](react-component.mdc#authoring-recipes-pisagorrecipes).

---

## Package layout

Folder name and component export name align: **kebab-case folder** → **PascalCase** component (e.g. `accordion/` → `Accordion`).

**Light** components live under `src/components/<name>/` and export only from the root barrel (`@pisagor/svelte`). **Heavy** modules live under `src/<name>/` with dedicated exports only — not on the root barrel: `data-grid`, `data-table`, `phone-input`, `rich-text-editor`. Forms: `@pisagor/svelte-form`.

```text
<kebab-name>/
├── <name>.svelte             # closed or shorthand compose (when present)
├── <name>-root.svelte        # compound parts — one .svelte file per part
├── <name>-title.svelte
├── index.ts                  # public shared packages — required
├── <name>.context.ts         # compound shared setContext/getContext (when present)
└── [optional splits]         # large sub-modules only
```

Package source stays **story-free**. There is no Storybook app for Svelte today — block demos live in `apps/svelte` (`svelte-blocks`). Do **not** add `*.stories.*` under `packages/svelte`. If/when Storybook is added, stories go in the app, not the package.

### Implementation surface

Package UI is **Svelte 5 SFCs** (`.svelte`) with runes (`$props()`, `$derived`, snippets) — not `.ts` `h()` render trees (unlike Vue) and not JSX.

- One **file per part** for compounds (`alert-root.svelte`, `alert-title.svelte`, …); barrel `Object.assign`s them into `Foo.Root` / `Foo.Part`.
- Destructure `$props()` with `class: className` when you need a local binding (Svelte reserves `class`).
- Prefer `Snippet` for slot-like content on shorthand APIs; render with `{@render children?.()}`.
- Alias Ark roots: `Accordion as AccordionPrimitive`; plain nodes via `Ark` from `@ark-ui/svelte/factory`.
- Styling prop is **`class`**, not React’s `className`.

### Context file (`<name>.context.ts`)

When a compound component uses package-local context (`createContext` from package `utils/create-context`, relative path by depth — thin wrapper over Ark’s `createContext`):

- Put context value types and `createContext("Foo")<FooValue>()` / `createContext("Foo")<FooValue>({ … })` in `<name>.context.ts`.
- Export `setFooContext` / `useFoo` (or `useFooContext`) from that file — typically `ctx.setContext` / `ctx.getContext`.
- Call `setFooContext({ … })` in the root (or provider) `.svelte` during setup; consumers call `useFoo()` in child parts.
- Prefer getters for reactive context fields when values are `$derived` (e.g. `get slots() { return slots }`).
- Public props stay on the part SFCs. Context value types that parts share live in the context file (`import type`).
- One `<name>.context.ts` per component folder even when there are multiple nested contexts (e.g. data-table root / header-group / row).
- Do not move Ark `useXContext` re-exports into context files.
- Barrel hooks re-export from `./<name>.context`.

### Public shared packages

- One folder per public component — layout above is required.
- Require `index.ts` barrel (re-exported from the root `@pisagor/svelte` map).
- Import recipes from `@pisagor/recipes` — do not add local `*.recipe.ts` shims or call `tv()`.

### Block demo app (`apps/svelte`)

- `apps/svelte` is a **block host** (`svelte-blocks`), not Storybook.
- Demo blocks live under `apps/svelte/src/blocks/…` and import the public export map (`@pisagor/svelte`, heavy subpaths, `@pisagor/svelte-form`).
- Do not require `*.stories.svelte` / `*.stories.ts` in the package or the app.

### Cross-component imports

- Within package source, prefer **relative** imports between siblings (e.g. `../button/button.svelte`, `../surface/use-form-control-surface`).
- Apps and other packages use the public export map (light barrel or heavy subpath).
- For cyclic pairs, import the concrete module / SFC, not the barrel `index.ts`.
- Import `{name}Recipe` / `{Name}VariantProps` from `@pisagor/recipes` — see [Styling](#styling).
- Shared visual prop contracts (`variant` / `size` / `recipe` / recipe-linked fields) come from `@pisagor/props` — see [Shared props (`@pisagor/props`)](#shared-props-pisagorprops).
- Use relative imports (`../../utils` / `../utils` by depth, hooks, siblings) within the package.
- Icons: import from `phosphor-svelte` (e.g. `import XIcon from "phosphor-svelte/lib/XIcon"`).
- Class merging: `cn` from `@pisagor/utils`.

### Shared props (`@pisagor/props`)

Framework-agnostic visual props live in [`@pisagor/props`](../../../packages/props). Recipe `tv()` stays in `@pisagor/recipes`; props re-exports the shared surface (`{Name}VariantProps`, optional `recipe`).

- Import: `import type { FooProps as BaseFooProps } from "@pisagor/props"`.
- Public component props **intersect / extend** `BaseFooProps` (plus Ark/DOM / Svelte-only fields). Do not re-declare `recipe` or variant fields already on the shared type.
- Framework packages own only framework-specific props (event names, snippets, `class`, `classNames`, sub-element bags).
- Template: React [`button.tsx`](../../../packages/react/src/components/button/button.tsx) / Svelte button under `packages/svelte/src/components/button/`.

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
- Closed / shorthand multi-slot: compose private parts; barrel exports the namespace / closed export only.
- Prefer owner props / Ark-exported part props; omit `class` from sub-element bags that fight `classNames`.

### Do not

- Do not ship dual compound + flat surfaces.
- Do not use `<Foo>` as a composition root when shorthand is the default export — use `<Foo.Root>`.
- Do not call `tv()` in component packages.
- Do not author public package components as `.ts` `h()` trees — SFCs are the package idiom.

**Example:**

```ts
// index.ts
export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
```

```svelte
<!-- Shorthand — not a composition root -->
<Alert title="Heads up!" description="…" />

<!-- Composition — always Alert.Root -->
<Alert.Root>
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>…</Alert.Description>
</Alert.Root>
```

---

## Styling

Recipes (`tv()`) are owned by **`@pisagor/recipes`**. Components import them; they do not call `tv()`.

### Consuming recipes

- Import from the recipes barrel: `import { buttonRecipe, type ButtonVariantProps } from "@pisagor/recipes"`.
- Shared form-control shells: `import { formControlShellRecipe, … } from "@pisagor/recipes"`.
- Pass `surfaceVariant` from `useFormControlSurface()` into shell recipes. Do **not** auto-resolve primary/secondary shell `variant` from Surface.
- Prefer `$derived(recipe({ … }))` for slot maps that depend on props.
- **`cn()`:** one logical concern per string; consumer `class` last (often bound as `className` after `class: className` destructure).
- Use **semantic tokens** (`bg-muted`, `text-muted-foreground`).
- **Root** always accepts **`class`** — never `rootClass` / React `className`.
- **Single-element recipes:** `slots.base({ class: cn(className) })` / `fooRecipe({ …, class: className })` — no `classNames` prop.
- **Multi-slot recipes:** merge via `slots.part({ class: classNames?.part })`; type **`classNames`** as a partial slot map / `VariantClassNames<{Name}RecipeSlot>` (`base` omitted — root is always `class`).
- **Root slot:** `slots.base({ class: className })` — never `classNames?.base`.
- Prefer `slots.part({ class })` over `cn(slots.part(), class)`.
- On **plain** styled nodes (`Ark as="…"`), set **`data-scope="{name}"`** and **`data-part="{part}"`** (root uses `data-part="root"`). On machine-backed Ark parts, omit both.
- Apply motion & focus classes consistently with React/Vue siblings.

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

- Author block demos in `apps/svelte/src/blocks/…` when documenting compositions for docs.
- Do **not** add `*.stories.*` under `packages/svelte`.
- If Storybook is introduced later, host stories in the app (mirror `apps/vue`), not in the package — [Storybook](stories.mdc) / [Component](component.mdc).
