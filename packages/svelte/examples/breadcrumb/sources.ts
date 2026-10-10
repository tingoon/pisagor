import collapsedRaw from "./collapsed.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_separatorRaw from "./custom-separator.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";
import with_menuRaw from "./with-menu.svelte?raw";

export const imports = `import { Breadcrumb } from "@pisagor/svelte";`;

export const sources = {
  Collapsed: collapsedRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
  WithMenu: with_menuRaw,
} as const;
