import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import DataTypes from "./data-types.vue?raw";
import Default from "./default.vue?raw";
import ExpandDepth from "./expand-depth.vue?raw";
import MapSet from "./map-set.vue?raw";

export const imports = `import { JsonTreeView } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  DataTypes,
  Default,
  ExpandDepth,
  MapSet,
} as const;
