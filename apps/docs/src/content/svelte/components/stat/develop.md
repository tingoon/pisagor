## Import

```ts
import { Stat } from "@pisagor/svelte";
```

## Examples

### Default

Highlight a key metric with supporting context.

:::example Default

### Variants

Choose emphasis so the stat matches dashboard hierarchy.

:::example Variants

### With Trend

Show direction of change when trend matters alongside the value.

:::example WithTrend

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

## Customization

### Custom recipe

Extend `statRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
