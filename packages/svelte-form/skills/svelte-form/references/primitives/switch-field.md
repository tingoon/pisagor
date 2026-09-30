---
title: Switch Field
description: Toggles a setting on or off with a label and optional validation message
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

- Toggles a setting on or off with a label and optional validation message.
- Mixing frameworks — this guide is **@pisagor/svelte-form** (not `@pisagor/svelte`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { SwitchField } from "@pisagor/svelte-form/switch-field";
```

Live examples below match `assets/examples/switch-field/`.
