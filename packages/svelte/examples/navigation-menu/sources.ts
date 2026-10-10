import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import wrappingRaw from "./wrapping.svelte?raw";

export const imports = `import { NavigationMenu } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Wrapping: wrappingRaw,
} as const;
