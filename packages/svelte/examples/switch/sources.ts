import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { Switch } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
