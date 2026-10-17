import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import DataTypes from "./data-types.svelte?raw";
import Default from "./default.svelte?raw";
import ExpandDepth from "./expand-depth.svelte?raw";
import MapSet from "./map-set.svelte?raw";

export const imports = `import { JsonTreeView } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  DataTypes,
  Default,
  ExpandDepth,
  MapSet,
} as const;
