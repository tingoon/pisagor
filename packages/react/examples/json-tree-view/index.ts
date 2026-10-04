import { stripTsxExample } from "@pisagor/utils";
import data_typesRaw from "./data-types.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import expand_depthRaw from "./expand-depth.tsx?raw";
import map_setRaw from "./map-set.tsx?raw";

export const imports = `import { JsonTreeView } from "@pisagor/react/json-tree-view";`;

export const sources = {
  DataTypes: stripTsxExample(data_typesRaw),
  Default: stripTsxExample(defaultRaw),
  ExpandDepth: stripTsxExample(expand_depthRaw),
  MapSet: stripTsxExample(map_setRaw),
} as const;

export { DataTypes } from "./data-types";
export { Default } from "./default";
export { ExpandDepth } from "./expand-depth";
export { MapSet } from "./map-set";
