# Pisagor React — Chart

## When to use

- Wraps charts in themed, accessible layout so data visualizations match the rest of the interface.
- Public API model: **compound**.

## Canonical import

```tsx
import { Chart } from "@pisagor/react-charts"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react-charts` → `src/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/chart` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

