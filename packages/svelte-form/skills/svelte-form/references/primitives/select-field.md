---
title: Select Field
description: "Lets the user pick one option from a dropdown with label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/svelte-form"
---

## When to use

- Pick one option from a known list when showing every choice inline would take too much space.
- Prefer over a bare Select when you need a label, description, or error text with the control.
- Prefer AutocompleteField when the list is long and users benefit from typing to filter.

## Import

```tsx
import { SelectField } from "@pisagor/svelte-form";
```

Part of `@pisagor/svelte-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the select is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
