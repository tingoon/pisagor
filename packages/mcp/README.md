# @pisagor/mcp

MCP server for Pisagor UI. Discovers **installed** `@pisagor/*` packages and reads matching catalogs shipped with this package (`react.gen.json`, `react-form.gen.json`, …). No framework flag — only what the project has installed is available.

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
# or @pisagor/vue / @pisagor/solid / @pisagor/svelte / @pisagor/astro
# peers: matching framework + tailwindcss
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

Writes `{package}.gen.json` into `@pisagor/mcp` (`react.gen.json`, `react-form.gen.json`, `recipes.gen.json`, …). Component examples come from each UI package’s `examples/`. Run before publish.
