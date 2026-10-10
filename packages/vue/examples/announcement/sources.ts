import compoundRaw from "./compound.ts?raw";
import custom_recipeRaw from "./custom-recipe.ts?raw";
import variantsRaw from "./variants.ts?raw";
import with_iconRaw from "./with-icon.ts?raw";
import with_linkRaw from "./with-link.ts?raw";
import without_badgeRaw from "./without-badge.ts?raw";

export const imports = `import { Announcement } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
  WithLink: with_linkRaw,
  WithoutBadge: without_badgeRaw,
} as const;
