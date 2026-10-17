import Compound from "./compound.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Variants from "./variants.astro?raw";
import WithIcon from "./with-icon.astro?raw";
import WithLink from "./with-link.astro?raw";
import WithoutBadge from "./without-badge.astro?raw";

export const imports = `---
import { Announcement, Badge } from "@pisagor/astro";
---`;

export const sources = {
  Compound,
  CustomRecipe,
  Variants,
  WithIcon,
  WithLink,
  WithoutBadge,
} as const;
