# Pisagor Astro — Status

## When to use

- Shows a compact status indicator for presence or state.
- Public API model: **closed**.

## Canonical import

```ts
import { Status } from "@pisagor/astro/status"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/status/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/status` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

