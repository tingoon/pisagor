# Pisagor Vue — FileUpload

## When to use

- Lets users choose files to upload with drag-and-drop or a file picker and shows upload progress.
- Public API model: **compound**.

## Canonical import

```ts
import { FileUpload } from "@pisagor/vue"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue` → `src/components/file-upload/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/file-upload` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

