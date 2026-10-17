import Collapsible from "./collapsible.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import EdgeHandle from "./edge-handle.vue?raw";
import Handle from "./handle.vue?raw";
import MinMax from "./min-max.vue?raw";
import MultiplePanels from "./multiple-panels.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";

export const imports = `import { Resizable } from "@pisagor/vue";`;

export const sources = {
  Collapsible,
  CustomRecipe,
  Default,
  EdgeHandle,
  Handle,
  MinMax,
  MultiplePanels,
  OrientationHorizontal,
  OrientationVertical,
} as const;
