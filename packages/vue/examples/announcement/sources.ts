import Compound from "./compound.ts?raw";
import CustomRecipe from "./custom-recipe.ts?raw";
import Variants from "./variants.ts?raw";
import WithIcon from "./with-icon.ts?raw";
import WithLink from "./with-link.ts?raw";
import WithoutBadge from "./without-badge.ts?raw";

export const imports = `import { Announcement } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  Variants,
  WithIcon,
  WithLink,
  WithoutBadge,
} as const;
