## Import

```ts
import { PhoneInput } from "@pisagor/svelte/phone-input";
```

## Examples

### Variants

Choose visual weight or emphasis so the phone input matches importance in the surrounding layout.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the phone input needs emphasis.

:::example Sizes

### Custom Popup

Customize the country popup when the default list presentation is not enough.

:::example CustomPopup

### Controlled

Manage state from the parent when other UI must stay in sync with this phone input.

:::example Controlled

### Disabled

Show that the phone input is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the phone input needs attention before continuing.

:::example Invalid

## Customization

### Custom recipe

Extend `phoneInputRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
