---
name: mcp
description: >-
  Pisagor MCP server (`@pisagor/mcp`). Use when starting or debugging the MCP
  tools that read installed `@pisagor/*` catalogs. This skill does not document
  component APIs — use each UI package’s skill for that.
metadata:
  package: "@pisagor/mcp"
---

# @pisagor/mcp

MCP server for Pisagor UI. It ships `{package}.gen.json` catalogs and exposes tools for installed `@pisagor/*` packages. It does not own component, form, chart, recipe, token, or util APIs.

```bash
bunx @pisagor/mcp
```

Source: `src/` (`pisagor-mcp` bin → `src/stdio.ts`).
