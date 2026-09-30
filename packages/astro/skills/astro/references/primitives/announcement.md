# Pisagor Astro — Announcement

## When to use

- Draws attention to a short product or marketing message without blocking the rest of the interface.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { Announcement } from "@pisagor/astro/announcement"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/announcement/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/announcement` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

