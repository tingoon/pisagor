---
name: recipes
description: >-
  Pisagor `@pisagor/recipes` — shared Tailwind Variants (`tv()`) recipes for component look.
  Use when styling Pisagor primitives, extending variants, or avoiding app-level `tv()` for
  library appearance. Ships inside the npm package for Intent. Prefer MCP for component APIs;
  use this skill when editing or consuming recipes.
compatibility: Requires tailwind-variants and @pisagor/recipes.
---

# @pisagor/recipes

Shared `tv()` recipes — single source of visual variants for `@pisagor/react`, `@pisagor/vue`, `@pisagor/solid`, `@pisagor/svelte`, `@pisagor/astro`.

## Install

```bash
bun add @pisagor/recipes
```

## Import

```ts
import { buttonRecipe } from "@pisagor/recipes/button";
```

## Rules

- **Library look stays in recipes** — no local `tv()` / duplicate variant maps in framework packages.
- Framework components only wire `recipe` → `class` / slots; they do not redefine appearance.
- Layout / one-off consumer spacing → `className` / `class` on the component, not a new recipe.
- Add or change variants in `@pisagor/recipes/<name>`, then use from framework packages.
- Prefer a recipe even for minimal / empty `base` when a component exposes a class surface (e.g. `scrollspy`).

## Gold pattern

```ts
import { buttonRecipe } from "@pisagor/recipes/button";

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

`@pisagor/recipes/<name>` → `src/<name>.ts`
