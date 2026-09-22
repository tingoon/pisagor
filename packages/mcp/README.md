# @pisagor/mcp

MCP server for Pisagor UI. Discovers **installed** `@pisagor/*` packages and reads each package’s `catalog.gen.json`. No framework flag — only what the project has installed is available.

If nothing is installed, tools return install instructions.

## Setup

```json
{
  "mcpServers": {
    "pisagor": {
      "command": "bunx",
      "args": ["@pisagor/mcp"]
    }
  }
}
```

Install UI packages in the project (examples):

```bash
bun add @pisagor/react
# peers: react react-dom tailwindcss
# recipes/tokens/utils come transitively
```

## Tools

- `list_components`
- `list_examples`
- `get_example`
- `get_component_source`
- `get_recipe`

## Maintainers

Catalog generation lives in `@pisagor/scripts`, not this package:

```bash
bun run --filter @pisagor/scripts generate
```

Writes `catalog.gen.json` into each UI package (`react`, `vue`, `astro`, `*-form`, `*-charts`, `recipes`). Run before publish.
