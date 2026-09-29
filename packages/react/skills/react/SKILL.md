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
  assets/examples/     # <component>/*.tsx (Accordion is the reference)
```

Component page meta + prose SSOT: `references/primitives/<name>.md` (YAML frontmatter + body). Docs site renders that file; examples stay under `assets/examples/<name>/`.

## Principles

1. Registry — [component-registry.md](references/component-registry.md).
2. Examples — `assets/examples/<name>/` or MCP `get_example`.
3. Styling — [styling.md](references/rules/styling.md).
4. Forms / composition / migration — `references/rules/`.

## Workflow

1. `references/primitives/<name>.md` when present.
2. `assets/examples/<name>/` or MCP.
3. Confirm `@pisagor/react/<name>` (+ `docs` export when present).

## Output checklist

- [ ] Imports from `@pisagor/react`
- [ ] Matches examples / API model
- [ ] `className` for layout; variants for look
