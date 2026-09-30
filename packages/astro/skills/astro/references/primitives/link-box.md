# Pisagor Astro — LinkBox

## When to use

- Makes an entire card or tile clickable while keeping nested buttons usable underneath.
- Public API model: **compound**.

## Canonical import

```ts
import { LinkBox } from "@pisagor/astro/link-box"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/link-box/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/link-box` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

