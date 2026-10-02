---
title: Dialog
description: "Focuses attention on a task or decision in a modal layer above the current page."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Focus the user on a short task or decision above the current page.
- Prefer Dialog when the flow needs attention; prefer Popover or Sheet for lighter side tasks.
- Keep one clear primary action and a safe way to dismiss.

## Import

```tsx
import { Dialog } from "@pisagor/react";
```

Style with `@pisagor/recipes/dialog` — no app-level `tv()`.

## Examples

### Default

The centered modal for a short task or decision above the page.

:::example Default

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Initial Focus

Move focus to a specific control when the dialog opens so keyboard users land in the right place.

:::example InitialFocus

### Nested

Nest another dialog when hierarchy or layered structure is part of the content.

:::example Nested

### No Close Button

Hide the close button when dismiss should go through an explicit action instead.

:::example NoCloseButton

### Non Modal

Keep the page behind interactive when the dialog should not trap the entire experience.

:::example NonModal

### Scroll Area

Constrain tall content in a scroll region so the dialog chrome stays on screen.

:::example ScrollArea

### Close Behavior

Control how dismiss works — outside click, escape, or explicit close — to match the flow.

:::example CloseBehavior
