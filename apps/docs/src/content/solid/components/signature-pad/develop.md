## Import

```tsx
import { SignaturePad } from "@pisagor/solid";
```

## Examples

### Default

Capture a handwritten signature with pointer or touch input.

:::example Default

### Image Preview

Preview the signature image before submit.

:::example ImagePreview

### Compound

Compose the pad from `Root`, `Control`, `Segment`, `Clear` and `Guide`.

:::example Compound

### Controlled

Drive stroke data from the parent when signature state lives above.

:::example Controlled

### Disabled

Show that signing is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the signature pad needs attention before continuing.

:::example Invalid

## Customization

### Custom recipe

Extend `signaturePadRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
