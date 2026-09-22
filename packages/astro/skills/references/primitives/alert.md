# Pisagor Astro — Alert

## When to use

- Surfaces status, warning, or actionable feedback within page flow.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { Alert } from "@pisagor/astro/alert"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/alert/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/alert` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

