import Collapsed from "./collapsed.svelte?raw";
import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSeparator from "./custom-separator.svelte?raw";
import Default from "./default.svelte?raw";
import WithLink from "./with-link.svelte?raw";
import WithMenu from "./with-menu.svelte?raw";

export const imports = `import { Breadcrumb } from "@pisagor/svelte";`;

export const sources = {
  Collapsed,
  Compound,
  CustomRecipe,
  CustomSeparator,
  Default,
  WithLink,
  WithMenu,
} as const;
