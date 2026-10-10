## Import

```ts
import { Input } from "@pisagor/svelte";
```

## Examples

### Variants

Choose visual weight or emphasis so the input matches importance in the surrounding layout.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the input needs emphasis.

:::example Sizes

### Clearable

Offer a clear control for search-like fields where resetting quickly matters.

:::example Clearable

### File

Use a file-styled input when the control picks a file path or upload target.

:::example File

### Controlled

Manage state from the parent when other UI must stay in sync with this input.

:::example Controlled

### Disabled

Show that the input is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the input needs attention before continuing.

:::example Invalid

## Customization

### Custom recipe

Extend `inputRecipe` with `tv({ extend })` and pass it to `recipe` to restyle the clearable input's inner control across the app.

:::example CustomRecipe
