# Pisagor React — DropdownMenu

## When to use

- Opens a dropdown list of actions or destinations from a trigger for navigation and contextual commands.
- Public API model: **compound**.

## Canonical import

```tsx
import { DropdownMenu } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/dropdown-menu/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/dropdown-menu` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

