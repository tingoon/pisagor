---
title: Image Cropper
description: "Lets users crop and adjust an image selection before saving or uploading it."
api: compound
taxonomy: pattern
---

## When to use

- Crop and adjust an image before save or upload.
- Lock aspect ratio or use circle crop when the output shape is fixed.
- Set min/max and zoom limits so users cannot produce unusable crops.

## Import

```ts
import { ImageCropper } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/image-cropper` — no app-level `tv()`.

## Examples

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

### Default

Crop and adjust an image before save or upload.

:::example Default

