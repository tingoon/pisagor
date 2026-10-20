import ImageCropperShorthand from "./image-cropper.svelte";
import Grid from "./image-cropper-grid.svelte";
import Handle from "./image-cropper-handle.svelte";
import Image from "./image-cropper-image.svelte";
import Root from "./image-cropper-root.svelte";
import Selection from "./image-cropper-selection.svelte";
import Viewport from "./image-cropper-viewport.svelte";

export type {
  ImageCropperGridProps,
  ImageCropperHandleProps,
  ImageCropperImageProps,
  ImageCropperSelectionProps,
  ImageCropperViewportProps,
} from "@ark-ui/svelte";

export const ImageCropper = Object.assign(ImageCropperShorthand, {
  Grid,
  Handle,
  Image,
  Root,
  Selection,
  Viewport,
});
