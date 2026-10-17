import CheckboxGroup from "./checkbox-group.svelte?raw";
import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Indeterminate from "./indeterminate.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { Checkbox } from "@pisagor/svelte";`;

export const sources = {
  CheckboxGroup,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Indeterminate,
  Invalid,
  Sizes,
  Variants,
} as const;
