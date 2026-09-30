# Pisagor Vue — Editable

## When to use

- Turns static text into inline editing so users can update a value where it is shown.
- Public API model: **compound**.

## Canonical import

```ts
import { Editable } from "@pisagor/vue"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue` → `src/components/editable/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/editable` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

