import { stripSvelteExample } from "@pisagor/utils";
import data_typesRaw from "./data-types.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import expand_depthRaw from "./expand-depth.svelte?raw";
import map_setRaw from "./map-set.svelte?raw";

export const imports = `import { JsonTreeView } from "@pisagor/svelte/json-tree-view";`;

export const sources = {
  DataTypes: stripSvelteExample(data_typesRaw),
  Default: stripSvelteExample(defaultRaw),
  ExpandDepth: stripSvelteExample(expand_depthRaw),
  MapSet: stripSvelteExample(map_setRaw),
} as const;

export { default as DataTypes } from "./data-types.svelte";
export { default as Default } from "./default.svelte";
export { default as ExpandDepth } from "./expand-depth.svelte";
export { default as MapSet } from "./map-set.svelte";
