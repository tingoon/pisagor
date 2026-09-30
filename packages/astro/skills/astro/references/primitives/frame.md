# Pisagor Astro — Frame

## When to use

- Embeds external content in a framed viewport with a consistent chrome around it.
- Public API model: **compound**.

## Canonical import

```ts
import { Frame } from "@pisagor/astro/frame"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/frame/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/frame` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

