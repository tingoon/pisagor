import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithIcon from "./with-icon.svelte?raw";
import WithLink from "./with-link.svelte?raw";
import WithoutBadge from "./without-badge.svelte?raw";

export const imports = `import { Announcement } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  Variants,
  WithIcon,
  WithLink,
  WithoutBadge,
} as const;
