import Collapsible from "./collapsible.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import EdgeHandle from "./edge-handle.svelte?raw";
import Handle from "./handle.svelte?raw";
import MinMax from "./min-max.svelte?raw";
import MultiplePanels from "./multiple-panels.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";

export const imports = `import { Resizable } from "@pisagor/svelte";`;

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
