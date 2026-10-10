import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import icon_onlyRaw from "./icon-only.svelte?raw";
import with_linksRaw from "./with-links.svelte?raw";

export const imports = `import { BottomNavigation } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  IconOnly: icon_onlyRaw,
  WithLinks: with_linksRaw,
} as const;
