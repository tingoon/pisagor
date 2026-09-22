# Pisagor Astro — Surface

## When to use

- Provides nested background surfaces that step through tonal levels.
- Public API model: **closed**.

## Canonical import

```ts
import { Surface } from "@pisagor/astro/surface"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/surface/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/surface` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

