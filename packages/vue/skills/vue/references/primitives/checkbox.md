# Pisagor Vue — Checkbox

## When to use

- Lets users turn an individual option on or off, alone or as part of a multi-select list.
- Public API model: **compound**.

## Canonical import

```ts
import { Checkbox } from "@pisagor/vue"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue` → `src/components/checkbox/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/checkbox` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

