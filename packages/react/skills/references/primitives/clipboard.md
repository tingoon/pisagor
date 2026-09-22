# Pisagor React — Clipboard

## When to use

- Copies text to the clipboard with clear feedback so users can reuse values without selecting manually.
- Public API model: **closed**.

## Canonical import

```tsx
import { Clipboard } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/clipboard/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/clipboard` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

