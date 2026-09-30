# Pisagor Astro — CircularProgress

## When to use

- Shows how far along a task is on a circular track, including indeterminate loading when the duration is unknown.
- Public API model: **closed**.

## Canonical import

```ts
import { CircularProgress } from "@pisagor/astro/circular-progress"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/circular-progress/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/circular-progress` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

