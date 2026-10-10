## Import

```tsx
import { Highlight } from "@pisagor/react";
```

## Examples

### Default

Emphasize matching substrings in text.

:::example Default

### Squiggle

Use a squiggle emphasis when the match needs a distinct treatment.

:::example Squiggle

### Multiple

Allow more than one open or selected item when users need several at once.

:::example Multiple

### Search Query

Highlight query matches in search results.

:::example SearchQuery

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Override highlight style when brand treatment differs from the default.

:::example CustomStyle

### Custom recipe

Extend `highlightRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
