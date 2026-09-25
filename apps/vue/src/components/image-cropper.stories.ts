import { ImageCropper } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/image-cropper/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const AspectRatio = meta.story({
  render: exampleRender(Examples.AspectRatio),
});

export const CircleCrop = meta.story({
  render: exampleRender(Examples.CircleCrop),
});

export const FixedCropArea = meta.story({
  render: exampleRender(Examples.FixedCropArea),
});

export const InitialCrop = meta.story({
  render: exampleRender(Examples.InitialCrop),
});

export const MinMaxSize = meta.story({
  render: exampleRender(Examples.MinMaxSize),
});

export const ZoomLimits = meta.story({
  render: exampleRender(Examples.ZoomLimits),
});

export const ControlledZoom = meta.story({
  render: exampleRender(Examples.ControlledZoom),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
