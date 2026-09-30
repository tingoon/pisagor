---
name: svelte
description: >-
  Pisagor Svelte components (`@pisagor/svelte` only). Use when implementing or
  debugging Svelte UI built on Ark UI and Tailwind v4. Examples live in this
  skill (`assets/examples/`). Do not use for other frameworks, recipes, tokens,
  or utils — those packages have their own skills.
compatibility: Requires Tailwind CSS v4 and @ark-ui/svelte.
metadata:
  package: "@pisagor/svelte"
---

# @pisagor/svelte

`@pisagor/svelte` components only. There is no separate `svelte-form` or `svelte-charts` package; `Field` in this package stays here.

Other packages:

- `@pisagor/recipes` → `packages/recipes/skills/recipes`
- `@pisagor/utils` → `packages/utils/skills/utils`
- `@pisagor/tokens` → `packages/tokens/skills/tokens`
- React / Vue (and their form and chart packages) → `packages/<name>/skills/<name>`

## Layout

```
skills/svelte/
  SKILL.md
  assets/examples/<component>/
```

Components: `src/components/<name>/` (heavy modules under `src/<name>/`).

## Rules

- Import from `@pisagor/svelte`.
- Class prop: `class`. Layout via `class`; look via `variant` / `size`.
- Do not call `tv()` in app code — recipes are `@pisagor/recipes`.
- Use `cn()` from `@pisagor/utils` when merging classes.
- Prefer examples in `assets/examples/<name>/` or MCP `get_example`.
