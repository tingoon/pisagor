# Pisagor React — File

## When to use

- Represents a file such as an uploaded attachment or downloadable document with its name and metadata.
- Public API model: **compound-shorthand**.

## Canonical import

```tsx
import { File } from "@pisagor/react"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react` → `src/components/file/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/file` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

