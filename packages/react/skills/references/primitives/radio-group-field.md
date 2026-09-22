# Pisagor React — RadioGroupField

## When to use

- Lets the user pick one option from a short list with an optional validation message.

## Canonical import

```tsx
import { RadioGroupField } from "@pisagor/react-form"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react-form` → `src/fields/radio-group-field/` |
| Examples | MCP `get_example` / `list_examples` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

