---
name: react
description: >-
  Pisagor UI for React (@pisagor/react, react-form, react-charts). Use when
  implementing or debugging React overlays, forms, collection controls, layout
  chrome, Tailwind v4 tokens, or migrating Radix/shadcn to Pisagor React.
  Prefer MCP (`bunx @pisagor/mcp`) when available. Do not use for other frameworks.
license: MIT
compatibility: Requires Tailwind CSS v4 and @ark-ui/react.
metadata:
  author: tingoon
  package: "@pisagor/react"
---

# Pisagor React

One skill for the React package. Component details live under `references/`; runnable examples under `assets/examples/<component>/`.

| Package | Role |
| ------- | ---- |
| `@pisagor/react` | Components |
| `@pisagor/recipes` | Shared `tv()` recipes |
| `@pisagor/tokens` | Design tokens / CSS |
| `@pisagor/utils` | `cn()` helpers |
| `@pisagor/react-form` | Form fields |
| `@pisagor/react-charts` | Charts |

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/react/
  SKILL.md
  references/          # registry, rules, primitives/<name>.md
  assets/examples/     # <component>/*.tsx (SSOT for docs + Storybook examples export)
```

### Primitive doc SSOT (`references/primitives/<id>.md`)

YAML frontmatter + markdown body. Docs pages import the file as an Astro module (`Content as SkillContent`, `frontmatter`, `getHeadings`) — alias `Content` to avoid clashing with example exports named `Content`.

Frontmatter fields:

- `title`, `description`
- `api`, `taxonomy`, `aliases?`
- `packageName?` — only when the component is not from `@pisagor/react`; that is the default.
- `examples[]` (`id`, `title`, `exportName`)

The component id is the primitive markdown filename without `.md`; do not duplicate it in frontmatter. Do not put `importStatement` or `recipe` in frontmatter. Installation imports are read from the body's `## Import` code fence, with a package/id-derived fallback in the docs site.

Do **not** put `whenToUse` in frontmatter — guidance lives in the body as `## When to use`.

Body should include `## When to use`, `## Import`, and short styling/API notes (see `accordion.md`).

Examples live under `assets/examples/<id>/` and are imported in docs via `#/react/examples/<id>` (and re-exported from `@pisagor/react/<id>/examples`).

## Principles

1. Registry — [component-registry.md](references/component-registry.md).
2. Examples — `assets/examples/<name>/` or MCP `get_example`.
3. Styling — [styling.md](references/rules/styling.md).
4. Forms / composition / migration — `references/rules/`.

## Workflow

1. `references/primitives/<name>.md` when present.
2. `assets/examples/<name>/` or MCP.
3. Confirm `@pisagor/react/<name>`.

## Output checklist

- [ ] Imports from `@pisagor/react`
- [ ] Matches examples / API model
- [ ] `className` for layout; variants for look
