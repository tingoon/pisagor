import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import IconGroup from "./icon-group.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithIcon from "./with-icon.svelte?raw";

export const imports = `import { Toggle } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Disabled,
  IconGroup,
  Sizes,
  Variants,
  WithIcon,
} as const;
