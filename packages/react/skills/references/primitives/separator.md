# Pisagor React — Separator

## When to use

- Visually divides sections of content so grouped information is easier to scan.
- Public API model: **closed**.

## Canonical import

```tsx
import { Separator } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/separator/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/separator` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

