import AspectRatio from "./aspect-ratio.vue?raw";
import CircleCrop from "./circle-crop.vue?raw";
import ControlledZoom from "./controlled-zoom.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import FixedCropArea from "./fixed-crop-area.vue?raw";
import InitialCrop from "./initial-crop.vue?raw";
import MinMaxSize from "./min-max-size.vue?raw";
import ZoomLimits from "./zoom-limits.vue?raw";

export const imports = `import { ImageCropper } from "@pisagor/vue";`;

export const sources = {
  AspectRatio,
  CircleCrop,
  ControlledZoom,
  CustomRecipe,
  Default,
  FixedCropArea,
  InitialCrop,
  MinMaxSize,
  ZoomLimits,
} as const;
