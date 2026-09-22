# Pisagor Astro — Prose

## When to use

- Styles long-form HTML content with readable typography defaults.
- Public API model: **closed**.

## Canonical import

```ts
import { Prose } from "@pisagor/astro/prose"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/prose/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/prose` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

