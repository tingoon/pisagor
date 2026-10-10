import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import indeterminateRaw from "./indeterminate.astro?raw";
import orientation_horizontalRaw from "./orientation-horizontal.astro?raw";
import orientation_verticalRaw from "./orientation-vertical.astro?raw";
import with_labelRaw from "./with-label.astro?raw";

export const imports = `---
import { Progress } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithLabel: with_labelRaw,
} as const;
