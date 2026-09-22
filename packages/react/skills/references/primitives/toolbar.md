# Pisagor React — Toolbar

## When to use

- Organizes a section heading on the left and related actions on the right for list and page headers.
- Public API model: **compound-shorthand**.

## Canonical import

```tsx
import { Toolbar } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/toolbar/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/toolbar` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

