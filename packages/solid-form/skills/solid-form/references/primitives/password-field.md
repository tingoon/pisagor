---
title: Password Field
description: "Captures a password with show-hide control, label, and optional validation message"
api: closed
taxonomy: standard
packageName: "@pisagor/solid-form"
examples:
  - id: disabled
    title: Disabled
    exportName: Disabled
  - id: invalid
    title: Invalid
    exportName: Invalid
  - id: with-label-accessory
    title: With Label Accessory
    exportName: WithLabelAccessory
---

## When to use

- Captures a password with show-hide control, label, and optional validation message.
- Mixing frameworks — this guide is **@pisagor/solid-form** (not `@pisagor/solid`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { PasswordField } from "@pisagor/solid-form/password-field";
```

Live examples below match `assets/examples/password-field/`.
