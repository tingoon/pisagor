---
title: Stat
description: "Displays a metric with supporting context so users can quickly scan performance or counts."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Display a key metric with supporting context for dashboards and summaries.
- Prefer Stat for a few highlighted numbers; prefer Table for many comparable records.
- Use trend affordances when direction of change matters.

## Import

```tsx
import { Stat } from "@pisagor/react";
```

Style with `@pisagor/recipes/stat` — no app-level `tv()`.

## Examples

### Variants

Choose emphasis so the stat matches dashboard hierarchy.

:::example Variants

### With Trend

Show direction of change when trend matters alongside the value.

:::example WithTrend

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Default

Highlight a key metric with supporting context.

:::example Default
