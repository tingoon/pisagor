---
name: vue-charts
description: >-
  Pisagor `@pisagor/vue-charts` — Chart primitives for Vue. Use when adding charts or chart
  theming in Pisagor Vue apps. Ships inside the npm package for Intent. Prefer MCP
  (`bunx @pisagor/mcp`) when available; use this skill for chart APIs.
compatibility: >-
  Requires Vue 3.5+, Tailwind v4, @pisagor/vue.
---

# @pisagor/vue-charts

Chart primitives styled with Pisagor tokens/recipes.

**Recommended:** `bunx @pisagor/mcp`.

## Install

```bash
bun add @pisagor/vue-charts
```

Import styles once (after tokens):

```css
@import "@pisagor/vue-charts/styles";
```

## API

```ts
import { Chart } from "@pisagor/vue-charts";
```

Prefer MCP `get_example` for chart composition.

## Rules

- Prefer package chart config / recipes over ad-hoc colors when possible.
- Class prop: `class`.

## Source

`@pisagor/vue-charts` → `src/`
