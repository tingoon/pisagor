import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import indeterminateRaw from "./indeterminate.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import thicknessRaw from "./thickness.svelte?raw";
import with_valueRaw from "./with-value.svelte?raw";

export const imports = `import { CircularProgress } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  Thickness: thicknessRaw,
  WithValue: with_valueRaw,
} as const;
