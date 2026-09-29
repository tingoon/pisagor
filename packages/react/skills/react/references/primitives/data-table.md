# Pisagor React — DataTable

## When to use

- Renders basic tabular data with columns and rows. Prefer Data Grid when you need resize, virtualization, or advanced interactions.
- Public API model: **compound**.

## Canonical import

```tsx
import { DataTable } from "@pisagor/react/data-table"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react/data-table` → `src/data-table/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/data-table` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

