# Pisagor Astro — Kbd

## When to use

- Displays keyboard shortcuts and key combinations.
- Public API model: **compound**.

## Canonical import

```ts
import { Kbd } from "@pisagor/astro/kbd"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/kbd/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/kbd` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

