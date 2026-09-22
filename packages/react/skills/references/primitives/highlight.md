# Pisagor React — Highlight

## When to use

- Emphasizes matching words inside text so search results and queries are easier to spot.
- Public API model: **closed**.

## Canonical import

```tsx
import { Highlight } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/highlight/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/highlight` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

