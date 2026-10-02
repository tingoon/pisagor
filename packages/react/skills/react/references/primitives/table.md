---
title: Table
description: "Presents rows and columns of data in a structured grid for comparison and scanning."
api: compound
taxonomy: standard
---

## When to use

- Present comparable rows and columns for scanning and light interaction.
- Prefer Table for compact read-only datasets; prefer Data Grid when sorting, filtering, or virtualization is required.
- Add footer or actions when summary and row operations belong with the data.

## Import

```tsx
import { Table } from "@pisagor/react";
```

Style with `@pisagor/recipes/table` — no app-level `tv()`.

## Examples

### Variants

Choose visual weight or emphasis so the table matches importance in the surrounding layout.

:::example Variants

### Actions

Add row actions when operations belong with each record.

:::example Actions

### Footer

Add a footer for summaries beneath the rows.

:::example Footer

### Not Hoverable

Turn off row hover when hover affordance would distract.

:::example NotHoverable

### Default

Present comparable rows and columns for scanning.

:::example Default
