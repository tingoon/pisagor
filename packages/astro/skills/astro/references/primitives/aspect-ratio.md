# Pisagor Astro — AspectRatio

## When to use

- Keeps media and embedded content at a consistent width-to-height ratio as the layout changes.
- Public API model: **closed**.

## Canonical import

```ts
import { AspectRatio } from "@pisagor/astro/aspect-ratio"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/aspect-ratio/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/aspect-ratio` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

