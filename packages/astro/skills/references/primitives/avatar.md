# Pisagor Astro — Avatar

## When to use

- Shows a user or entity with an image or fallback initials.
- Public API model: **closed**.

## Canonical import

```ts
import { Avatar } from "@pisagor/astro/avatar"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/avatar/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/avatar` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

