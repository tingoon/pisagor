---
name: react
description: >-
  Pisagor React components (`@pisagor/react` only). Use when implementing or
  debugging React overlays, collection controls, layout chrome, or migrating
  Radix/shadcn markup onto `@pisagor/react` primitives. Prefer MCP
  (`bunx @pisagor/mcp`) when available. Do not use for forms, charts, recipes,
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

- `@pisagor/recipes` → `packages/recipes/skills/recipes`
- `@pisagor/utils` → `packages/utils/skills/utils`
- `@pisagor/tokens` → `packages/tokens/skills/tokens`
- `@pisagor/react-form` → `packages/react-form/skills/react-form`
- `@pisagor/react-charts` → `packages/react-charts/skills/react-charts`

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/react/
  SKILL.md
  references/          # registry, rules, primitives/<name>.md
  assets/examples/     # <component>/*.tsx (SSOT for docs + Storybook via #/react/examples)
```

### Primitive doc SSOT (`references/primitives/<id>.md`)

YAML frontmatter + markdown body. Docs pages import the file as an Astro module (`Content as SkillContent`, `frontmatter`, `getHeadings`) — alias `Content` to avoid clashing with example exports named `Content`.

Frontmatter fields:

- `title`, `description`
- `api`, `taxonomy`, `aliases?`

Do **not** put `examples` in frontmatter. Live demos are declared in the body with a closed `:::example ExportName` / `:::` container (anywhere; optional `### Title` / short prose above for TOC). See `accordion.md`.

Only `@pisagor/react` primitives belong in this folder. The component id is the primitive markdown filename without `.md`; do not duplicate it in frontmatter. Do not put `importStatement` or `recipe` in frontmatter. Installation imports are read from the body's `## Import` code fence, with a package/id-derived fallback in the docs site.

Do **not** put `whenToUse` in frontmatter — guidance lives in the body as `## When to use`.

Body should include `## When to use`, `## Import`, and short styling/API notes (see `accordion.md`).

Example sources live under `assets/examples/<id>/` and are imported in docs via `#/react/examples/<id>` (tsconfig path alias; not a public package export).

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
