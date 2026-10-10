## Import

```ts
import { ImageCropper } from "@pisagor/vue";
```

## Anatomy

```vue
<ImageCropper>
  <ImageCropper.Image />
  <ImageCropper.Selection />
</ImageCropper>
```

## Examples

### Default

Crop and adjust an image before save or upload.

:::example Default

### Aspect Ratio

Lock the crop to a ratio when the output shape is fixed.

:::example AspectRatio

### Circle Crop

Use a circular crop when the result is an avatar-style image.

:::example CircleCrop

### Fixed Crop Area

Keep the crop area fixed when users should pan the image underneath.

:::example FixedCropArea

### Initial Crop

Start from a predefined crop when a sensible default exists.

:::example InitialCrop

### Min Max Size

Clamp crop size so results stay within usable bounds.

:::example MinMaxSize

### Zoom Limits

Limit zoom so users cannot overscale the image.

:::example ZoomLimits

### Controlled Zoom

Drive zoom from the parent when external controls adjust scale.

:::example ControlledZoom

## Customization

### Custom recipe

Extend `imageCropperRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
