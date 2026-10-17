import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import WithGroups from "./with-groups.svelte?raw";

export const imports = `import { Menu } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  WithGroups,
} as const;
