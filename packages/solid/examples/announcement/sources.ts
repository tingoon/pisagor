import compoundRaw from "./compound.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import without_badgeRaw from "./without-badge.tsx?raw";

export const imports = `import { Announcement } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
  WithLink: with_linkRaw,
  WithoutBadge: without_badgeRaw,
} as const;
