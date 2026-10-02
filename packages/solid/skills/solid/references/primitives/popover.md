---
title: Popover
description: "Anchors extra content to a trigger for compact forms, menus, or details without a full dialog."
api: compound
taxonomy: standard
aliases:
  - flyout
---

## When to use

- Anchor lightweight content to a trigger without a full-page dialog.
- Prefer Popover for compact forms and details; prefer Dialog when the task needs stronger focus.
- Use modal mode when interaction outside should be blocked.

## Import

```tsx
import { Popover } from "@pisagor/solid";
```

Style with `@pisagor/recipes/popover` — no app-level `tv()`.

## Examples

### Default

Anchor lightweight content to a trigger without a full dialog.

:::example Default

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Anchor

Position against a custom anchor when the trigger element is not the visual anchor.

:::example Anchor

### Close Button

Add an explicit close control when dismiss should be obvious.

:::example CloseButton

### Nested

Nest another popover when hierarchy or layered structure is part of the content.

:::example Nested

### Modal

Block interaction outside when the popover content needs focus.

:::example Modal

### Scroll Area

Constrain tall content in a scroll region so the popover chrome stays on screen.

:::example ScrollArea

### Close Behavior

Control how dismiss works — outside click, escape, or explicit close — to match the flow.

:::example CloseBehavior

### Placements

Choose placement so the popover stays near its trigger without covering critical content.

:::example Placements
