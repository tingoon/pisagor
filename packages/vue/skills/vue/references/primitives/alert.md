# Pisagor Vue — Alert

## When to use

- Shows a brief message that helps users notice important information — such as updates, warnings, or errors — with an optional title, icon, and actions.
- Public API model: **compound-shorthand**.

## Canonical import

```ts
import { Alert } from "@pisagor/vue"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue` → `src/components/alert/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/alert` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

