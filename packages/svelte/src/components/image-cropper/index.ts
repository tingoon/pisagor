import ImageCropperGrid from "./image-cropper-grid.svelte";
import ImageCropperHandle from "./image-cropper-handle.svelte";
import ImageCropperImage from "./image-cropper-image.svelte";
import ImageCropperRoot from "./image-cropper-root.svelte";
import ImageCropperSelection from "./image-cropper-selection.svelte";

export const ImageCropper = Object.assign(ImageCropperRoot, {
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Selection: ImageCropperSelection,
});
