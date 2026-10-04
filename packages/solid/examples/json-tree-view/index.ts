import data_typesRaw from "./data-types.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import expand_depthRaw from "./expand-depth.tsx?raw";
import map_setRaw from "./map-set.tsx?raw";

export const imports = `import { JsonTreeView } from "@pisagor/solid";`;

export const sources = {
  DataTypes: data_typesRaw,
  Default: defaultRaw,
  ExpandDepth: expand_depthRaw,
  MapSet: map_setRaw,
} as const;

export * from "./data-types";
export * from "./default";
export * from "./expand-depth";
export * from "./map-set";
