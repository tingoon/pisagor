import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";
import without_badgeRaw from "./without-badge.svelte?raw";

export const imports = `import { Announcement } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
  WithLink: with_linkRaw,
  WithoutBadge: without_badgeRaw,
} as const;
