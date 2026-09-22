# Pisagor React — RichTextEditor

## When to use

- Lets users write and format rich text with common styles such as bold, lists, and emphasis.
- Public API model: **compound-shorthand**.

## Canonical import

```tsx
import { RichTextEditor } from "@pisagor/react/rich-text-editor"
import { PlusIcon } from "@phosphor-icons/react"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/react/rich-text-editor` → `src/rich-text-editor/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/rich-text-editor` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `className` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **react** only (`@pisagor/react`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

