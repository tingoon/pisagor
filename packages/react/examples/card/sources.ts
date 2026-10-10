import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import productRaw from "./product.tsx?raw";

export const imports = `import { Card } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Icon: iconRaw,
  Product: productRaw,
} as const;
