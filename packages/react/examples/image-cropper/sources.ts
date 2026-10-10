import aspect_ratioRaw from "./aspect-ratio.tsx?raw";
import circle_cropRaw from "./circle-crop.tsx?raw";
import controlled_zoomRaw from "./controlled-zoom.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import fixed_crop_areaRaw from "./fixed-crop-area.tsx?raw";
import initial_cropRaw from "./initial-crop.tsx?raw";
import min_max_sizeRaw from "./min-max-size.tsx?raw";
import zoom_limitsRaw from "./zoom-limits.tsx?raw";

export const imports = `import { ImageCropper } from "@pisagor/react";`;

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
