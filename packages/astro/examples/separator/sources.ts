import CustomRecipe from "./custom-recipe.astro?raw";
import Decorative from "./decorative.astro?raw";
import Default from "./default.astro?raw";
import InlineNavigation from "./inline-navigation.astro?raw";
import List from "./list.astro?raw";
import Vertical from "./vertical.astro?raw";

export const imports = `---
import { Separator } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Decorative,
  Default,
  InlineNavigation,
  List,
  Vertical,
} as const;
