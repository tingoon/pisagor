import custom_recipeRaw from "./custom-recipe.astro?raw";
import custom_spacingRaw from "./custom-spacing.astro?raw";
import defaultRaw from "./default.astro?raw";
import iconRaw from "./icon.astro?raw";
import productRaw from "./product.astro?raw";

export const imports = `---
import { Card } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Icon: iconRaw,
  Product: productRaw,
} as const;
