# Pisagor React — TagsInput

## When to use

- Lets users add and remove multiple tags or chips as they build a list of values.
- Public API model: **compound**.

## Canonical import

```tsx
import { TagsInput } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/tags-input/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/tags-input` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

