import {
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperRoot,
  ImageCropperSelection,
} from "./image-cropper";

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
} from "@ark-ui/react/image-cropper";

export type { ImageCropperRootProps, ImageCropperSelectionProps } from "./image-cropper";

export const ImageCropper = Object.assign(ImageCropperRoot, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
});
