import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import marksRaw from "./marks.vue?raw";
import min_maxRaw from "./min-max.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import rangeRaw from "./range.vue?raw";
import stepRaw from "./step.vue?raw";
import variantsRaw from "./variants.vue?raw";
import verticalRaw from "./vertical.vue?raw";
import with_labelRaw from "./with-label.vue?raw";

export const imports = `import { Slider } from "@pisagor/vue/slider";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  Marks: stripVueExample(marksRaw),
  MinMax: stripVueExample(min_maxRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Range: stripVueExample(rangeRaw),
  Step: stripVueExample(stepRaw),
  Variants: stripVueExample(variantsRaw),
  Vertical: stripVueExample(verticalRaw),
  WithLabel: stripVueExample(with_labelRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as Marks } from "./marks.vue";
export { default as MinMax } from "./min-max.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Range } from "./range.vue";
export { default as Step } from "./step.vue";
export { default as Variants } from "./variants.vue";
export { default as Vertical } from "./vertical.vue";
export { default as WithLabel } from "./with-label.vue";
