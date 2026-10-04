import controlledRaw from "./controlled.vue?raw";
import custom_markersRaw from "./custom-markers.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import stepRaw from "./step.vue?raw";
import thicknessRaw from "./thickness.vue?raw";
import with_markersRaw from "./with-markers.vue?raw";
import with_valueRaw from "./with-value.vue?raw";

export const imports = `import { CircularSlider } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomMarkers: custom_markersRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  OnSurface: on_surfaceRaw,
  Sizes: sizesRaw,
  Step: stepRaw,
  Thickness: thicknessRaw,
  WithMarkers: with_markersRaw,
  WithValue: with_valueRaw,
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as CustomMarkers } from "./custom-markers.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Step } from "./step.vue";
export { default as Thickness } from "./thickness.vue";
export { default as WithMarkers } from "./with-markers.vue";
export { default as WithValue } from "./with-value.vue";
