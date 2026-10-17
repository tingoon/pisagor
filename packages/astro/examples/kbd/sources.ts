import CustomRecipe from "./custom-recipe.astro?raw";
import KbdGroup from "./kbd-group.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";
import WithButton from "./with-button.astro?raw";

export const imports = `---
import { Kbd } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  KbdGroup,
  Sizes,
  Variants,
  WithButton,
} as const;
