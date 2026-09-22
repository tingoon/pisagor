# Pisagor React — Carousel

## When to use

- Steps through a set of slides or images so users can browse one item at a time without leaving the page.
- Public API model: **compound-shorthand**.

## Canonical import

```tsx
import { Carousel } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/carousel/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/carousel` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

