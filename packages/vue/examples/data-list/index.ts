import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.vue?raw";
import info_tipRaw from "./info-tip.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import separatorRaw from "./separator.vue?raw";

export const imports = `import { DataList } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  InfoTip: info_tipRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Separator: separatorRaw,
} as const;

export { default as Compound } from "./compound.vue";
export { default as Default } from "./default.vue";
export { default as InfoTip } from "./info-tip.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as Separator } from "./separator.vue";
