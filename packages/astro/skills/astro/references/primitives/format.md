# Pisagor Astro — Format

## When to use

- Formats numbers, bytes, and relative times for display so values read naturally in the user locale.
- Public API model: **compound**.

## Canonical import

```ts
import { Format } from "@pisagor/astro/format"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/astro` → `src/components/format/` |
| Examples | MCP `get_example` / `list_examples` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **astro** only (`@pisagor/astro`).
- Calling `tv()` in app code — use `@pisagor/recipes`.

