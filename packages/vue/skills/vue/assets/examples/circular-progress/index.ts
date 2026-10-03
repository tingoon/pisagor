import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import indeterminateRaw from "./indeterminate.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import thicknessRaw from "./thickness.vue?raw";
import with_valueRaw from "./with-value.vue?raw";

export const imports = `import { CircularProgress } from "@pisagor/vue/circular-progress";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Indeterminate: stripVueExample(indeterminateRaw),
  Sizes: stripVueExample(sizesRaw),
  Thickness: stripVueExample(thicknessRaw),
  WithValue: stripVueExample(with_valueRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Indeterminate } from "./indeterminate.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Thickness } from "./thickness.vue";
export { default as WithValue } from "./with-value.vue";
