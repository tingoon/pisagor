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

`@pisagor/svelte` components only. Labeled fields live in `@pisagor/svelte-form`.

Other packages:

- `@pisagor/recipes` → `packages/recipes/skills/recipes`
- `@pisagor/utils` → `packages/utils/skills/utils`
- `@pisagor/tokens` → `packages/tokens/skills/tokens`
- `@pisagor/svelte-form` → `packages/svelte-form/skills/svelte-form`

## Layout

```
skills/svelte/
  SKILL.md
  references/          # rules, primitives/<name>.md
  assets/examples/<component>/
```

Components: `src/components/<name>/` (heavy modules under `src/<name>/`).

## Critical rules

- Styling → [`references/rules/styling.md`](references/rules/styling.md) (`class`, gap, tokens, no overlay z-index)
- Forms → [`references/rules/forms.md`](references/rules/forms.md) (prefer `@pisagor/svelte-form`; do not document field APIs here)
- Composition → [`references/rules/composition.md`](references/rules/composition.md)
- Migration → [`references/rules/migration.md`](references/rules/migration.md)

## Rules

- Import light components from `@pisagor/svelte`; heavy (`data-grid`, `data-table`, `phone-input`, `rich-text-editor`) from `@pisagor/svelte/<name>`.
- Class prop: `class`. Layout via `class`; look via `variant` / `size`.
- Do not call `tv()` in app code — recipes are `@pisagor/recipes`.
- Use `cn()` from `@pisagor/utils` when merging classes.
- Prefer examples in `assets/examples/<name>/` or MCP `get_example`.
