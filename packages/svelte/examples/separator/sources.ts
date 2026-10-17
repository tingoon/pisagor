import CustomRecipe from "./custom-recipe.svelte?raw";
import Decorative from "./decorative.svelte?raw";
import Default from "./default.svelte?raw";
import InlineNavigation from "./inline-navigation.svelte?raw";
import List from "./list.svelte?raw";
import Vertical from "./vertical.svelte?raw";

export const imports = `import { Separator } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Decorative,
  Default,
  InlineNavigation,
  List,
  Vertical,
} as const;
