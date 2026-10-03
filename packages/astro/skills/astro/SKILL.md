---
name: astro
description: >-
  Pisagor Astro components (`@pisagor/astro` only — static subset). Use when
  implementing or debugging Astro layout and presentational UI. Ships inside the
  npm package for Intent. Prefer MCP (`bunx @pisagor/mcp`) when available.
  Do not use for interactive forms or other UI stacks.
compatibility: >-
  Requires Tailwind CSS v4.
---

# Pisagor Astro

Astro-only guide for `@pisagor/astro` (static subset). There is no `@pisagor/astro-form` package.

Other packages have their own skills. Do not duplicate their docs here:

- `@pisagor/recipes`
- `@pisagor/utils`
- `@pisagor/tokens`
- Forms for other stacks live in their own packages — do not document them here.

**Recommended:** `bunx @pisagor/mcp`.

This skill ships in the `@pisagor/astro` package (Intent). `skills add` is supported but not recommended — version pinning is the consumer’s responsibility.

## Layout

```
skills/astro/
  SKILL.md
  references/          # registry, rules, primitives/
  assets/examples/     # <component>/*
```

### Primitive docs

Prefer the **folder** form (tabs on the docs site):

```
references/primitives/<id>/
  metadata.md    # YAML frontmatter only (title, description, api, taxonomy, aliases?)
  design.md      # When to use (Prefer / Avoid)
  usage.md       # Recommended API, Import, Anatomy
  examples.md    # ### titles + :::example ExportName
  develop.md     # Accessibility / keyboard (Props table is appended by the docs app)
```

Docs tabs (order): **Examples** → **Usage** → **Design** → **Develop**.
Each tab is a real route: `/astro/components/<id>/<tab>` (e.g. `…/button/usage`).
`/astro/components/<id>` redirects to the default tab.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The component id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Principles

1. **Use existing `@pisagor/astro` components first.** See [`references/component-registry.md`](references/component-registry.md).
2. **Compose, don’t reinvent.** Prefer MCP `get_example` or `assets/examples/<name>/`.
3. **Variants before custom classes.** [`references/rules/styling.md`](references/rules/styling.md).
4. **Semantic colors** — not raw palette utilities. Tokens: `@pisagor/tokens`.
5. **Recipes in `@pisagor/recipes`** — no app-level `tv()` for library look.

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

1. Open the registry + `./references/primitives/<name>/` (legacy: `<name>.md`).
2. Prefer `assets/examples/<name>/` or MCP `get_example`.
3. Confirm exports from `@pisagor/astro`.
4. Self-check critical rules.

## Install

See [`references/packages.md`](references/packages.md).

## High-composition guides

- `./references/primitives/button/`
- `./references/primitives/card/`

## Output checklist

- [ ] Imports from `@pisagor/astro`
- [ ] Composition matches examples / API model
- [ ] `class` for layout; variants for look
- [ ] Critical rules satisfied
