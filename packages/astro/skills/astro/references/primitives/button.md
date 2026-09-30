# Pisagor Astro — Button

## When to use

- Triggers an action or navigation with clear hierarchy and loading feedback.
- Public API model: **closed**.

## Canonical import

```ts
import { Button } from "@pisagor/astro/button"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/button/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/button` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

