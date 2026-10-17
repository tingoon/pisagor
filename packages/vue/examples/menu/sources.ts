import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.ts?raw";
import WithGroups from "./with-groups.ts?raw";

export const imports = `import { Menu } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  WithGroups,
} as const;
