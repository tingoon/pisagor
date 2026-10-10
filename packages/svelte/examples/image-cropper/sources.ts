import aspect_ratioRaw from "./aspect-ratio.svelte?raw";
import circle_cropRaw from "./circle-crop.svelte?raw";
import controlled_zoomRaw from "./controlled-zoom.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import fixed_crop_areaRaw from "./fixed-crop-area.svelte?raw";
import initial_cropRaw from "./initial-crop.svelte?raw";
import min_max_sizeRaw from "./min-max-size.svelte?raw";
import zoom_limitsRaw from "./zoom-limits.svelte?raw";

export const imports = `import { ImageCropper } from "@pisagor/svelte";`;

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
