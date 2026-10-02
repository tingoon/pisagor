---
title: Checkbox Field
description: "Lets the user confirm a choice with a checkbox, label, and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/vue-form"
---

## When to use

- Confirm a single yes-or-no choice such as accepting terms, with a visible label.
- Prefer over a bare Checkbox when you need description or error text wired to the control.
- Surface an error when agreement is required; show unavailable when the choice cannot change.

## Import

```ts
import { CheckboxField } from "@pisagor/vue-form";
```

Part of `@pisagor/vue-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the checkbox is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
