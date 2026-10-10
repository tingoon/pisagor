## Import

```ts
import { Breadcrumb } from "@pisagor/astro";
```

## Examples

### Default

The full path from root to the current page.

:::example Default

### Collapsed

Collapse middle segments when the path is long so the current page stays visible.

:::example Collapsed

### Custom Separator

Replace the default separator when brand or locale needs a different divider.

:::example CustomSeparator

### Compound

Compose items and separators from parts for a custom breadcrumb layout.

:::example Compound

### As child

Link ancestors so users can jump back through the hierarchy.

:::example WithLink

## Customization

### Custom recipe

Extend `breadcrumbRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
