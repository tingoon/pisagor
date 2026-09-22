# Pisagor Astro — ButtonGroup

## When to use

- Groups related actions into a single segmented control.
- Public API model: **compound**.

## Canonical import

```ts
import { ButtonGroup } from "@pisagor/astro/button-group"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/button-group/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/button-group` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

