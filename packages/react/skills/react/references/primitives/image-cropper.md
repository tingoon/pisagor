---
title: Image Cropper
description: Lets users crop and adjust an image selection before saving or uploading it.
api: compound
taxonomy: pattern
examples:
  - id: aspect-ratio
    title: Aspect Ratio
    exportName: AspectRatio
  - id: circle-crop
    title: Circle Crop
    exportName: CircleCrop
  - id: fixed-crop-area
    title: Fixed Crop Area
    exportName: FixedCropArea
  - id: initial-crop
    title: Initial Crop
    exportName: InitialCrop
  - id: min-max-size
    title: Min Max Size
    exportName: MinMaxSize
  - id: zoom-limits
    title: Zoom Limits
    exportName: ZoomLimits
  - id: controlled-zoom
    title: Controlled Zoom
    exportName: ControlledZoom
  - id: default
    title: Default
    exportName: Default
---

## When to use

- Lets users crop and adjust an image selection before saving or uploading it.

## Import

```tsx
import { ImageCropper } from "@pisagor/react/image-cropper";
```

Style with `@pisagor/recipes/image-cropper` — no app-level `tv()`.

Live examples below match `assets/examples/image-cropper/`.
