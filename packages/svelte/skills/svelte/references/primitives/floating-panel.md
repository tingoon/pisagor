---
title: Floating Panel
description: "Presents draggable, resizable content in a floating window for tools or inspectors."
api: compound
taxonomy: pattern
aliases:
  - window
---

## When to use

- Float a draggable, resizable tool or inspector above the workspace.
- Prefer Floating Panel for optional tools; prefer App Shell regions for durable layout chrome.
- Control position and size from the parent when the panel must restore a saved layout.

## Import

```ts
import { FloatingPanel } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/floating-panel` — no app-level `tv()`.

## Examples

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Controlled Position

Drive position from the parent when layout must restore a saved place.

:::example ControlledPosition

### Controlled Size

Drive size from the parent when dimensions must restore a saved layout.

:::example ControlledSize

### Default

Float a draggable, resizable tool above the workspace.

:::example Default

