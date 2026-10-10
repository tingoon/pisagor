import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import inline_navigationRaw from "./inline-navigation.svelte?raw";
import listRaw from "./list.svelte?raw";
import verticalRaw from "./vertical.svelte?raw";

export const imports = `import { Separator } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InlineNavigation: inline_navigationRaw,
  List: listRaw,
  Vertical: verticalRaw,
} as const;
