import { stripVueExample } from "@pisagor/utils";
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

export const imports = `import { CircularSlider } from "@pisagor/vue/circular-slider";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  CustomMarkers: stripVueExample(custom_markersRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
  Step: stripVueExample(stepRaw),
  Thickness: stripVueExample(thicknessRaw),
  WithMarkers: stripVueExample(with_markersRaw),
  WithValue: stripVueExample(with_valueRaw),
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
