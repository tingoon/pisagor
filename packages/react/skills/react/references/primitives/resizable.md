---
title: Resizable
description: "Splits space between panels with draggable handles so users can adjust layout proportions."
api: compound
taxonomy: standard
---

## When to use

- Let users drag handles to resize adjacent panels.
- Prefer Resizable for tool layouts; avoid when proportions must stay fixed for comprehension.
- Set min/max and collapsible panes so panels cannot crush essential content.

## Import

```tsx
import { Resizable } from "@pisagor/react";
```

Style with `@pisagor/recipes/resizable` — no app-level `tv()`.

## Examples

### Default

Drag handles to resize adjacent panels.

:::example Default

### Min Max

Clamp values to a minimum and maximum so users cannot pick out-of-range input.

:::example MinMax

### Orientation Horizontal

Lay out the resizable layout horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the resizable layout vertically when items should read in a column.

:::example OrientationVertical

### Handle

Emphasize the resize handle when the divider should be easy to grab.

:::example Handle

### Edge Handle

Place handles on edges when that affordance matches the layout.

:::example EdgeHandle

### Multiple Panels

Split more than two panels when the workspace has several regions.

:::example MultiplePanels

### Collapsible

Allow a panel to collapse when users need maximum space for another region.

:::example Collapsible
