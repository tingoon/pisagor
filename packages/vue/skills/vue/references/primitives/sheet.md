---
title: Sheet
description: "Slides a panel in from the edge of the screen for secondary tasks on mobile and compact layouts."
api: compound
taxonomy: pattern
aliases:
  - side-panel
---

## When to use

- Slide a panel from the screen edge for secondary tasks, especially on mobile.
- Prefer Sheet for edge-anchored flows; prefer Dialog for centered modal decisions.
- Offer a clear dismiss control and consider non-modal when the page behind must stay usable.

## Import

```ts
import { Sheet } from "@pisagor/vue";
```

Style with `@pisagor/recipes/sheet` — no app-level `tv()`.

## Examples

### Default

Slide a panel in from the edge for a secondary task.

:::example Default

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Inset

Inset the sheet from the viewport edge when a floating panel look fits better.

:::example Inset

### No Close Button

Hide the close button when dismiss should go through an explicit action instead.

:::example NoCloseButton

### Non Modal

Keep the page behind interactive when the sheet should not trap focus entirely.

:::example NonModal

### Scroll Area

Constrain tall content in a scroll region so the sheet chrome stays on screen.

:::example ScrollArea

### Sides

Choose which edge the sheet enters from to match the task and layout.

:::example Sides

### Close Behavior

Control how dismiss works — outside click, escape, or explicit close — to match the flow.

:::example CloseBehavior
