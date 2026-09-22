# Pisagor Astro — DataList

## When to use

- Presents labeled values in a compact definition list.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { DataList } from "@pisagor/astro/data-list"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/data-list/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/data-list` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

