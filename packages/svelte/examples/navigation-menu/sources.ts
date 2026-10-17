import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Submenu from "./submenu.svelte?raw";
import Wrapping from "./wrapping.svelte?raw";

export const imports = `import { NavigationMenu } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  Submenu,
  Wrapping,
} as const;
