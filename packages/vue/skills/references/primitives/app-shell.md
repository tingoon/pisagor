# Pisagor Vue — AppShell

## When to use

- Multi-region application shell with draggable side panels and an optional inspector for dashboard layouts.
- Public API model: **compound**.

## Canonical import

```ts
import { AppShell } from "@pisagor/vue"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue` → `src/components/app-shell/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/app-shell` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

