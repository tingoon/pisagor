import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Indeterminate from "./indeterminate.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import WithLabel from "./with-label.svelte?raw";

export const imports = `import { Progress } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Indeterminate,
  OrientationHorizontal,
  OrientationVertical,
  WithLabel,
} as const;
