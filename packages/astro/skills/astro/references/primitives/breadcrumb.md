# Pisagor Astro — Breadcrumb

## When to use

- Shows where the user is within a hierarchy and lets them jump back to earlier levels.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { Breadcrumb } from "@pisagor/astro/breadcrumb"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/breadcrumb/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/breadcrumb` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

