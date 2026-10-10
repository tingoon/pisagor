import custom_recipeRaw from "./custom-recipe.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Spinner } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Sizes: sizesRaw,
} as const;
