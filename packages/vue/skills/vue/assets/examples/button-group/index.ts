import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import nestedRaw from "./nested.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import with_separatorRaw from "./with-separator.vue?raw";

export const imports = `import { ButtonGroup } from "@pisagor/vue/button-group";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Nested: stripVueExample(nestedRaw),
  OrientationHorizontal: stripVueExample(orientation_horizontalRaw),
  OrientationVertical: stripVueExample(orientation_verticalRaw),
  WithSeparator: stripVueExample(with_separatorRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Nested } from "./nested.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as WithSeparator } from "./with-separator.vue";
