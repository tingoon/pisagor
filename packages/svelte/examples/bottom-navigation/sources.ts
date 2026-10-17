import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import IconOnly from "./icon-only.svelte?raw";
import WithLinks from "./with-links.svelte?raw";

export const imports = `import { BottomNavigation } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  IconOnly,
  WithLinks,
} as const;
