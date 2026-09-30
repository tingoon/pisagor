---
title: Autocomplete Field
description: "Collects text with typeahead suggestions, label, and optional validation message"
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

- Collects text with typeahead suggestions, label, and optional validation message.
- Mixing frameworks — this guide is **@pisagor/svelte-form** (not `@pisagor/svelte`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

## Import

```tsx
import { AutocompleteField } from "@pisagor/svelte-form/autocomplete-field";
```

Live examples below match `assets/examples/autocomplete-field/`.
