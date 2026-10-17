import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { VariantsSource as Variants } from "./variants";
import { WithIconSource as WithIcon } from "./with-icon";
import { WithLinkSource as WithLink } from "./with-link";
import { WithoutBadgeSource as WithoutBadge } from "./without-badge";

export const imports = `import { Announcement } from "@pisagor/react";`;

export const sources = {
  Compound,
  CustomRecipe,
  Variants,
  WithIcon,
  WithLink,
  WithoutBadge,
} as const;
