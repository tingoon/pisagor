## Import

```tsx
import { Progress } from "@pisagor/solid";
```

## Examples

### Default

Show completion along a linear track.

:::example Default

### Orientation Horizontal

Lay out the progress bar horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the progress bar vertically when items should read in a column.

:::example OrientationVertical

### With Label

Label the progress so the percentage or status is readable.

:::example WithLabel

### Controlled

Manage state from the parent when other UI must stay in sync with this progress bar.

:::example Controlled

### Indeterminate

Show an indeterminate state when progress or selection is partial or unknown.

:::example Indeterminate

## Customization

### Custom recipe

Extend `progressRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
