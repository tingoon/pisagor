---
name: react
description: >-
  Pisagor UI skill for React (@pisagor/react, react-form, react-charts). Use when implementing or debugging
  react overlays, forms, collection controls, layout chrome, Tailwind v4 tokens,
  or migrating Radix/shadcn examples to Pisagor React. Ships inside the npm package for Intent. Prefer MCP
  (`bunx @pisagor/mcp`) when available; use this skill when MCP is unavailable or the user does not want @pisagor/mcp.
  Do not use for other frameworks — see `vue`, `astro`.
compatibility: >-
  Requires Tailwind CSS v4 and @ark-ui/react.
  For react apps consuming @pisagor/react or this monorepo.
---

# Pisagor React

React-only guide for Pisagor (Ark UI + Tailwind v4). Sibling skills: `vue`, `astro`.

| Package | Role |
| ------- | ---- |
| `@pisagor/react` | UI primitives |
| `@pisagor/recipes` | Shared `tv()` recipes |
| `@pisagor/tokens` | Design tokens / CSS |
| `@pisagor/utils` | `cn()` helpers |
| `@pisagor/react-form` | Form field compositions |
| `@pisagor/react-charts` | Charts |

**Recommended:** `bunx @pisagor/mcp`.

This skill ships in the `@pisagor/react` package (Intent). `skills add` is supported but not recommended — version pinning is the consumer’s responsibility.

## Principles

1. **Use existing components first.** See [`references/component-registry.md`](references/component-registry.md).
2. **Compose, don’t reinvent.** Prefer MCP `get_example` for composition examples.
3. **Variants before custom classes.** [`references/rules/styling.md`](references/rules/styling.md).
4. **Semantic colors** — not raw palette utilities.
5. **Recipes in `@pisagor/recipes`** — no app-level `tv()` for library look.

## Source of truth

| Resource | Path |
| -------- | ---- |
| Components | `@pisagor/react` → `src/components/<name>/` |
| Heavy modules | `@pisagor/react/{data-grid,data-table,phone-input,rich-text-editor}` |
| Examples | MCP `get_example` / `list_examples` |
| Recipes | `@pisagor/recipes/<name>` |

## Critical rules

- Styling → [`references/rules/styling.md`](references/rules/styling.md) (`className`, gap, tokens, no overlay z-index)
- Forms → [`references/rules/forms.md`](references/rules/forms.md)
- Composition → [`references/rules/composition.md`](references/rules/composition.md)
- Migration → [`references/rules/migration.md`](references/rules/migration.md)

## Workflow

1. Open the registry + `./references/primitives/<name>.md`.
2. Prefer MCP `get_example` / `get_component_source` for that component.
3. Confirm exports from the package index / subpath.
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

- [ ] Imports from `@pisagor/react` (correct framework)
- [ ] Composition matches MCP examples / API model
- [ ] `className` for layout; variants for look
- [ ] Critical rules satisfied
