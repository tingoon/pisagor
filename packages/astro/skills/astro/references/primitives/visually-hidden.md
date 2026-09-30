# Pisagor Astro — VisuallyHidden

## When to use

- Hides content visually while keeping it available to assistive technology.
- Public API model: **closed**.

## Canonical import

```ts
import { VisuallyHidden } from "@pisagor/astro/visually-hidden"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/visually-hidden/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/visually-hidden` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

