# Pisagor React packages

Framework: **react** only (`@pisagor/react` components). Other UI frameworks (`@pisagor/vue`, `@pisagor/solid`, `@pisagor/svelte`, `@pisagor/astro`) ship their own skills. Forms, recipes, tokens, and utils are separate packages with their own skills — not part of this one.

## Install

```bash
bun add @pisagor/react
# peers
bun add react react-dom tailwindcss
# optional packages
bun add @pisagor/react-form
```

`@pisagor/recipes`, `@pisagor/tokens`, and `@pisagor/utils` install transitively with `@pisagor/react`. Add them to the app only if you import those packages directly (some package managers require that).

`@ark-ui/react` and `@phosphor-icons/react` also come with `@pisagor/react`.

## Import map

| Need | Import |
| ---- | ------ |
| Components | `import { Button } from "@pisagor/react"` |
| Heavy (subpath only) | `import { DataGrid } from "@pisagor/react/data-grid"` |
| Form fields | `import { TextField } from "@pisagor/react-form"` |
| Recipe | `import { buttonRecipe } from "@pisagor/recipes"` |
| Props | `import type { ButtonProps } from "@pisagor/props"` |
| `cn()` | `import { cn } from "@pisagor/utils"` |

Prop for classes: **`className`**.

Import theme CSS once (e.g. `@import "@pisagor/react/styles"` or `@import "@pisagor/tokens/styles"`).

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
| Package | `@pisagor/react` |
