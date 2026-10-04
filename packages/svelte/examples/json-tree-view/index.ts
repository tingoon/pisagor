import data_typesRaw from "./data-types.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import expand_depthRaw from "./expand-depth.svelte?raw";
import map_setRaw from "./map-set.svelte?raw";

export const imports = `import { JsonTreeView } from "@pisagor/svelte";`;

export const sources = {
  DataTypes: data_typesRaw,
  Default: defaultRaw,
  ExpandDepth: expand_depthRaw,
  MapSet: map_setRaw,
} as const;

export { default as DataTypes } from "./data-types.svelte";
export { default as Default } from "./default.svelte";
export { default as ExpandDepth } from "./expand-depth.svelte";
export { default as MapSet } from "./map-set.svelte";
