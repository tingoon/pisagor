## Import

```ts
import { Kbd } from "@pisagor/vue";
```

## Examples

### Variants

Choose visual weight or emphasis so the keyboard badge matches importance in the surrounding layout.

:::example Variants

### Kbd Group

Group several keys when the shortcut is a chord.

:::example KbdGroup

### With Button

Place the badge next to a button that performs the same action.

:::example WithButton

### With Tooltip

Explain the shortcut with a short tooltip when the keys alone are unclear.

:::example WithTooltip

## Customization

### Custom recipe

Extend `kbdRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
