## Import

```ts
import { Switch } from "@pisagor/svelte";
```

## Examples

### Default

Toggle a setting on or off with immediate effect.

:::example Default

### Variants

Choose emphasis to match other controls in the form.

:::example Variants

### Sizes

Match switch size to surrounding form density.

:::example Sizes

### Controlled

Drive checked state from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the setting cannot change.

:::example Disabled

### Invalid

Surface a validation error when the setting is required or not allowed.

:::example Invalid

## Customization

### Custom recipe

Extend `switchRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
