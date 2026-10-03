---
name: react
description: >-
  Pisagor React components (`@pisagor/react` only). Use when implementing or
  debugging React overlays, collection controls, layout chrome, or migrating
  Radix/shadcn markup onto `@pisagor/react` primitives. Prefer MCP
  (`bunx @pisagor/mcp`) when available. Do not use for forms, recipes,
  tokens, utils, or other frameworks.
license: MIT
compatibility: Requires Tailwind CSS v4 and @ark-ui/react.
metadata:
  author: tingoon
  package: "@pisagor/react"
---

# Pisagor React

Skill for `@pisagor/react` components only. Component details live under `references/`; runnable examples under `assets/examples/<component>/`.

Other packages have their own skills. Do not duplicate their docs here:

- `@pisagor/recipes`
- `@pisagor/utils`
- `@pisagor/tokens`
- `@pisagor/react-form`

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/react/
  SKILL.md
  references/          # registry, rules, primitives/
  assets/examples/     # <component>/*.tsx
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
Each tab is a real route: `/react/components/<id>/<tab>` (e.g. `…/tooltip/usage`).
`/react/components/<id>` redirects to the default tab.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The component id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Principles

1. Registry — [component-registry.md](references/component-registry.md) (`@pisagor/react` only).
2. Examples — `assets/examples/<name>/` or MCP `get_example`.
3. Styling — [styling.md](references/rules/styling.md). Tokens, `cn()`, and recipes are other skills (see above).
4. Composition / migration — `references/rules/`. Forms: prefer `@pisagor/react-form` — see that package’s skill. Do not document field APIs here.

## Workflow

1. `references/primitives/<name>/` when present (legacy: `<name>.md`).
2. `assets/examples/<name>/` or MCP.
3. Prefer barrel `import { X } from "@pisagor/react"`; heavy only via subpath (`data-grid`, `data-table`, `phone-input`, `rich-text-editor`).

## Output checklist

- [ ] Imports from `@pisagor/react`
- [ ] Matches examples / API model
- [ ] `className` for layout; variants for look
