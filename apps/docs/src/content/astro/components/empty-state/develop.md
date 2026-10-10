## Import

```ts
import { EmptyState } from "@pisagor/astro";
```

## Examples

### Default

Explain that a view has no data and point to the next action.

:::example Default

### Compact

Use a denser empty state when the region is small.

:::example Compact

### Compound

Compose icon, title, and actions from parts for a custom empty layout.

:::example Compound

## Customization

### Custom recipe

Extend `emptyStateRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
