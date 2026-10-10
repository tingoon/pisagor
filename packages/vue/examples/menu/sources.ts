import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.ts?raw";
import with_groupsRaw from "./with-groups.ts?raw";

export const imports = `import { Menu } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithGroups: with_groupsRaw,
} as const;
