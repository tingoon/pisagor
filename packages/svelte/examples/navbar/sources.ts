import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import WithSidebar from "./with-sidebar.svelte?raw";

export const imports = `import { Navbar } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  WithSidebar,
} as const;
