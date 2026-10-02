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
  references/          # registry, rules, primitives/<name>.md
  assets/examples/     # <component>/*.tsx
```

### Primitive docs (`references/primitives/<id>.md`)

YAML frontmatter (`title`, `description`, `api`, `taxonomy`, optional `aliases`) plus a markdown body. The component id is the filename without `.md`.

Body should include `## When to use`, `## Import`, and short styling/API notes. Live demos use `:::example ExportName` containers (see `accordion.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Principles

1. Registry — [component-registry.md](references/component-registry.md) (`@pisagor/react` only).
2. Examples — `assets/examples/<name>/` or MCP `get_example`.
3. Styling — [styling.md](references/rules/styling.md). Tokens, `cn()`, and recipes are other skills (see above).
4. Composition / migration — `references/rules/`. Forms: prefer `@pisagor/react-form` — see that package’s skill. Do not document field APIs here.

## Workflow

1. `references/primitives/<name>.md` when present.
2. `assets/examples/<name>/` or MCP.
3. Prefer barrel `import { X } from "@pisagor/react"`; heavy only via subpath (`data-grid`, `data-table`, `phone-input`, `rich-text-editor`).

## Output checklist

- [ ] Imports from `@pisagor/react`
- [ ] Matches examples / API model
- [ ] `className` for layout; variants for look
