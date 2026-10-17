import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomTimeout from "./custom-timeout.svelte?raw";
import DifferentIcon from "./different-icon.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithLabel from "./with-label.svelte?raw";

export const imports = `import { Clipboard } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomRecipe,
  CustomTimeout,
  DifferentIcon,
  Sizes,
  Variants,
  WithLabel,
} as const;
