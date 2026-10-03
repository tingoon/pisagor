import { stripVueExample } from "@pisagor/utils";
import data_typesRaw from "./data-types.vue?raw";
import defaultRaw from "./default.vue?raw";
import expand_depthRaw from "./expand-depth.vue?raw";
import map_setRaw from "./map-set.vue?raw";

export const imports = `import { JsonTreeView } from "@pisagor/vue/json-tree-view";`;

export const sources = {
  DataTypes: stripVueExample(data_typesRaw),
  Default: stripVueExample(defaultRaw),
  ExpandDepth: stripVueExample(expand_depthRaw),
  MapSet: stripVueExample(map_setRaw),
} as const;

export { default as DataTypes } from "./data-types.vue";
export { default as Default } from "./default.vue";
export { default as ExpandDepth } from "./expand-depth.vue";
export { default as MapSet } from "./map-set.vue";
