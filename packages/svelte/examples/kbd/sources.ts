import CustomRecipe from "./custom-recipe.svelte?raw";
import KbdGroup from "./kbd-group.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithButton from "./with-button.svelte?raw";
import WithTooltip from "./with-tooltip.svelte?raw";

export const imports = `import { Kbd } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  KbdGroup,
  Sizes,
  Variants,
  WithButton,
  WithTooltip,
} as const;
