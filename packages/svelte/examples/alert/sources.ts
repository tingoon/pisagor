import Compound from "./compound.svelte?raw";
import CustomColor from "./custom-color.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithAction from "./with-action.svelte?raw";
import WithIcon from "./with-icon.svelte?raw";
import WithoutIcon from "./without-icon.svelte?raw";

export const imports = `import { Alert } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomColor,
  CustomRecipe,
  Variants,
  WithAction,
  WithIcon,
  WithoutIcon,
} as const;
