# Pisagor React — DataGrid

## When to use

- Displays large or interactive tabular datasets with grid behaviors such as column resize and virtualization. Prefer Data Table for basic lists.
- Public API model: **compound**.

## Canonical import

```tsx
import { DataGrid } from "@pisagor/react/data-grid"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react/data-grid` → `src/data-grid/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/data-grid` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

