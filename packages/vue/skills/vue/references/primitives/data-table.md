---
title: Data Table
description: "Presents structured tabular data with headers and rows. Prefer Data Grid for heavy interactive grids."
api: compound
taxonomy: pattern
---

## When to use

- Present structured rows with headers, optional empty state, and sorting.
- Prefer Data Table for straightforward datasets; prefer Data Grid for heavy interaction.
- Show Empty when there are no rows so the table does not look broken.

## Import

```ts
import { DataTable } from "@pisagor/vue/data-table";
```

Style with `@pisagor/recipes/data-table` — no app-level `tv()`.

## Examples

### Empty

Show an empty presentation when there are no rows yet.

:::example Empty

### Sorting

Sort columns so users can reorder records.

:::example Sorting
