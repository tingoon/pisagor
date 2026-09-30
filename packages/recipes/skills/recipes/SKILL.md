---
name: recipes
description: >-
  Pisagor `@pisagor/recipes` — shared Tailwind Variants (`tv()`) recipes for component look.
  Use when styling Pisagor primitives, extending variants, or avoiding app-level `tv()` for
  library appearance. Ships inside the npm package for Intent. Prefer MCP for component APIs;
  use this skill when editing or consuming recipes.
compatibility: >-
  Requires tailwind-variants. Consumers of @pisagor/recipes or this monorepo.
---

# @pisagor/recipes

Shared `tv()` recipes — single source of visual variants for `@pisagor/react`, `@pisagor/vue`, `@pisagor/astro`.

## Install

```bash
bun add @pisagor/recipes
```

## Import

```ts
import { buttonRecipe } from "@pisagor/recipes/button";
```

## Rules

- **Library look stays in recipes** — no app-level `tv()` that duplicates package appearance.
- Layout / one-off spacing → `className` / `class` on the component, not a new recipe.
- Add or change variants in `@pisagor/recipes/<name>`, then use from framework packages.

## Source

`@pisagor/recipes/<name>` → `src/<name>.ts`
