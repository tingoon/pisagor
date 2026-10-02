---
title: Switch
description: "Toggles a setting on or off with immediate visual feedback."
api: closed
taxonomy: standard
---

## When to use

- Toggle a setting on or off with immediate effect.
- Prefer Switch over Checkbox when the change applies right away rather than on submit.
- Label the switch with the state that will be on, not a yes/no question.

## Import

```ts
import { Switch } from "@pisagor/vue";
```

Style with `@pisagor/recipes/switch` — no app-level `tv()`.

## Examples

### Sizes

Match switch size to surrounding form density.

:::example Sizes

### Variants

Choose emphasis to match other controls in the form.

:::example Variants

### Disabled

Show that the setting cannot change. Prefer explaining why nearby.

:::example Disabled

### Invalid

Surface a validation error when the setting is required or not allowed.

:::example Invalid

### Controlled

Drive checked state from the parent when other UI depends on it.

:::example Controlled

### Default

Toggle a setting on or off with immediate effect.

:::example Default

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface
