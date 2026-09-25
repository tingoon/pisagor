import { ImageCropper } from "@pisagor/react";
import * as Examples from "@pisagor/react/image-cropper/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ImageCropper,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users crop and adjust an image selection before saving or uploading it.",
      },
    },
  },
  title: "Components/Media/Image Cropper",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const AspectRatio = meta.story({
  render: Examples.AspectRatio,
});

export const CircleCrop = meta.story({
  render: Examples.CircleCrop,
});

export const FixedCropArea = meta.story({
  render: Examples.FixedCropArea,
});

export const InitialCrop = meta.story({
  render: Examples.InitialCrop,
});

export const MinMaxSize = meta.story({
  render: Examples.MinMaxSize,
});

export const ZoomLimits = meta.story({
  render: Examples.ZoomLimits,
});

export const ControlledZoom = meta.story({
  render: Examples.ControlledZoom,
});

export const Default = meta.story({
  render: Examples.Default,
});
