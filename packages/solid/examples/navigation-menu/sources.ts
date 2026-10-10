import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import wrappingRaw from "./wrapping.tsx?raw";

export const imports = `import { NavigationMenu } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Wrapping: wrappingRaw,
} as const;
