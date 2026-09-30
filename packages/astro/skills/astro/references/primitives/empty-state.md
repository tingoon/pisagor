# Pisagor Astro — EmptyState

## When to use

- Explains an empty view and offers a clear next action.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { EmptyState } from "@pisagor/astro/empty-state"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/empty-state/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/empty-state` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

