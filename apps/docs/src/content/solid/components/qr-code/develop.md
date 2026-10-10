## Import

```tsx
import { QrCode } from "@pisagor/solid";
```

## Examples

### Default

Display a scannable QR code for a link or payload.

:::example Default

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the QR code needs emphasis.

:::example Sizes

### Error Correction

Raise error correction when the code may be partially covered or printed small.

:::example ErrorCorrection

### Overlay

Overlay a mark on the code when branding sits in the center.

:::example Overlay

### Compound

Compose the frame and pattern parts when you need to place extra content around the code.

:::example Compound

### Download

Offer download when users need to save or print the code.

:::example Download

## Customization

### Custom recipe

Extend `qrCodeRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
