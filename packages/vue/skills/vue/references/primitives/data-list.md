---
title: Data List
description: "Presents label-value pairs in a readable list for summaries, metadata, and detail panels."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Present label-value pairs for summaries, metadata, and detail sidebars.
- Prefer Data List over a full Table when each row is a property, not a record among peers.
- Use Info Tip when a label needs a short explanation without crowding the row.

## Import

```ts
import { DataList } from "@pisagor/vue";
```

Style with `@pisagor/recipes/data-list` — no app-level `tv()`.

## Examples

### Orientation Horizontal

Lay out the data list horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the data list vertically when items should read in a column.

:::example OrientationVertical

### Separator

Separate groups of pairs so sections stay scannable.

:::example Separator

### Info Tip

Add a short tip on a label when the field needs explanation without crowding the row.

:::example InfoTip

### Compound

Compose term and value parts for a custom list layout.

:::example Compound

### Default

Present label-value pairs for summaries and metadata.

:::example Default
