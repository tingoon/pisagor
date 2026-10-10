import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Progress } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithLabel: with_labelRaw,
} as const;
