import { stripTsxExample } from "@pisagor/utils";
import aspect_ratioRaw from "./aspect-ratio.tsx?raw";
import circle_cropRaw from "./circle-crop.tsx?raw";
import controlled_zoomRaw from "./controlled-zoom.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import fixed_crop_areaRaw from "./fixed-crop-area.tsx?raw";
import initial_cropRaw from "./initial-crop.tsx?raw";
import min_max_sizeRaw from "./min-max-size.tsx?raw";
import zoom_limitsRaw from "./zoom-limits.tsx?raw";

export const imports = `import { ImageCropper } from "@pisagor/react/image-cropper";`;

export const sources = {
  AspectRatio: stripTsxExample(aspect_ratioRaw),
  CircleCrop: stripTsxExample(circle_cropRaw),
  ControlledZoom: stripTsxExample(controlled_zoomRaw),
  Default: stripTsxExample(defaultRaw),
  FixedCropArea: stripTsxExample(fixed_crop_areaRaw),
  InitialCrop: stripTsxExample(initial_cropRaw),
  MinMaxSize: stripTsxExample(min_max_sizeRaw),
  ZoomLimits: stripTsxExample(zoom_limitsRaw),
} as const;

export { AspectRatio } from "./aspect-ratio";
export { CircleCrop } from "./circle-crop";
export { ControlledZoom } from "./controlled-zoom";
export { Default } from "./default";
export { FixedCropArea } from "./fixed-crop-area";
export { InitialCrop } from "./initial-crop";
export { MinMaxSize } from "./min-max-size";
export { ZoomLimits } from "./zoom-limits";
