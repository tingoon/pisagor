---
name: solid
description: >-
  Pisagor Solid components (`@pisagor/solid` only). Use when implementing or
  debugging Solid UI built on Ark UI and Tailwind v4. Examples live in this
  skill (`assets/examples/`). Do not use for other frameworks, recipes, tokens,
  or utils — those packages have their own skills.
compatibility: Requires Tailwind CSS v4 and @ark-ui/solid.
metadata:
  package: "@pisagor/solid"
---

# @pisagor/solid

`@pisagor/solid` components only. There is no separate `solid-form` or `solid-charts` package; `Field` in this package stays here.

Other packages:

- `@pisagor/recipes` → `packages/recipes/skills/recipes`
- `@pisagor/utils` → `packages/utils/skills/utils`
- `@pisagor/tokens` → `packages/tokens/skills/tokens`
- React / Vue (and their form and chart packages) → `packages/<name>/skills/<name>`

## Layout

```
skills/solid/
  SKILL.md
  assets/examples/<component>/
```

Components: `src/components/<name>/` (heavy modules under `src/<name>/`).

## Rules

- Import from `@pisagor/solid`.
- Class prop: `class`. Layout via `class`; look via `variant` / `size`.
- Do not call `tv()` in app code — recipes are `@pisagor/recipes`.
- Use `cn()` from `@pisagor/utils` when merging classes.
- Prefer examples in `assets/examples/<name>/` or MCP `get_example`.
