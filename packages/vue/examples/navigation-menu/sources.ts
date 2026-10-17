import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.ts?raw";
import Submenu from "./submenu.vue?raw";
import Wrapping from "./wrapping.ts?raw";

export const imports = `import { NavigationMenu } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  Submenu,
  Wrapping,
} as const;
