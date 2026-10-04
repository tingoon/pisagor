import data_typesRaw from "./data-types.vue?raw";
import defaultRaw from "./default.vue?raw";
import expand_depthRaw from "./expand-depth.vue?raw";
import map_setRaw from "./map-set.vue?raw";

export const imports = `import { JsonTreeView } from "@pisagor/vue";`;

export const sources = {
  DataTypes: data_typesRaw,
  Default: defaultRaw,
  ExpandDepth: expand_depthRaw,
  MapSet: map_setRaw,
} as const;

export { default as DataTypes } from "./data-types.vue";
export { default as Default } from "./default.vue";
export { default as ExpandDepth } from "./expand-depth.vue";
export { default as MapSet } from "./map-set.vue";
