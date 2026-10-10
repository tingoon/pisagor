import custom_recipeRaw from "./custom-recipe.tsx?raw";
import data_typesRaw from "./data-types.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import expand_depthRaw from "./expand-depth.tsx?raw";
import map_setRaw from "./map-set.tsx?raw";

export const imports = `import { JsonTreeView } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  DataTypes: data_typesRaw,
  Default: defaultRaw,
  ExpandDepth: expand_depthRaw,
  MapSet: map_setRaw,
} as const;
