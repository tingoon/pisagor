import {
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperRoot,
  ImageCropperSelection,
} from "./image-cropper";

export const ImageCropper = Object.assign(ImageCropperRoot, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
});
