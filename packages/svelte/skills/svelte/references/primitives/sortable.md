---
title: Sortable
description: "Lets users reorder a list by dragging items or moving them with Alt and arrow keys."
api: compound
taxonomy: standard
aliases:
  - reorder
  - drag-list
---

## When to use

- Reorder items by drag or keyboard so users control sequence.
- Prefer Sortable when order is meaningful; avoid when sorting is automatic by a data field.
- Provide a handle when the whole row should not be a drag target.

## Import

```ts
import { Sortable } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/sortable` — no app-level `tv()`.

## Examples

### Horizontal

Use a horizontal layout when the sortable list should read left to right.

:::example Horizontal

### Disabled

Show that reordering is unavailable. Prefer explaining why nearby.

:::example Disabled

### Without Handle

Drag from the whole row when a dedicated handle is unnecessary.

:::example WithoutHandle

### Default

Reorder items by drag or keyboard.

:::example Default

