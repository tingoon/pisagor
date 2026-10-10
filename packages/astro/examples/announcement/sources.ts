import compoundRaw from "./compound.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_iconRaw from "./with-icon.astro?raw";
import with_linkRaw from "./with-link.astro?raw";
import without_badgeRaw from "./without-badge.astro?raw";

export const imports = `---
import { Announcement, Badge } from "@pisagor/astro";
---`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
  WithLink: with_linkRaw,
  WithoutBadge: without_badgeRaw,
} as const;
