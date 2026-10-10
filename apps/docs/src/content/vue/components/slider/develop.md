## Import

```ts
import { Slider } from "@pisagor/vue";
```

## Examples

### Variants

Choose visual weight or emphasis so the slider matches importance in the surrounding layout.

:::example Variants

### Vertical

Use a vertical layout when the slider should read top to bottom.

:::example Vertical

### With Label

Label the slider so the current value is readable.

:::example WithLabel

### Marks

Show marks for key values along the track.

:::example Marks

### Range

Select a start and end value when the task needs a span rather than a single point.

:::example Range

### Controlled

Manage state from the parent when other UI must stay in sync with this slider.

:::example Controlled

### Disabled

Show that the slider is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the slider needs attention before continuing.

:::example Invalid

### Min Max

Clamp values to a minimum and maximum so users cannot pick out-of-range input.

:::example MinMax

### Step

Snap changes to a step interval when values should move in fixed increments.

:::example Step

## Customization

### Custom recipe

Extend `sliderRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
