# Pisagor Astro — Card

## When to use

- Groups related content in a bordered surface with optional header and footer.
- Public API model: **compound**.

## Canonical import

```ts
import { Card } from "@pisagor/astro/card"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/card/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/card` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

