import collapsibleRaw from "./collapsible.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import edge_handleRaw from "./edge-handle.svelte?raw";
import handleRaw from "./handle.svelte?raw";
import min_maxRaw from "./min-max.svelte?raw";
import multiple_panelsRaw from "./multiple-panels.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";

export const imports = `import { Resizable } from "@pisagor/svelte";`;

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
