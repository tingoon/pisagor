---
title: Text Field
description: "Collects a single line of text with a label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/solid-form"
---

## When to use

- Collect a single line of text such as an email, name, or search term with a visible label.
- Prefer over a bare Input when you need description or error text wired to the control.
- Surface validation errors when input fails checks; show unavailable when the value cannot change yet.

## Import

```tsx
import { TextField } from "@pisagor/solid-form";
```

Part of `@pisagor/solid-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
