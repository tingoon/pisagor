---
title: Checkbox
description: "Lets users turn an individual option on or off, alone or as part of a multi-select group."
api: compound
taxonomy: standard
---

## When to use

- Turn an individual option on or off, or select several items in a list.
- Prefer Checkbox over Switch when the choice is submitted with a form rather than applied immediately.
- Use indeterminate for parent rows that partially select children.

## Import

```ts
import { Checkbox } from "@pisagor/vue";
```

Style with `@pisagor/recipes/checkbox` — no app-level `tv()`.

## Examples

### Variants

Choose visual weight to match surrounding form controls.

:::example Variants

### Disabled

Show that the option cannot change. Prefer explaining why nearby.

:::example Disabled

### Indeterminate

Mark a parent checkbox when only some child options are selected.

:::example Indeterminate

### Invalid

Surface a validation error when the choice is required or not allowed.

:::example Invalid

### Checkbox Group

Group related checkboxes so multi-select options stay together.

:::example CheckboxGroup

### Controlled

Drive checked state from the parent when other UI depends on it.

:::example Controlled

### Default

A single option users can turn on or off.

:::example Default

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface
