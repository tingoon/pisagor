import { stripSvelteExample } from "@pisagor/utils";
import aspect_ratioRaw from "./aspect-ratio.svelte?raw";
import circle_cropRaw from "./circle-crop.svelte?raw";
import controlled_zoomRaw from "./controlled-zoom.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import fixed_crop_areaRaw from "./fixed-crop-area.svelte?raw";
import initial_cropRaw from "./initial-crop.svelte?raw";
import min_max_sizeRaw from "./min-max-size.svelte?raw";
import zoom_limitsRaw from "./zoom-limits.svelte?raw";

export const imports = `import { ImageCropper } from "@pisagor/svelte";`;

export const sources = {
  AspectRatio: stripSvelteExample(aspect_ratioRaw),
  CircleCrop: stripSvelteExample(circle_cropRaw),
  ControlledZoom: stripSvelteExample(controlled_zoomRaw),
  Default: stripSvelteExample(defaultRaw),
  FixedCropArea: stripSvelteExample(fixed_crop_areaRaw),
  InitialCrop: stripSvelteExample(initial_cropRaw),
  MinMaxSize: stripSvelteExample(min_max_sizeRaw),
  ZoomLimits: stripSvelteExample(zoom_limitsRaw),
} as const;

export { default as AspectRatio } from "./aspect-ratio.svelte";
export { default as CircleCrop } from "./circle-crop.svelte";
export { default as ControlledZoom } from "./controlled-zoom.svelte";
export { default as Default } from "./default.svelte";
export { default as FixedCropArea } from "./fixed-crop-area.svelte";
export { default as InitialCrop } from "./initial-crop.svelte";
export { default as MinMaxSize } from "./min-max-size.svelte";
export { default as ZoomLimits } from "./zoom-limits.svelte";
