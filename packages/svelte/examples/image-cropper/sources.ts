import AspectRatio from "./aspect-ratio.svelte?raw";
import CircleCrop from "./circle-crop.svelte?raw";
import ControlledZoom from "./controlled-zoom.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import FixedCropArea from "./fixed-crop-area.svelte?raw";
import InitialCrop from "./initial-crop.svelte?raw";
import MinMaxSize from "./min-max-size.svelte?raw";
import ZoomLimits from "./zoom-limits.svelte?raw";

export const imports = `import { ImageCropper } from "@pisagor/svelte";`;

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
