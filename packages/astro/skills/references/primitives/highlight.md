# Pisagor Astro — Highlight

## When to use

- Emphasizes matching words inside text so search results and queries are easier to spot.
- Public API model: **closed**.

## Canonical import

```ts
import { Highlight } from "@pisagor/astro/highlight"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/highlight/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/highlight` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

