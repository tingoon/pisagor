---
title: OTP Field
description: "Collects a one-time code across separate digit slots with optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/svelte-form"
---

## When to use

- Collect a one-time passcode as separate digits so users can enter and review each character.
- Prefer over a bare InputOtp when you need a label or error text with the control.
- Surface errors for incomplete or wrong codes; show unavailable when entry is blocked.

## Import

```tsx
import { OtpField } from "@pisagor/svelte-form";
```

Part of `@pisagor/svelte-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the OTP field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
