# Pisagor React — Timer

## When to use

- Counts up or down through intervals so users can track elapsed time or remaining time.
- Public API model: **compound**.

## Canonical import

```tsx
import { Timer } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/timer/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/timer` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

