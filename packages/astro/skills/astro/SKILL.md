---
name: astro
description: >-
  Pisagor Astro components (`@pisagor/astro` only — static subset). Use when
  implementing or debugging Astro layout and presentational UI. Ships inside the
  npm package for Intent. Prefer MCP (`bunx @pisagor/mcp`) when available.
  Do not use for interactive forms, charts, or other UI stacks.
compatibility: >-
  Requires Tailwind CSS v4.
  For Astro apps consuming @pisagor/astro or this monorepo.
---

# Pisagor Astro

Astro-only guide for `@pisagor/astro` (static subset). There is no `@pisagor/astro-form` package.

Other packages have their own skills. Do not duplicate their docs here:

- `@pisagor/recipes` → `packages/recipes/skills/recipes`
- `@pisagor/utils` → `packages/utils/skills/utils`
- `@pisagor/tokens` → `packages/tokens/skills/tokens`
- Forms and charts for other stacks live in their own packages — do not document them here.

**Recommended:** `bunx @pisagor/mcp`.

This skill ships in the `@pisagor/astro` package (Intent). `skills add` is supported but not recommended — version pinning is the consumer’s responsibility.

## Layout

```
skills/astro/
  SKILL.md
  references/
  assets/examples/
```

## Principles

1. **Use existing `@pisagor/astro` components first.** See [`references/component-registry.md`](references/component-registry.md).
2. **Compose, don’t reinvent.** Prefer MCP `get_example` or `assets/examples/<name>/`.
3. **Variants before custom classes.** [`references/rules/styling.md`](references/rules/styling.md).
4. **Semantic colors** — not raw palette utilities. Tokens: `packages/tokens/skills/tokens`.
5. **Recipes in `@pisagor/recipes`** — no app-level `tv()` for library look. See `packages/recipes/skills/recipes`.

## Source of truth

| Resource | Path |
| -------- | ---- |
| Components | `@pisagor/astro` → `src/components/<name>/` |
| Examples | `assets/examples/<name>/` or MCP `get_example` / `list_examples` |

## Critical rules

- Styling → [`references/rules/styling.md`](references/rules/styling.md)
- Forms → [`references/rules/forms.md`](references/rules/forms.md) (static subset only)
- Composition → [`references/rules/composition.md`](references/rules/composition.md)
- Migration → [`references/rules/migration.md`](references/rules/migration.md)

## Workflow

1. Open the registry + `./references/primitives/<name>.md`.
2. Prefer `assets/examples/<name>/` or MCP `get_example`.
3. Confirm exports from `@pisagor/astro`.
4. Self-check critical rules.

## Install

See [`references/packages.md`](references/packages.md).

## High-composition guides

- `./references/primitives/button.md`
- `./references/primitives/card.md`

## Output checklist

- [ ] Imports from `@pisagor/astro`
- [ ] Composition matches examples / API model
- [ ] `class` for layout; variants for look
- [ ] Critical rules satisfied
