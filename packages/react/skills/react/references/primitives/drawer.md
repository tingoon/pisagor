---
title: Drawer
description: "Slides a panel over the page for secondary tasks or details without leaving the current context."
api: compound
taxonomy: standard
---

## When to use

- Slide in secondary detail or a short task without leaving the current page.
- Prefer Drawer for gesture-friendly panels; prefer Dialog for centered modal decisions.
- Use snap points when partial and full heights both matter.

## Import

```tsx
import { Drawer } from "@pisagor/react";
```

Style with `@pisagor/recipes/drawer` — no app-level `tv()`.

## Examples

### Default

Slide a panel over the page for secondary detail or a short task.

:::example Default

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Drawer Content Inner

Structure inner content regions when the drawer needs a composed body.

:::example DrawerContentInner

### Inset

Inset the drawer from the viewport edge when a floating panel look fits better.

:::example Inset

### Snap Points

Snap to partial heights when users may peek or expand the panel.

:::example SnapPoints

### Swipe Directions

Limit swipe dismiss directions to match the drawer placement.

:::example SwipeDirections
