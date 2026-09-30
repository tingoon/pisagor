---
title: Radio Group Field
description: Lets the user pick one option from a short list with an optional validation message
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
---

## When to use

- Lets the user pick one option from a short list with an optional validation message.
- Mixing frameworks — this guide is **@pisagor/solid-form** (not `@pisagor/solid`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { RadioGroupField } from "@pisagor/solid-form/radio-group-field";
```

Live examples below match `assets/examples/radio-group-field/`.
