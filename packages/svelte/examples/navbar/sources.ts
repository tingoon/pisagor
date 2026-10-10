import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_sidebarRaw from "./with-sidebar.svelte?raw";

export const imports = `import { Navbar } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithSidebar: with_sidebarRaw,
} as const;
