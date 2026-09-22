# Pisagor React — ContextMenu

## When to use

- Opens a menu of actions at the pointer so users can act on an item in its surrounding context.
- Public API model: **compound**.

## Canonical import

```tsx
import { ContextMenu } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/context-menu/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/context-menu` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

