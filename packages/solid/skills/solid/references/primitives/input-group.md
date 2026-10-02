---
title: Input Group
description: "Combines inputs with icons, buttons, or labels in one control so related actions stay attached."
api: compound
taxonomy: primitive
---

## When to use

- Attach icons, buttons, badges, or shortcuts to an input as one control.
- Prefer Input Group when addons belong to the field; prefer separate Button when the action is independent.
- Align addons to the start or end of the field to match reading direction and affordance.

## Import

```tsx
import { InputGroup } from "@pisagor/solid";
```

Style with `@pisagor/recipes/input-group` — no app-level `tv()`.

## Examples

### Default

Combine an input with attached addons as one control.

:::example Default

### Sizes

Match size to form density.

:::example Sizes

### Variants

Choose emphasis to match surrounding inputs.

:::example Variants

### With Textarea

Attach addons to a multi-line field.

:::example WithTextarea

### Disabled

Show that the grouped field is unavailable.

:::example Disabled

### Invalid

Surface invalid state across the grouped control.

:::example Invalid

### Align Block End

Place addons at the block end of the field.

:::example AlignBlockEnd

### Align Block Start

Place addons at the block start of the field.

:::example AlignBlockStart

### Align Inline End

Place addons at the inline end of the field.

:::example AlignInlineEnd

### Align Inline Start

Place addons at the inline start of the field.

:::example AlignInlineStart

### With Badge

Attach a badge when status sits inside the field chrome.

:::example WithBadge

### With Keyboard Shortcut

Show a shortcut hint inside the field.

:::example WithKeyboardShortcut

### With Spinner

Show a spinner addon while the field is waiting.

:::example WithSpinner
