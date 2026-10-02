---
title: Input Otp
description: "Collects one-time passcodes as separate digits so users can enter and review each character."
api: compound
taxonomy: standard
---

## When to use

- Collect a one-time code as separate digits for verification flows.
- Prefer Input OTP over a single text field when digit-by-digit entry reduces mistakes.
- Use Mask when digits should stay private on screen.

## Import

```tsx
import { InputOtp } from "@pisagor/solid";
```

Style with `@pisagor/recipes/input-otp` — no app-level `tv()`.

## Examples

### Default

Enter a one-time code across separate digit slots.

:::example Default

### Variants

Choose visual weight or emphasis so the OTP input matches importance in the surrounding layout.

:::example Variants

### Blur On Complete

Move focus away when all digits are filled.

:::example BlurOnComplete

### Custom Size

Override dimensions when the default size does not fit the layout.

:::example CustomSize

### Four Digits

Use four slots when the code length is four.

:::example FourDigits

### Mask

Mask digits when the code should stay private on screen.

:::example Mask

### Separator

Insert a separator between groups so sections stay scannable.

:::example Separator

### With Placeholder

Show placeholders in empty slots to hint at expected length.

:::example WithPlaceholder

### Disabled

Show that the OTP input is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation or error state so users know the OTP input needs attention before continuing.

:::example Invalid

### Controlled

Manage state from the parent when other UI must stay in sync with this OTP input.

:::example Controlled
