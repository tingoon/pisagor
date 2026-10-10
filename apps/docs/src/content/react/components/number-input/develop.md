## Import

```tsx
import { NumberInput } from "@pisagor/react";
```

## Examples

### Variants

Choose visual weight or emphasis so the number input matches importance in the surrounding layout.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the number input needs emphasis.

:::example Sizes

### Formatted

Display a formatted value when units or grouping aid reading.

:::example Formatted

### Field Only

Render the field without extra chrome when the surrounding layout provides labels.

:::example FieldOnly

### Compound

Compose the input and stepper triggers from parts when you need a custom layout.

:::example Compound

### Controlled

Manage state from the parent when other UI must stay in sync with this number input.

:::example Controlled

### Disabled

Show that the number input is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the number input needs attention before continuing.

:::example Invalid

### Range

Select a start and end value when the task needs a span rather than a single point.

:::example Range

### Step

Snap changes to a step interval when values should move in fixed increments.

:::example Step

### Mouse Wheel

Adjust the value with the mouse wheel when rapid changes fit the task.

:::example MouseWheel

### Scrub

Scrub horizontally to change the value when precise dragging helps.

:::example Scrub

## Customization

### Custom recipe

Extend `numberInputRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
