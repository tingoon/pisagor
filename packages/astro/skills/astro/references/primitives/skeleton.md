# Pisagor Astro — Skeleton

## When to use

- Placeholders that reserve space while content is loading.
- Public API model: **compound**.

## Canonical import

```ts
import { Skeleton } from "@pisagor/astro/skeleton"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/skeleton/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/skeleton` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

