import custom_recipeRaw from "./custom-recipe.svelte?raw";
import data_typesRaw from "./data-types.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import expand_depthRaw from "./expand-depth.svelte?raw";
import map_setRaw from "./map-set.svelte?raw";

export const imports = `import { JsonTreeView } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  DataTypes: data_typesRaw,
  Default: defaultRaw,
  ExpandDepth: expand_depthRaw,
  MapSet: map_setRaw,
} as const;
