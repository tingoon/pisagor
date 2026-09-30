# Pisagor Astro — InputGroup

## When to use

- Composes an input with leading or trailing addons and actions.
- Public API model: **compound**.

## Canonical import

```ts
import { InputGroup } from "@pisagor/astro/input-group"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/input-group/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/input-group` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

