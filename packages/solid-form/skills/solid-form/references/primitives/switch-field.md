---
title: Switch Field
description: "Toggles a setting on or off with a label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/solid-form"
---

## When to use

- Toggle an immediate setting such as notifications on or off with a visible label.
- Prefer over a bare Switch when you need description or error text with the control.
- Prefer Switch over Checkbox when the change takes effect right away rather than on submit.

## Import

```tsx
import { SwitchField } from "@pisagor/solid-form";
```

Part of `@pisagor/solid-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the switch is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
