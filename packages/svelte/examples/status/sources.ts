import CustomColor from "./custom-color.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSize from "./custom-size.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithIcon from "./with-icon.svelte?raw";

export const imports = `import { Status } from "@pisagor/svelte";`;

export const sources = {
  CustomColor,
  CustomRecipe,
  CustomSize,
  Sizes,
  Variants,
  WithIcon,
} as const;
