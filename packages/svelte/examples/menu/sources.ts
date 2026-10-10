import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_groupsRaw from "./with-groups.svelte?raw";

export const imports = `import { Menu } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithGroups: with_groupsRaw,
} as const;
