---
title: Toggle Group
description: "Lets users choose one or more pressed states from a row of related toggle buttons."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Choose one or more pressed states from related toggle buttons.
- Prefer Toggle Group for formatting and view modes; prefer Radio Group for form questions.
- Use single selection when options are mutually exclusive.

## Import

```tsx
import { ToggleGroup } from "@pisagor/react";
```

Style with `@pisagor/recipes/toggle-group` — no app-level `tv()`.

## Examples

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the toggle group needs emphasis.

:::example Sizes

### Variants

Choose visual weight or emphasis so the toggle group matches importance in the surrounding layout.

:::example Variants

### Horizontal

Use a horizontal layout when the toggle group should read left to right.

:::example Horizontal

### Vertical

Use a vertical layout when the toggle group should read top to bottom.

:::example Vertical

### Spacing

Adjust gaps between parts when density needs to match the surrounding UI.

:::example Spacing

### Disabled Item

Show that a specific toggle is unavailable.

:::example DisabledItem

### Font Weight

Use the group for font-weight choices in a formatting toolbar.

:::example FontWeight

### Disabled

Show that the toggle group is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Single

Allow only one pressed toggle when options are mutually exclusive.

:::example Single

### Controlled

Manage state from the parent when other UI must stay in sync with this toggle group.

:::example Controlled

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Default

Choose one or more pressed states from related toggles.

:::example Default
