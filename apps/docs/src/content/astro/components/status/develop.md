## Import

```ts
import { Status } from "@pisagor/astro";
```

## Examples

### Variants

Choose color tone for availability or severity. Pair with text for accessibility.

:::example Variants

### Sizes

Match size to the surrounding chrome.

:::example Sizes

### With Icon

Pair an icon with the label to reinforce meaning.

:::example WithIcon

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override the fill or accent when a brand or contextual color matters more than the theme default.

:::example CustomColor

Resize the indicator to match nearby text and density.

:::example CustomSize

### Custom recipe

Extend `statusRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
