import { AspectRatioSource as AspectRatio } from "./aspect-ratio";
import { CircleCropSource as CircleCrop } from "./circle-crop";
import { ControlledZoomSource as ControlledZoom } from "./controlled-zoom";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { FixedCropAreaSource as FixedCropArea } from "./fixed-crop-area";
import { InitialCropSource as InitialCrop } from "./initial-crop";
import { MinMaxSizeSource as MinMaxSize } from "./min-max-size";
import { ZoomLimitsSource as ZoomLimits } from "./zoom-limits";

export const imports = `import { ImageCropper } from "@pisagor/solid";`;

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
