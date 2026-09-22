# Pisagor React — Spinner

## When to use

- Shows that something is loading when the wait time is short and a progress bar is not needed.
- Public API model: **closed**.

## Canonical import

```tsx
import { Spinner } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/spinner/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/spinner` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

