## Import

```ts
import { Badge } from "@pisagor/svelte";
```

## Examples

### Variants

Choose tone so the badge reflects status severity or category.

:::example Variants

### Sizes

Match badge size to nearby text and controls.

:::example Sizes

### Pill

Use a fully rounded shape when softer, chip-like geometry fits the layout.

:::example Pill

### With Link

Make the badge navigate when the label itself is a destination.

:::example WithLink

### With Spinner

Show a spinner inside the badge when the status is still loading.

:::example WithSpinner

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override the fill when a brand or contextual color matters more than the theme default.

:::example CustomColor

### Custom recipe

Extend `badgeRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
