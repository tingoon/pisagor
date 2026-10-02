---
title: Clipboard
description: "Copies text to the clipboard with clear feedback so users can reuse values without manual selection."
api: closed
taxonomy: standard
aliases:
  - copy
---

## When to use

- Copy a value to the clipboard with visible success feedback.
- Prefer Clipboard over asking users to select and copy manually.
- Keep the copied payload short and purposeful — secrets may need extra care.

## Import

```ts
import { Clipboard } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/clipboard` — no app-level `tv()`.

## Examples

### Variants

Choose button emphasis to match surrounding actions.

:::example Variants

### Custom Timeout

Change how long the success state shows before resetting.

:::example CustomTimeout

### Different Icon

Swap icons when a different metaphor fits the copied content.

:::example DifferentIcon

### With Label

Show a text label when an icon alone is not clear enough.

:::example WithLabel

### Controlled

Drive copied state from the parent when feedback is coordinated elsewhere.

:::example Controlled

### Default

Copy a value and confirm success on the control.

:::example Default

