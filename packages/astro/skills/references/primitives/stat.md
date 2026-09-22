# Pisagor Astro — Stat

## When to use

- Highlights a key metric with an optional label, description, and trend.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { Stat } from "@pisagor/astro/stat"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/stat/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/stat` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

