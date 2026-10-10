---
root: false
targets:
  - '*'
description: Shared Vue component patterns — package layout, compound API, h()/defineComponent, styling, a11y
globs:
  - packages/vue/src/**/*.ts
  - apps/vue/src/**/*.ts
  - apps/vue/src/**/*.vue
cursor:
  alwaysApply: false
---

# Vue Component Patterns

How to build shared UI components in `packages/vue` (`@pisagor/vue`). General Vue rules — [Vue Style Guide](../vue.mdc).

**References:** [Vue Style Guide](../vue.mdc), [Storybook](stories.mdc), [Component](component.mdc), [TypeScript Style Guide](../typescript.mdc). Package docs live in skills and these rules — there is no `packages/vue/AGENTS.md`. Mirror the React sibling when porting — [React Component Patterns](react-component.mdc) — but implement with Vue idioms below (do not copy JSX/`displayName`/`className`).

**Out of scope:** design tokens / theme authoring (`@pisagor/tokens`). `tv()` recipe authoring lives in [`@pisagor/recipes`](../../../packages/recipes) — this file covers how components **consume** recipes. General Vue naming, props order, setup body, composables — [Vue Style Guide](../vue.mdc). Story catalog fields — [Storybook](stories.mdc).

---

## Package layout

Light components live under `src/components/`. Prefer a **flat single file** `src/components/<name>.ts` (kebab-case → PascalCase export, e.g. `accordion.ts` → `Accordion`). Use a **folder** only when the component is multi-file (extra modules, shared context, or sibling parts that need their own files) — keep the same folder set as React (`app-shell`, `avatar`, `input`, `input-group`, `item`, `provider`, `surface`).

**Heavy** modules live under `src/<name>/` with dedicated package exports only — not on the root barrel: `data-grid`, `data-table`, `phone-input`, `rich-text-editor`. Forms: `@pisagor/vue-form`.

```text
# Typical (single-file)
src/components/<name>.ts          # parts + Object.assign compound at bottom
src/components/index.ts           # root barrel: export * from "./<name>"

# Multi-file (folder only when needed)
src/components/<name>/
├── <name>.ts
├── index.ts                      # re-export public surface
├── <name>.context.ts             # thin non-style context (when present)
└── [optional splits]             # e.g. input-group-core.ts
```

Package source stays **story-free**. Stories live in the Storybook app `apps/vue` (e.g. `apps/vue/src/components/<name>.stories.ts`), not under `packages/vue`.

### Implementation surface

Package UI is **`defineComponent` + `h()` render functions** in `.ts` files — not SFCs (`.vue`) and not `<script setup>` templates under `packages/vue/src/components`.

- Set `inheritAttrs: false` on every part; merge consumer attrs explicitly (`...attrs`) onto the host node.
- `setup` returns a **render function** (`return () => h(…)`), not a plain VNode.
- Alias Ark roots to avoid clashes: `Accordion as AccordionPrimitive`.
- When a module import mixes **values and many types** (≥4 type specifiers), use a separate `import type { … }` from the same module instead of repeating inline `type` on each name. Keep inline `type` for small mixes (1–3 types).
- Cast polymorphic Ark parts when spreading attrs: `type ArkPart = Parameters<typeof h>[0]` then `h(X as ArkPart, { … })`.
- Prefer renaming shadowed slot bags: `setup(props, { attrs, slots: children })` when `slots` is used for recipe slots.

File-level Vue rules: [Vue Style Guide](../vue.mdc).

### Slot recipe context (`createSlotRecipeContext`)

Internal helper at `src/internal/create-slot-recipe-context.ts` (not public `utils`). Import relatively by depth (`../internal/create-slot-recipe-context` / `../../internal/…`). **Do not** import it from `vue-form` / blocks.

```ts
const {
  Context: FooStylesContext,
  useStyles: useFoo,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Foo", recipe: fooRecipe });
```

- Factory options: `{ name, recipe }` — PascalCase `name` (kebab-cased for `data-scope`). Part options: `{ name, slot?, defaultProps? }`; `slot` defaults to kebab-case of the part `name` (`Root` → `base`, emitted as `data-part="root"`). For camelCase recipe keys pass `slot` explicitly and set the kebab `data-part` via `defaultProps`.
- `withProvider` / `withContext` wrap a host element or Ark part. Prefer a **native** tag / `ark.*` by default; use Ark primitives when `asChild` or polymorphism is required.
- Hand-written roots that need dual providers: `h(FooStylesContext, { value: { get slots() { … }, variants } }, () => …)` (and a thin state context when needed). Mirror React dual-provider components (breadcrumb, timer, steps, bottom-navigation, listbox, tags-input, tree-view, file-upload, command, …) — do not lift every part recipe to the root.
- Thin **non-style** state uses `createContext` from `../internal/utils/create-context` — keep it separate from the slot-recipe Context.
- In hand-written parts call `const styles = useFoo()` in `setup` and read `styles.slots.foo()` in the **render** function (do not destructure slots in setup if reactivity is needed).

### Context file (`<name>.context.ts`)

Only for **foldered** multi-file components that need shared non-style state:

- Put value types, `createContext("Foo")<FooValue>()`, and consumer helpers in `<name>.context.ts`.
- Provide with `provideX(computed(() => value))` (or a `MaybeRef`) — match existing `createContext` helpers.
- Single-file components keep `#region Context` (slot-recipe + thin state) in `<name>.ts`.
- Do not move Ark `useXContext` / `XPrimitive.Context` into context files.
- Barrel hooks re-export from `./<name>.context` when that file exists; otherwise from the flat `<name>.ts`.

### Public shared packages

Applies to the published workspace component package (`@pisagor/vue`):

- Flat `<name>.ts` or a multi-file folder — both re-export from the root `@pisagor/vue` barrel.
- Do **not** add `*.stories.ts` under `packages/vue` — stories belong in `apps/vue` — [Storybook](stories.mdc).
- Import recipes from `@pisagor/recipes` — do not add local `*.recipe.ts` shims or call `tv()`.

### Storybook app (`apps/vue`)

- Component and form stories live in `apps/vue` (Storybook host), not in the package.
- Docs UI / local helpers in `apps/vue` may use a dedicated folder or a single file; `.stories.ts` and `index.ts` are optional for non-catalog helpers.

### Cross-component imports

- Within a shared package's source (`.ts`), prefer **relative** imports between sibling components (e.g. `./button`, `./input-group/input-group-core` for flat siblings; `../button` only from a nested folder).
- **Stories** in `apps/vue` (`.stories.ts`) use the public export map (e.g. `import { Button } from "@pisagor/vue"`). Heavy components use dedicated subpaths (`@pisagor/vue/data-grid`, …).
- Apps and other packages use the public export map for that package (light barrel or heavy subpath).
- For cyclic pairs (e.g. `input` ↔ `input-group` ↔ `textarea`), import the concrete module file, not the barrel `index.ts`.
- Import `{name}Recipe` / `{Name}VariantProps` from `@pisagor/recipes` — see [Styling](#styling). Do not define `tv()` in component packages. Do not add `<name>.recipe.ts` shims.
- Shared visual prop contracts (`variant` / `size` / `recipe` / recipe-linked fields) come from `@pisagor/props` — see [Shared props (`@pisagor/props`)](#shared-props-pisagorprops).
- Use relative imports (`../internal/…` from flat files, `../../internal/…` from foldered files; same for `hooks`) within the package.
- Import icons from `@phosphor-icons/vue` (e.g. `PhCaretDown`).
- Class merging: `cn` from `@pisagor/utils`.

### Shared props (`@pisagor/props`)

Framework-agnostic visual props live in [`@pisagor/props`](../../../packages/props). Recipe `tv()` stays in `@pisagor/recipes`; props re-exports the shared surface (`{Name}VariantProps`, optional `recipe`).

- Import: `import type { FooProps as BaseFooProps } from "@pisagor/props"`.
- Public `FooProps` **extends** `BaseFooProps` (plus Ark/DOM / framework-only fields). Do not re-declare `recipe` or variant fields already on the shared type.
- Framework packages own only framework-specific props (event names, slots, refs, `class`, `classNames`, sub-element bags).
- Template: React [`button.tsx`](../../../packages/react/src/components/button.tsx) / Vue [`button.ts`](../../../packages/vue/src/components/button.ts).

---

## Public API

Choose **closed**, **compound**, or **compound + shorthand** per component. Same product surface as React — different runtime wiring.

| Model | Use when | Public API | Barrel (`index.ts`) |
| ----- | -------- | ---------- | ------------------- |
| **Closed** | Single props surface; no subpart composition | `Foo` | Flat file export / root barrel `export * from "./foo"` |
| **Compound** | Consumer composes subparts | `Foo.Root`, `Foo.Title`, … | `Object.assign(FooRoot, { … })` at bottom of `<name>.ts` |
| **Shorthand** | Repetitive composition wrapper | `FooShorthand` or root preset (`items`, `title`) | Attached via `Object.assign` on compound barrel |

**Shorthand when:**

1. **Layout blocks** — fixed slots (title / description / action regions)
2. **Selection lists** — data → options UI (`items` on the root or shorthand)
3. **Modal headers** — single canonical path: `Foo.Header` with `title` / `description`

**Shorthand not needed:** structural layout compounds, freeform markup lists, leaf primitives.

### Do

**Compound:**

- Name internals `{Name}Root`, `{Name}Item`, … as `defineComponent` exports.
- Set `name` on each part for Vue DevTools: root `"Foo.Root"` when a dedicated shorthand export exists, otherwise `"Foo"`; subparts `"Foo.Part"`. Prefer dotted names over concatenated `"FooRoot"` for **new** parts (aligns with React `displayName` and Storybook `subcomponents`).
- Implement compound parts first; shorthand composes them — never the reverse.
- Export via `Object.assign(FooShorthand, { Root, Item, Trigger, … })` when shorthand exists; otherwise `Object.assign(FooRoot, { … })`.
- Public surface is `Foo.Root` / `Foo.Part` only. Flat `FooPart` barrel re-exports are forbidden; do not ship a dual compound + flat surface.
- Detached presets (flat `FooField`) must attach on the namespace as `Foo.Field`. No parallel flat compat export.
- Utils and composables may remain named exports outside the namespace. Do not re-export `{name}Recipe` from the component barrel — consumers import recipes from `@pisagor/recipes`.
- `parameters.metadata.api` must match the real barrel surface (`compound` / `compound-shorthand` only when the barrel is a true `Foo.Root` / `Foo.Part` namespace).

**Shorthand:**

- Name dedicated shorthand `FooShorthand` (not `FooClosed`); attach via `Object.assign(FooShorthand, { Root, Title, … })`.
- Type shorthand props without a default slot for manual subpart layout — no `default` slot composition API on the shorthand export.
- Prefer `<Foo title="…" />` / `:title` over `<Foo.Root><Foo.Title>…</Foo.Title></Foo.Root>` when preset props are enough.
- Composition uses `Foo.Root` only when flexibility is required (custom markup, slot order); never nest `Foo.Title` / `Foo.Description` under shorthand `<Foo>`.
- Root preset shorthand (`items`, `title`) on `{Name}Root` only when the pattern is thin and there is no dedicated `FooShorthand`.
- One canonical shorthand path per concern — do not duplicate on both `Root` and `Header` / `Content`.

**Closed:**

- Export a single `defineComponent` with convenience props and DOM sub-element `*Props` bags (content/behavior — not styling).
- **Closed multi-slot:** implement private Parts + context (`slots` from `@pisagor/recipes` `{name}Recipe`); compose in `#region Closed` / shorthand region. Do not export parts or part prop types from the barrel — only `Foo` / `FooProps`.
- Export `Foo` / `FooProps` from the flat file; root barrel re-exports with `export * from "./foo"`.

**Barrel (both):**

- Re-export types, composables, or `RootProvider` only when part of the public API.
- Prefer owner `*Props` (`FooRootProps`, `FooCloseProps`) when wrapping or typing workspace components. Do not use `InstanceType<typeof Foo>["$props"]` for that — reserve instance inference for Ark/DOM primitives that do not export props.

### Do not

- Do not ship two unrelated API models. Shorthand wraps compound — it is not a separate closed model.
- Dual API (compound + shorthand) is per-component only — not every component needs both.
- Do not use `<Foo>` as a composition root when `FooShorthand` is the default export — use `<Foo.Root>`.
- Do not pass a default slot to shorthand exports for manual subpart layout.
- Do not fall back to slots in shorthand (`description ?? $slots.default`, `title ?? children`).
- Do not keep placeholder `tv()` slots (`""`, `[]`) in `@pisagor/recipes` to generate `classNames` keys. Empty strings in `variants` / `compoundVariants` are fine.
- Do not re-export flat `FooPart` siblings from the barrel beside the `Foo.Root` / `Foo.Part` namespace.
- Do not leave a detached flat `FooField` export beside `Foo.Field`.
- Do not author SFCs for public package components.

**Pattern guide:**

| Pattern | Use |
| ------- | --- |
| **Compound + headless** | `{Name}Root` + subparts; Ark Vue primitive; `Object.assign` barrel |
| **Compound + shorthand** | Compound = source of truth; `FooShorthand` or root preset for common cases |
| **Compound barrel** | `Object.assign(FooRoot, { Item, Trigger, … })` at bottom of flat `<name>.ts` (or folder `index.ts`) |
| **Closed + multi-slot recipe** | Single export; import multi-slot `{name}Recipe` from `@pisagor/recipes`; sub-element `classNames` bags |
| **Closed + behavior** | Single export; convenience props; single-element or thin recipe |
| **Closed + primitive wrapper** | Thin styled layer over one headless part |
| **Composition layer** | Composes other package exports; no new primitive |

**Example:**

```ts
export const Foo = Object.assign(FooShorthand, {
  Root: FooRoot,
  Title: FooTitle,
  Description: FooDescription,
  Action: FooAction,
});
```

```vue
<!-- Shorthand (default export) — not a composition root -->
<Foo title="Heads up!" description="…" />

<!-- Composition — always Foo.Root -->
<Foo.Root>
  <Foo.Title>Heads up!</Foo.Title>
  <Foo.Description>…</Foo.Description>
</Foo.Root>
```

In `FooShorthand` render trees, leave a **blank line between each top-level slot** sibling when composing multiple `h(…)` children arrays (same readability rule as React JSX spacing).

---

## File regions

Every `<name>.ts` file uses `#region` blocks in this order. Skip regions that do not apply; never reorder.

| Order | Region | When |
| ----- | ------ | ---- |
| 1 | `Context` | `createSlotRecipeContext` + thin non-style `createContext` (or import from folder `.context.ts`) |
| 2 | `Types` | Props, variant prop types (imported from recipes), item interfaces |
| 3 | `Hooks` | File-local composables not exported from the public surface |
| 4 | `Component` / `Parts` | Single export (`Component`) or two+ parts (`Parts`) — not shorthand/closed compose |
| 5 | `Shorthand` / `Closed` | Preset compose — after all parts (`FooShorthand` or closed `Foo`) |

For **foldered** multi-file components, thin non-style context may live in [`<name>.context.ts`](#context-file-namecontextts). Do **not** add a `#region Variants` — `tv()` recipes live in `@pisagor/recipes`.

There is **no** `#region Display Names` — Vue uses the `name` option on each `defineComponent`.

### Do

- Use **`#region Component`** (singular) when the file exports **one** component.
- Use **`#region Parts`** (plural) when the file exports **two or more** components.
- Use **`#region Shorthand`** when the file exports `FooShorthand` — place it **after** `#region Parts`, not inside it.
- Use **`#region Closed`** for closed multi-slot compose — place it **after** `#region Parts`, not inside it.
- Start at `Types` → `Component` / `Parts` (skip Hooks when none).
- Put content on the line **immediately after** `// #region …` — no blank line after the region marker.
- Put **`// #endregion` on the line immediately after** the region's last statement — no blank line before it.
- Put **one blank line between region blocks** — after `// #endregion`, before the next `// #region`.
- Keep `ArkPart` / small file-private aliases **outside** regions (between Types and Parts), same as existing accordion/alert files.
- Follow [vue.mdc → Setup body order](../vue.mdc) inside each `setup`.

### Do not

- Do not add a `#region Variants` or call `tv()` in component packages — own recipes in `@pisagor/recipes`.
- Do not add an `Exports` region — `Object.assign` / named exports live at the bottom of the flat file (or folder `index.ts`).
- Do not add empty `#region` / `#endregion` pairs — skip regions that have no content.
- Do not declare `export type` / `export interface` props outside `#region Types` — keep every part props type in Types; Parts only contain components.

Inside `Types`, when all apply: sub-element prop types → `{Name}ClassNames` → `{Name}VariantProps` → root props → public interface → preset interfaces (`AccordionPresetItem`, …).

---

## Types + runtime props

Public props are a **dual surface**: a TypeScript `interface` (consumer types / Storybook) and a matching `defineComponent({ props: { … } })` runtime declaration.

### Do

- Export `interface FooProps` when props are part of the public API.
- Prefer extending `@pisagor/props` shared props: `export interface ButtonProps extends BaseButtonProps { … }`. Combine with recipe types only when a shared module does not exist yet (`extends ButtonVariantProps`).
- Use `Omit<…>` when a convenience prop conflicts with an Ark prop signature.
- Prefer extending `@pisagor/props` shared props for `recipe` / variant fields over declaring them locally. When a shared module does not exist yet, extend recipe `{Name}VariantProps` from `@pisagor/recipes`. Document library-owned defaults with TSDoc **`@defaultValue`** matching the recipe `defaultVariants` — [TypeScript Style Guide](../typescript.mdc) (TSDoc only; do not use JSDoc-only `@default`).
- Runtime props: declare every public prop with `PropType<…>`, defaults via `default`, and `type: Boolean` / `Number` / `String` / `Object` / `Array` / `Function` as appropriate.
- Styling entry: use **`class`** (Vue), not `className`. Type as `class?: unknown` (or `ClassValue` when already imported) so object/array class bindings work.
- Multi-slot overrides: `classNames?: VariantClassNames<{Name}RecipeSlot>` from `../internal/types` (or `../../internal/types` from a folder).
- Sub-element bags on shorthand: behavior escape-hatches only — omit ownership of render/styling (`Omit<…, "class">` / no default-slot takeover).

| `Omit` usage | Valid | Invalid |
| --- | --- | --- |
| Convenience prop conflicts with primitive prop | `type SelectRootProps = Omit<ArkSelectRootProps<Item>, "collection" \| "onValueChange">;` | Re-declare `onValueChange` with a different signature beside the Ark type |
| Sub-element prop bags keep ownership of render/styling | `titleProps?: Omit<TitleProps, "class">` | Passing `class` through `titleProps` to fight `classNames` |
| Preserve primitive contracts by default | Extend Ark part props when no conflict | Strip `role` / ARIA without an explicit replacement |

### Do not

- Do not route styling through `*Props` bags — use `classNames` on multi-slot components only; single-element components use `class`.
- Do not type `classNames` as `VariantClassNames<FooRecipeSlot> & { … }` — use `VariantClassNames` only.
- Do not declare runtime `props` keys that are missing from the public interface (or the reverse) for exported components.
- Boolean / presence props: match Ark/DOM names (`disabled`, `open`, `checked`, `clearable`, …). Do not rename headless booleans to `is`/`can`/`should`/`has`. Convenience flags that are not a primitive mirror may use those prefixes (e.g. `isLoading`).

### Form-control shells

Form-control shells default to **`variant: "primary"`**. Resolve as:

```ts
const resolved = {
  surfaceVariant: useFormControlSurface(),
  variant: (variantProp) ?? ("primary" as FormControlVariant),
};
const shellArgs = {
  surfaceVariant: resolved.surfaceVariant,
  variant: resolved.variant,
};
const controlProps = { "data-variant": resolved.variant };
```

- Local `type FormControlVariant = "primary" | "secondary"` — do not import a shared form-control module.
- Import shell recipes from `@pisagor/recipes` (`formControlShellRecipe`, `formControlToggleRecipe`, …).
- Resolve **`surfaceVariant`** from `useFormControlSurface()` (nearest Surface / Frame) so soft fills stay visible on muted chrome.
- Do **not** auto-resolve primary/secondary shell `variant` from Surface context — pass `variant="secondary"` (or `controlVariant` on Clipboard) only when intentionally opting into the quieter shell.

---

## Headless wrapper

Behavior lives in the headless Ark Vue primitive — the styled layer adds visuals only.

### Do

- Type each part per [Types + runtime props](#types--runtime-props).
- On **plain** nodes (`ark.div`, native tags) add `data-scope` / `data-part`; do **not** set them on machine-backed `<XPrimitive.Part>` nodes — Zag already emits them.
- Forward portal / `Teleport`, `lazyMount`, and `unmountOnExit` unchanged — keep Ark defaults; do not set library defaults for those presence props unless the sibling React component already does.
- Keep event bridges thin: Ark `onValueChange: (details) => props.onValueChange?.(details.value)` when the public API exposes unwrapped values.

### Do not

- Do not reimplement keyboard handling, focus trap, or open/close logic.
- Do not drop Ark context components (`XPrimitive.Context`) needed by consumers.

---

## Styling

Recipes (`tv()`) are owned by **`@pisagor/recipes`**. Component packages import them directly; they do not call `tv()`, ship a `#region Variants`, or add `<name>.recipe.ts` shims.

### Consuming recipes

- Import from the recipes barrel: `import { buttonRecipe, type ButtonVariantProps } from "@pisagor/recipes"`.
- Shared form-control shells: `import { formControlShellRecipe, … } from "@pisagor/recipes"`.
- Prefer recipe-exported `{Name}VariantProps` / slot types over re-deriving `VariantProps<typeof …>` when the recipe already exports them.
- Mirror recipe `defaultVariants` in runtime `props.default`; document with TSDoc `@defaultValue`.
- **Multi-part / slot recipes:** wire through [`createSlotRecipeContext`](#slot-recipe-context-createslotrecipecontext) (`withProvider` / `withContext` / `useStyles`). The helper emits `data-scope` / `data-part` / variant `data-*` on the host — do not hand-roll a parallel provide/inject for recipe slots.
- **`cn()`:** one logical concern per string; consumer `class` last (mainly for single-element recipes and thin shells).
- Use **semantic tokens** (`bg-muted`, `text-muted-foreground`).
- **Root** always accepts **`class`** — never `rootClass` / `rootClassName`.
- **Single-element recipes** (top-level `base:`): merge with `cn(fooRecipe({ … }), props.class)` or `fooRecipe({ …, class: props.class })` — no `classNames` prop. The call returns a **string**, not `{ base() }`.
- **Multi-slot recipes** (`slots:`): prefer slot-recipe context; hand-written parts merge via `styles.slots.part({ class: classNames?.part })`; type **`classNames`** as `VariantClassNames<{Name}RecipeSlot>` (`base` is omitted — root styling is always `class`).
- **Root slot:** `slots.base({ class: props.class })` — never `classNames?.base`.
- **Shell + slot:** keep outer `cn` only for a separate shell recipe — `cn(shellRecipe(…), slots.part({ class: classNames?.part }))`.
- Prefer `slots.part({ class })` over `cn(slots.part(), class)`.
- Apply **motion & focus:** `motion-reduce:transition-none!`; `outline-hidden` + `focus-visible:ring-[3px] focus-visible:ring-ring/32`; style `disabled:`, `data-disabled:`, `aria-disabled:` consistently.
- On **plain** styled nodes (and slot-recipe hosts), set **`data-scope="{name}"`** and **`data-part="{part}"`** (root uses `data-part="root"`). On machine-backed Ark parts that already emit them, omit both. Never override those attributes on a primitive part.
- Mirror variant props on root when useful (`data-variant`, `data-size`, `data-shape`) — `withProvider` does this from resolved recipe variants.

### Authoring recipes (`@pisagor/recipes`)

Same rules as [React Component Patterns → Authoring recipes](react-component.mdc#authoring-recipes-pisagorrecipes) — one recipe package for both frameworks.

### Override without a slot

When a part has no recipe slot by design:

1. **Compound part** — pass `class` on `{Name}Part` directly.
2. **Remove** erroneous empty slots from the recipe `tv()` — do not keep placeholders for typing.
3. **Do not** add `*Props.class` bags solely for styling that belongs on `class` / `classNames`.

---

## Accessibility

- Keep ARIA and semantics from the headless primitive.
- Require an accessible name on icon-only controls (`aria-label` or visually hidden text).
- Set `data-state="loading"` / `aria-busy` on loading; disable pointer events.
- Support `aria-invalid` styling on inputs and triggers.

---

## Storybook

- Author `*.stories.ts` in `apps/vue` (not in `packages/vue`). Follow [Storybook](stories.mdc) for story order, escape-hatch props, and sample data.
- Declare `subcomponents` on meta for compound components (`Root`, `Item`, …).
- Prefer `render: () => ({ components: { … }, template: \`…\` })` or `h()` render factories — match sibling stories in the folder.
- Mirror the React sibling story (title, `parameters.metadata`, docs copy) when porting.
