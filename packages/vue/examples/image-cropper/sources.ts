import aspect_ratioRaw from "./aspect-ratio.vue?raw";
import circle_cropRaw from "./circle-crop.vue?raw";
import controlled_zoomRaw from "./controlled-zoom.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import fixed_crop_areaRaw from "./fixed-crop-area.vue?raw";
import initial_cropRaw from "./initial-crop.vue?raw";
import min_max_sizeRaw from "./min-max-size.vue?raw";
import zoom_limitsRaw from "./zoom-limits.vue?raw";

export const imports = `import { ImageCropper } from "@pisagor/vue";`;

export const sources = {
  AspectRatio: aspect_ratioRaw,
  CircleCrop: circle_cropRaw,
  ControlledZoom: controlled_zoomRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  FixedCropArea: fixed_crop_areaRaw,
  InitialCrop: initial_cropRaw,
  MinMaxSize: min_max_sizeRaw,
  ZoomLimits: zoom_limitsRaw,
} as const;
