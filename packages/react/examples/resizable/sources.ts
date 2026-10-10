import collapsibleRaw from "./collapsible.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import edge_handleRaw from "./edge-handle.tsx?raw";
import handleRaw from "./handle.tsx?raw";
import min_maxRaw from "./min-max.tsx?raw";
import multiple_panelsRaw from "./multiple-panels.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";

export const imports = `import { Resizable } from "@pisagor/react";`;

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
