---
title: Toggle
description: "Stays pressed or released to turn a single option on or off, similar to a checkbox in button form."
api: closed
taxonomy: primitive
---

## When to use

- Press or release a single option in button form.
- Prefer Toggle for toolbar-style binary states; prefer Switch for settings with immediate effect.
- Prefer Checkbox when the control sits in a form among other fields.

## Import

```tsx
import { Toggle } from "@pisagor/solid";
```

Style with `@pisagor/recipes/toggle` — no app-level `tv()`.

## Examples

### Sizes

Match size to toolbar density.

:::example Sizes

### Variants

Choose emphasis to match surrounding controls.

:::example Variants

### Disabled

Show that the toggle is unavailable. Prefer explaining why nearby.

:::example Disabled

### Icon Group

Group icon toggles when several binary options sit together.

:::example IconGroup

### With Icon

Pair an icon with the label to reinforce meaning. Prefer a leading icon for recognition.

:::example WithIcon

### Controlled

Drive pressed state from the parent.

:::example Controlled

### Default

Stay pressed or released for a single binary option.

:::example Default
