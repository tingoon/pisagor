import Clearable from "./clearable.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import File from "./file.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { Input } from "@pisagor/svelte";`;

export const sources = {
  Clearable,
  Controlled,
  CustomRecipe,
  Disabled,
  File,
  Invalid,
  Sizes,
  Variants,
} as const;
