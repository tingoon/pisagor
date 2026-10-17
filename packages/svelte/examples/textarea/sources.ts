import Autoresize from "./autoresize.svelte?raw";
import Clearable from "./clearable.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { Textarea } from "@pisagor/svelte";`;

export const sources = {
  Autoresize,
  Clearable,
  Controlled,
  CustomRecipe,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
