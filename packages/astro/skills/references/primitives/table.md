# Pisagor Astro — Table

## When to use

- Displays tabular data with semantic table structure and styling.
- Public API model: **compound**.

## Canonical import

```ts
import { Table } from "@pisagor/astro/table"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/table/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/table` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

