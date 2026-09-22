# Pisagor Astro — Badge

## When to use

- Labels content with a compact status, category, or count so users can scan it quickly.
- Public API model: **closed**.

## Canonical import

```ts
import { Badge } from "@pisagor/astro/badge"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/badge/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/badge` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

