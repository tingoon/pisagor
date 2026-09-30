---
title: Otp Field
description: Collects a one-time code across separate digit slots with optional validation message
api: closed
taxonomy: standard
packageName: "@pisagor/svelte-form"
examples:
  - id: disabled
    title: Disabled
    exportName: Disabled
  - id: invalid
    title: Invalid
    exportName: Invalid
---

## When to use

- Collects a one-time code across separate digit slots with optional validation message.
- Mixing frameworks — this guide is **@pisagor/svelte-form** (not `@pisagor/svelte`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { OtpField } from "@pisagor/svelte-form/otp-field";
```

Live examples below match `assets/examples/otp-field/`.
