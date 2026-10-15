import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.ts?raw";
import submenuRaw from "./submenu.vue?raw";
import wrappingRaw from "./wrapping.ts?raw";

export const imports = `import { NavigationMenu } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Submenu: submenuRaw,
  Wrapping: wrappingRaw,
} as const;
