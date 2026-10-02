---
title: Autocomplete Field
description: "Collects text with typeahead suggestions, label, and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/vue-form"
---

## When to use

- Help users pick from a long list by typing to filter suggestions under a visible label.
- Prefer over SelectField when scanning every option is harder than filtering by text.
- Prefer over a bare Autocomplete when you need description or error text with the control.

## Import

```ts
import { AutocompleteField } from "@pisagor/vue-form";
```

Part of `@pisagor/vue-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the autocomplete is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
