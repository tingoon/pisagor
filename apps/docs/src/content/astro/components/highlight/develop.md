## Import

```ts
import { Highlight } from "@pisagor/astro";
```

## Examples

### Default

Emphasize matching substrings in text.

:::example Default

### Multiple

Allow more than one open or selected item when users need several at once.

:::example Multiple

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override highlight style when brand treatment differs from the default.

:::example CustomStyle

### Custom recipe

Extend `highlightRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
