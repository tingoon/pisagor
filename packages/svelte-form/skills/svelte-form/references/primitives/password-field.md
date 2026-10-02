---
title: Password Field
description: "Captures a password with show-hide control, label, and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/svelte-form"
---

## When to use

- Collect a password or secret with a show-hide control and a visible label.
- Prefer over a bare PasswordInput when you need description, error text, or a label accessory.
- Surface strength or length errors in validation; show unavailable when the credential cannot change.

## Import

```tsx
import { PasswordField } from "@pisagor/svelte-form";
```

Part of `@pisagor/svelte-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the password field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid

### With Label Accessory

Place a secondary action next to the label, such as a Forgot password? link, via `labelAccessory`.

:::example WithLabelAccessory
