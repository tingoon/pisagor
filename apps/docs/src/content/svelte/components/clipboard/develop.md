## Import

```ts
import { Clipboard } from "@pisagor/svelte";
```

## Examples

### Variants

Choose button emphasis to match surrounding actions.

:::example Variants

### Different Icon

Swap icons when a different metaphor fits the copied content.

:::example DifferentIcon

### With Label

Show a text label when an icon alone is not clear enough.

:::example WithLabel

### Controlled

Drive copied state from the parent when feedback is coordinated elsewhere.

:::example Controlled

### Custom Timeout

Change how long the success state shows before resetting.

:::example CustomTimeout

## Customization

### Custom recipe

Extend `clipboardRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
