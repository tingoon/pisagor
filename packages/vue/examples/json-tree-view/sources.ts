import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import data_typesRaw from "./data-types.vue?raw";
import defaultRaw from "./default.vue?raw";
import expand_depthRaw from "./expand-depth.vue?raw";
import map_setRaw from "./map-set.vue?raw";

export const imports = `import { JsonTreeView } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  DataTypes: data_typesRaw,
  Default: defaultRaw,
  ExpandDepth: expand_depthRaw,
  MapSet: map_setRaw,
} as const;
