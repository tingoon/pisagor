---
title: Date Field
description: Picks a date from a calendar with label and optional validation message
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

- Picks a date from a calendar with label and optional validation message.
- Mixing frameworks — this guide is **@pisagor/solid-form** (not `@pisagor/solid`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { DateField } from "@pisagor/solid-form/date-field";
```

Live examples below match `assets/examples/date-field/`.
