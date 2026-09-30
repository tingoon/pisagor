---
title: Password Field
description: "Captures a password with show-hide control, label, and optional validation message"
api: closed
taxonomy: standard
packageName: "@pisagor/solid-form"
---

## When to use

- Captures a password with show-hide control, label, and optional validation message.
- Mixing frameworks — this guide is **@pisagor/solid-form** (not `@pisagor/solid`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { PasswordField } from "@pisagor/solid-form";
```

Live examples below match `assets/examples/password-field/`.

## Examples

### Disabled

:::example Disabled

### Invalid

:::example Invalid

### With Label Accessory

Places a secondary action next to the label — for example a Forgot password? link — via `labelAccessory`.

:::example WithLabelAccessory
