# Pisagor Astro — Timeline

## When to use

- Shows a sequence of events with indicators and supporting detail.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { Timeline } from "@pisagor/astro/timeline"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/timeline/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/timeline` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

