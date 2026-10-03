import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import indeterminateRaw from "./indeterminate.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import with_labelRaw from "./with-label.vue?raw";

export const imports = `import { Progress } from "@pisagor/vue/progress";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Indeterminate: stripVueExample(indeterminateRaw),
  OrientationHorizontal: stripVueExample(orientation_horizontalRaw),
  OrientationVertical: stripVueExample(orientation_verticalRaw),
  WithLabel: stripVueExample(with_labelRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Indeterminate } from "./indeterminate.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as WithLabel } from "./with-label.vue";
