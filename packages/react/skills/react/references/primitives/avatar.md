# Pisagor React — Avatar

## When to use

- Shows who a user is in the interface — usually a profile photo, or initials or an icon when there is no image or it has not loaded yet.
- Public API model: **closed**.

## Canonical import

```tsx
import { Avatar } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/avatar/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/avatar` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

