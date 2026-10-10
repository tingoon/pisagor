import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import productRaw from "./product.svelte?raw";

export const imports = `import { Card } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Icon: iconRaw,
  Product: productRaw,
} as const;
