# Pisagor Astro — Spinner

## When to use

- Shows that content or an action is still loading.
- Public API model: **closed**.

## Canonical import

```ts
import { Spinner } from "@pisagor/astro/spinner"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/spinner/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/spinner` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

