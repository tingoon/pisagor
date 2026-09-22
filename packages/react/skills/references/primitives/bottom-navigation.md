# Pisagor React — BottomNavigation

## When to use

- Gives mobile users quick access to the main sections of an app from a bar fixed to the bottom of the screen.
- Public API model: **compound**.

## Canonical import

```tsx
import { BottomNavigation } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/bottom-navigation/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/bottom-navigation` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

