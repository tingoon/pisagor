---
name: react-charts
description: >-
  Pisagor `@pisagor/react-charts` — Chart container and Recharts wrappers for React. Use when
  adding charts, tooltips, legends, or ChartConfig theming. Ships inside the npm package for Intent.
  Prefer MCP (`bunx @pisagor/mcp`) when available; use this skill for chart APIs.
compatibility: >-
  Requires React 19, Tailwind v4, @pisagor/react, recharts.
---

# @pisagor/react-charts

Recharts-based chart primitives styled with Pisagor tokens/recipes.

**Recommended:** `bunx @pisagor/mcp`.

## Install

```bash
bun add @pisagor/react-charts
```

Import styles once (after tokens):

```css
@import "@pisagor/react-charts/styles";
```

## API

```tsx
import { Chart, type ChartConfig } from "@pisagor/react-charts";

<Chart config={chartConfig} className="min-h-64">
  {/* Recharts children */}
  <Chart.Tooltip content={<Chart.TooltipContent />} />
  <Chart.Legend content={<Chart.LegendContent />} />
</Chart>
```

`Chart` = `ChartContainer` with `Legend`, `LegendContent`, `Style`, `Tooltip`, `TooltipContent`.

## Rules

- Theme series colors via `ChartConfig`, not one-off hex in JSX when possible.
- Class prop: `className`.
- Prefer MCP `get_example` for chart composition.

## Source

`@pisagor/react-charts` → `src/`
