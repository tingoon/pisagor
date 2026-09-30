# Pisagor Vue — ContextMenu

## When to use

- Opens a menu of actions at the pointer position when the user right-clicks.
- Public API model: **compound**.

## Canonical import

```ts
import { ContextMenu } from "@pisagor/vue"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue` → `src/components/context-menu/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/context-menu` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

