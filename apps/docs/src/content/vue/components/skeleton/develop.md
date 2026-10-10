## Import

```ts
import { Skeleton } from "@pisagor/vue";
```

## Examples

### Default

Pulse placeholders while content loads.

:::example Default

### Skeleton Text

Approximate lines of text so reading layout stays stable.

:::example SkeletonText

### In Card

Place skeletons inside a card when that surface is loading.

:::example InCard

## Customization

### Custom recipe

Extend `skeletonRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
