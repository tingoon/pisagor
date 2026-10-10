import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import thicknessRaw from "./thickness.tsx?raw";
import with_valueRaw from "./with-value.tsx?raw";

export const imports = `import { CircularProgress } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  Thickness: thicknessRaw,
  WithValue: with_valueRaw,
} as const;
