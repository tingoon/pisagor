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

`@pisagor/solid` components only. Labeled fields live in `@pisagor/solid-form`.

Other packages:

- `@pisagor/recipes`
- `@pisagor/utils`
- `@pisagor/tokens`
- `@pisagor/solid-form`

## Layout

```
skills/solid/
  SKILL.md
  references/          # rules, primitives/
  assets/examples/<component>/
```

Components: `src/components/<name>/` (heavy modules under `src/<name>/`).

### Primitive docs

Prefer the **folder** form (tabs on the docs site):

```
references/primitives/<id>/
  metadata.md    # YAML frontmatter only
  design.md      # When to use (Prefer / Avoid)
  develop.md     # Import, Anatomy, ## Examples (:::example), a11y notes
```

Docs tabs: **Develop** (default) → **Design**.
Routes: `/solid/components/<id>/develop` and `/design`. Legacy `/usage` and `/examples` redirect to develop.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The component id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Critical rules

- Styling → [`references/rules/styling.md`](references/rules/styling.md) (`class`, gap, tokens, no overlay z-index)
- Forms → [`references/rules/forms.md`](references/rules/forms.md) (prefer `@pisagor/solid-form`; do not document field APIs here)
- Composition → [`references/rules/composition.md`](references/rules/composition.md)
- Migration → [`references/rules/migration.md`](references/rules/migration.md)

## Rules

- Import light components from `@pisagor/solid`; heavy (`data-grid`, `data-table`, `phone-input`, `rich-text-editor`) from `@pisagor/solid/<name>`.
- Class prop: `class`. Layout via `class`; look via `variant` / `size`.
- Do not call `tv()` in app code — recipes are `@pisagor/recipes`.
- Use `cn()` from `@pisagor/utils` when merging classes.
- Prefer examples in `assets/examples/<name>/` or MCP `get_example`.
