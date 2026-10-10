---
name: recipes
description: >-
  Pisagor `@pisagor/recipes` / `@pisagor/presets` — shared Tailwind Variants (`tv()`) recipes
  for component look. Use when styling Pisagor primitives, extending variants, or avoiding
  app-level `tv()` for library appearance. Prefer MCP for component APIs; use this skill when
  editing or consuming recipes.
compatibility: Requires tailwind-variants and @pisagor/recipes.
---

# @pisagor/recipes & @pisagor/presets

Shared `tv()` recipes — visual variants for `@pisagor/react`, `@pisagor/vue`, `@pisagor/solid`, `@pisagor/svelte`, `@pisagor/astro`.

- **`@pisagor/presets` `src/contracts/`** — recipe modules
- **`@pisagor/presets/pisagor`** — default skin entry (re-exports contracts)
- **`@pisagor/recipes`** — stable import; re-exports `presets/pisagor`

## Install

```bash
bun add @pisagor/recipes
```

## Import

```ts
import { buttonRecipe } from "@pisagor/recipes";
```

Block demo recipes live in the docs app (`apps/docs/src/recipes/blocks/`), not in these packages. Import them as `#/recipes/blocks/<name>` from story/docs apps.

## Rules

- **Library look stays in presets** — no local `tv()` / duplicate variant maps in framework packages.
- Framework components only wire `recipe` → `class` / slots; they do not redefine appearance.
- Layout / one-off consumer spacing → `className` / `class` on the component, not a new recipe.
- Add or change variants in `@pisagor/presets` (`src/contracts/<name>.ts`), consumed via `@pisagor/recipes`.
- Prefer a recipe even for minimal / empty `base` when a component exposes a class surface (e.g. `scrollspy`).

## Gold pattern

```ts
import { buttonRecipe } from "@pisagor/recipes";

export function Button({ recipe = buttonRecipe, className, ...rest }) {
  const slots = recipe({ /* variants */ });
  return <button className={slots.base({ className })} {...rest} />;
}
```

## Behavior-only exceptions (no recipe)

These have **no className/style surface** of their own (re-exports, context, or thin wrappers over another styled component). Do not add empty recipes unless a class surface appears later:

| Component | Reason |
| --- | --- |
| `autocomplete` | Thin Combobox preset; styles via `combobox` recipe |
| `alert-dialog` | Dialog preset; styles via `dialog` recipe (`alertBody` slot + re-export module) |
| `client-only` | Ark re-export; no DOM styles |
| `download-trigger` | Ark re-export; no DOM styles |
| `format` | Text formatting primitives; no class surface |
| `presence` | Ark re-export; no DOM styles |
| `provider` | Context + toaster mount; no root styles |

## Source

`@pisagor/recipes` → `@pisagor/presets/pisagor` → `packages/presets/src/contracts/<name>.ts`  
Block recipes → `apps/docs/src/recipes/blocks/<name>.ts`
