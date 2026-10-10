## Import

```ts
import { InputOTP } from "@pisagor/svelte";
```

## Anatomy

```tsx
<InputOTP>
  <InputOTP.Slot />
  <InputOTP.Separator />
</InputOTP>
```

## Examples

### Variants

Choose visual weight or emphasis so the OTP input matches importance in the surrounding layout.

:::example Variants

### Four Digits

Use four slots when the code length is four.

:::example FourDigits

### Mask

Mask digits when the code should stay private on screen.

:::example Mask

### Separator

Insert a separator between groups so sections stay scannable.

:::example Separator

### With Placeholder

Show placeholders in empty slots to hint at expected length.

:::example WithPlaceholder

### Controlled

Manage state from the parent when other UI must stay in sync with this OTP input.

:::example Controlled

### Disabled

Show that the OTP input is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the OTP input needs attention before continuing.

:::example Invalid

### Blur On Complete

Move focus away when all digits are filled.

:::example BlurOnComplete

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override dimensions when the default size does not fit the layout.

:::example CustomSize

### Custom recipe

Extend `inputOtpRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
