# Pisagor React — NumberField

## When to use

- Adjusts a numeric value with steppers, label, and optional validation message.

## Canonical import

```tsx
import { NumberField } from "@pisagor/react-form"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react-form` → `src/fields/number-field/` |
| Examples | MCP `get_example` / `list_examples` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

