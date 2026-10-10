## Import

```ts
import { CircularProgress } from "@pisagor/svelte";
```

## Examples

### Default

Show completion on a circular track.

:::example Default

### Sizes

Match ring size to available space and importance.

:::example Sizes

### Thickness

Adjust stroke thickness for visibility at the chosen size.

:::example Thickness

### With Value

Display the numeric percentage next to or inside the ring.

:::example WithValue

### Controlled

Drive the value from the parent while async work runs.

:::example Controlled

### Indeterminate

Animate without a value when progress cannot be measured yet.

:::example Indeterminate

## Customization

### Custom recipe

Extend `circularProgressRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
