import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import inline_navigationRaw from "./inline-navigation.astro?raw";
import listRaw from "./list.astro?raw";
import verticalRaw from "./vertical.astro?raw";

export const imports = `---
import { Separator } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InlineNavigation: inline_navigationRaw,
  List: listRaw,
  Vertical: verticalRaw,
} as const;
