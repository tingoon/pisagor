# Pisagor Vue packages

Framework: **vue** only. Sibling skills: `react`, `astro`.

## Install

```bash
bun add @pisagor/vue
# peers
bun add vue tailwindcss
# optional packages
bun add @pisagor/vue-form
bun add @pisagor/vue-charts
```

`@pisagor/recipes`, `@pisagor/tokens`, and `@pisagor/utils` install transitively with `@pisagor/vue`. Add them to the app only if you import those packages directly (some package managers require that).

`@ark-ui/vue` and `@phosphor-icons/vue` also come with `@pisagor/vue`.

## Import map

| Need | Import |
| ---- | ------ |
| Components | `import { Button } from "@pisagor/vue"` |
| Heavy (subpath only) | `import { DataGrid } from "@pisagor/vue/data-grid"` |
| Form fields | `import { TextField } from "@pisagor/vue-form"` |
| Charts | `import { Chart } from "@pisagor/vue-charts"` |
| Recipe | `import { buttonRecipe } from "@pisagor/recipes/button"` |
| `cn()` | `import { cn } from "@pisagor/utils"` |

Prop for classes: **`class`**.

Import theme CSS once (e.g. `@import "@pisagor/vue/styles"` or `@import "@pisagor/tokens/styles"`).

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
| Package root (npm) | `@pisagor/vue` (`src/`, `skills/`, `catalog.gen.json`) |
