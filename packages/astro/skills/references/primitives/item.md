# Pisagor Astro — Item

## When to use

- Lays out a row of media, title, description, and actions for lists, menus, and pickers.
- Public API model: **compound**.

## Canonical import

```ts
import { Item } from "@pisagor/astro/item"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/item/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/item` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

