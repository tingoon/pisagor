---
name: vue
description: >-
  Pisagor Vue components (`@pisagor/vue` only). Use when implementing or debugging
  Vue overlays, collection controls, and layout chrome, or migrating Radix/shadcn
  examples onto `@pisagor/vue`. Ships inside the npm package for Intent. Prefer MCP
  (`bunx @pisagor/mcp`) when available. Do not use for forms, recipes,
  tokens, utils, or other frameworks.
compatibility: >-
  Requires Tailwind CSS v4 and @ark-ui/vue.
  For Vue apps consuming @pisagor/vue or this monorepo.
---

# Pisagor Vue

Vue-only guide for `@pisagor/vue` components (Ark UI + Tailwind v4).

Other packages have their own skills. Do not duplicate their docs here:

- `@pisagor/recipes` → `packages/recipes/skills/recipes`
- `@pisagor/utils` → `packages/utils/skills/utils`
- `@pisagor/tokens` → `packages/tokens/skills/tokens`
- `@pisagor/vue-form` → `packages/vue-form/skills/vue-form`

**Recommended:** `bunx @pisagor/mcp`.

This skill ships in the `@pisagor/vue` package (Intent). `skills add` is supported but not recommended — version pinning is the consumer’s responsibility.

## Layout

```
skills/vue/
  SKILL.md
  references/          # registry, rules, primitives/<name>.md
  assets/examples/     # <component>/* (docs via #/vue/examples/<id>; not a public package export)
```

## Principles

1. **Use existing `@pisagor/vue` components first.** See [`references/component-registry.md`](references/component-registry.md).
2. **Compose, don’t reinvent.** Prefer MCP `get_example` or `assets/examples/<name>/`.
3. **Variants before custom classes.** [`references/rules/styling.md`](references/rules/styling.md).
4. **Semantic colors** — not raw palette utilities. Tokens: `packages/tokens/skills/tokens`.
5. **Recipes in `@pisagor/recipes`** — no app-level `tv()` for library look. See `packages/recipes/skills/recipes`.

## Source of truth

| Resource | Path |
| -------- | ---- |
| Components | `@pisagor/vue` → `src/components/<name>/` (heavy modules under `src/<name>/`) |
| Examples | `assets/examples/<name>/` or MCP `get_example` / `list_examples` |

## Critical rules

- Styling → [`references/rules/styling.md`](references/rules/styling.md) (`class`, gap, tokens, no overlay z-index)
- Forms → [`references/rules/forms.md`](references/rules/forms.md) (prefer `@pisagor/vue-form`; do not document field APIs here)
- Composition → [`references/rules/composition.md`](references/rules/composition.md)
- Migration → [`references/rules/migration.md`](references/rules/migration.md)

## Workflow

1. Open the registry + `./references/primitives/<name>.md` for an `@pisagor/vue` primitive.
2. Prefer `assets/examples/<name>/` or MCP `get_example` / `get_component_source`.
3. Confirm exports from `@pisagor/vue`.
4. Self-check a11y and critical rules.

## Install

See [`references/packages.md`](references/packages.md).

## High-composition guides

- `./references/primitives/dialog.md`
- `./references/primitives/sheet.md`
- `./references/primitives/dropdown-menu.md`
- `./references/primitives/context-menu.md`
- `./references/primitives/popover.md`
- `./references/primitives/select.md`
- `./references/primitives/combobox.md`
- `./references/primitives/field.md`
- `./references/primitives/sidebar.md`
- `./references/primitives/button.md`
- `./references/primitives/card.md`

## Output checklist

- [ ] Imports from `@pisagor/vue`
- [ ] Composition matches examples / API model
- [ ] `class` for layout; variants for look
- [ ] Critical rules satisfied
