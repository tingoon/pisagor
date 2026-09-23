import { stripVueExample } from "@pisagor/utils";
import aspect_ratioRaw from "./aspect-ratio.vue?raw";
import circle_cropRaw from "./circle-crop.vue?raw";
import controlled_zoomRaw from "./controlled-zoom.vue?raw";
import defaultRaw from "./default.vue?raw";
import fixed_crop_areaRaw from "./fixed-crop-area.vue?raw";
import initial_cropRaw from "./initial-crop.vue?raw";
import min_max_sizeRaw from "./min-max-size.vue?raw";
import zoom_limitsRaw from "./zoom-limits.vue?raw";

export const imports = `import { ImageCropper } from "@pisagor/vue/image-cropper";`;

export const sources = {
  AspectRatio: stripVueExample(aspect_ratioRaw),
  CircleCrop: stripVueExample(circle_cropRaw),
  ControlledZoom: stripVueExample(controlled_zoomRaw),
  Default: stripVueExample(defaultRaw),
  FixedCropArea: stripVueExample(fixed_crop_areaRaw),
  InitialCrop: stripVueExample(initial_cropRaw),
  MinMaxSize: stripVueExample(min_max_sizeRaw),
  ZoomLimits: stripVueExample(zoom_limitsRaw),
} as const;

export { default as AspectRatio } from "./aspect-ratio.vue";
export { default as CircleCrop } from "./circle-crop.vue";
export { default as ControlledZoom } from "./controlled-zoom.vue";
export { default as Default } from "./default.vue";
export { default as FixedCropArea } from "./fixed-crop-area.vue";
export { default as InitialCrop } from "./initial-crop.vue";
export { default as MinMaxSize } from "./min-max-size.vue";
export { default as ZoomLimits } from "./zoom-limits.vue";
