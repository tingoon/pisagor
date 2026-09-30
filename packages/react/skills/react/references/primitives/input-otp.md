---
title: Input Otp
description: Collects one-time passcodes as separate digits so users can enter and review verification codes.
api: compound
taxonomy: standard
examples:
  - id: default
    title: Default
    exportName: Default
  - id: variants
    title: Variants
    exportName: Variants
  - id: blur-on-complete
    title: Blur On Complete
    exportName: BlurOnComplete
  - id: custom-size
    title: Custom Size
    exportName: CustomSize
  - id: four-digits
    title: Four Digits
    exportName: FourDigits
  - id: mask
    title: Mask
    exportName: Mask
  - id: separator
    title: Separator
    exportName: Separator
  - id: with-placeholder
    title: With Placeholder
    exportName: WithPlaceholder
  - id: disabled
    title: Disabled
    exportName: Disabled
  - id: invalid
    title: Invalid
    exportName: Invalid
  - id: controlled
    title: Controlled
    exportName: Controlled
---

## When to use

- Collects one-time passcodes as separate digits so users can enter and review verification codes.

## Import

```tsx
import { InputOTP } from "@pisagor/react/input-otp";
```

Style with `@pisagor/recipes/input-otp` — no app-level `tv()`.

Live examples below match `assets/examples/input-otp/`.
