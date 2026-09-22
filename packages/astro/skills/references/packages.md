# Pisagor Astro packages

Framework: **astro** only. Sibling skills: `react`, `vue`.

## Install

```bash
bun add @pisagor/astro
# peers
bun add astro tailwindcss
```

`@pisagor/recipes` and `@pisagor/tokens` install transitively with `@pisagor/astro`. Add them to the app only if you import those packages directly.

`@pisagor/utils` is **not** a dependency of `@pisagor/astro`. Install it separately only if you need `cn()`:

```bash
bun add @pisagor/utils
```

## Import map

| Need | Import |
| ---- | ------ |
| Components | `import { Button } from "@pisagor/astro"` |
| Recipe | `import { buttonRecipe } from "@pisagor/recipes/button"` |
| `cn()` | `import { cn } from "@pisagor/utils"` (optional package) |

Prop for classes: **`class`**.

Import theme CSS once (e.g. `@import "@pisagor/astro/styles"` — already includes `@pisagor/tokens/styles`).

## Optional MCP

```bash
bunx @pisagor/mcp
```

Prefer **this skill** when MCP is disabled. Use MCP `get_example` / `list_examples` for composition examples.

## Discovery

| Resource | Where |
| -------- | ----- |
| Registry | [`component-registry.md`](component-registry.md) |
| Guides | [`primitives/`](primitives/) |
| Package root (npm) | `@pisagor/astro` (`src/`, `skills/`, `catalog.gen.json`) |
