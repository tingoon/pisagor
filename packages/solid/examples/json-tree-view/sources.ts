import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DataTypesSource as DataTypes } from "./data-types";
import { DefaultSource as Default } from "./default";
import { ExpandDepthSource as ExpandDepth } from "./expand-depth";
import { MapSetSource as MapSet } from "./map-set";

export const imports = `import { JsonTreeView } from "@pisagor/solid";`;

export const sources = {
  Compound,
  CustomRecipe,
  DataTypes,
  Default,
  ExpandDepth,
  MapSet,
} as const;
