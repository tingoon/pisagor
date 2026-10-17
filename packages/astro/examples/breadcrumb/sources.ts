import Collapsed from "./collapsed.astro?raw";
import Compound from "./compound.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import CustomSeparator from "./custom-separator.astro?raw";
import Default from "./default.astro?raw";
import WithLink from "./with-link.astro?raw";

export const imports = `---
import { Breadcrumb } from "@pisagor/astro";
---`;

export const sources = {
  Collapsed,
  Compound,
  CustomRecipe,
  CustomSeparator,
  Default,
  WithLink,
} as const;
