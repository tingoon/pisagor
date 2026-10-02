---
title: Radio Group
description: "Lets users pick exactly one option from a small set of related choices."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Pick exactly one option from a short, related set.
- Prefer Radio Group when all choices should be visible; prefer Select when the list is long.
- Prefer Checkbox when multiple selections are allowed.

## Import

```tsx
import { RadioGroup } from "@pisagor/react";
```

Style with `@pisagor/recipes/radio-group` — no app-level `tv()`.

## Examples

### Variants

Choose visual weight or emphasis so the radio group matches importance in the surrounding layout.

:::example Variants

### Disabled

Show that the radio group is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation or error state so users know the radio group needs attention before continuing.

:::example Invalid

### With Description

Add secondary text under options when labels alone are not enough.

:::example WithDescription

### Controlled

Manage state from the parent when other UI must stay in sync with this radio group.

:::example Controlled

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Default

Pick exactly one option from a short related set.

:::example Default
