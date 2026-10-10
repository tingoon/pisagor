import collapsibleRaw from "./collapsible.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import edge_handleRaw from "./edge-handle.vue?raw";
import handleRaw from "./handle.vue?raw";
import min_maxRaw from "./min-max.vue?raw";
import multiple_panelsRaw from "./multiple-panels.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";

export const imports = `import { Resizable } from "@pisagor/vue";`;

export const sources = {
  Collapsible: collapsibleRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  EdgeHandle: edge_handleRaw,
  Handle: handleRaw,
  MinMax: min_maxRaw,
  MultiplePanels: multiple_panelsRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
} as const;
