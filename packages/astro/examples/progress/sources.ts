import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Indeterminate from "./indeterminate.astro?raw";
import OrientationHorizontal from "./orientation-horizontal.astro?raw";
import OrientationVertical from "./orientation-vertical.astro?raw";
import WithLabel from "./with-label.astro?raw";

export const imports = `---
import { Progress } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Default,
  Indeterminate,
  OrientationHorizontal,
  OrientationVertical,
  WithLabel,
} as const;
