import Compound from "./compound.astro?raw";
import CustomColor from "./custom-color.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Variants from "./variants.astro?raw";
import WithAction from "./with-action.astro?raw";
import WithIcon from "./with-icon.astro?raw";
import WithoutIcon from "./without-icon.astro?raw";

export const imports = `---
import { Alert } from "@pisagor/astro";
---`;

export const sources = {
  Compound,
  CustomColor,
  CustomRecipe,
  Variants,
  WithAction,
  WithIcon,
  WithoutIcon,
} as const;
