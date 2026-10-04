import collapsibleRaw from "./collapsible.vue?raw";
import defaultRaw from "./default.vue?raw";
import edge_handleRaw from "./edge-handle.vue?raw";
import handleRaw from "./handle.vue?raw";
import min_maxRaw from "./min-max.vue?raw";
import multiple_panelsRaw from "./multiple-panels.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";

export const imports = `import { Resizable } from "@pisagor/vue";`;

export const sources = {
  Collapsible: collapsibleRaw,
  Default: defaultRaw,
  EdgeHandle: edge_handleRaw,
  Handle: handleRaw,
  MinMax: min_maxRaw,
  MultiplePanels: multiple_panelsRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
} as const;

export { default as Collapsible } from "./collapsible.vue";
export { default as Default } from "./default.vue";
export { default as EdgeHandle } from "./edge-handle.vue";
export { default as Handle } from "./handle.vue";
export { default as MinMax } from "./min-max.vue";
export { default as MultiplePanels } from "./multiple-panels.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
