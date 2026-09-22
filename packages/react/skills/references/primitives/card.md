# Pisagor React — Card

## When to use

- Groups related content and actions into a contained surface that people can scan and compare.
- Public API model: **compound**.

## Canonical import

```tsx
import { Card } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/card/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/card` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

