import collapsedRaw from "./collapsed.astro?raw";
import compoundRaw from "./compound.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import custom_separatorRaw from "./custom-separator.astro?raw";
import defaultRaw from "./default.astro?raw";
import with_linkRaw from "./with-link.astro?raw";

export const imports = `---
import { Breadcrumb } from "@pisagor/astro";
---`;

export const sources = {
  Collapsed: collapsedRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
} as const;
