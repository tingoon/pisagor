import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import DisabledItem from "./disabled-item.svelte?raw";
import FontWeight from "./font-weight.svelte?raw";
import Horizontal from "./horizontal.svelte?raw";
import Single from "./single.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Spacing from "./spacing.svelte?raw";
import Variants from "./variants.svelte?raw";
import Vertical from "./vertical.svelte?raw";

export const imports = `import { ToggleGroup } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  DisabledItem,
  FontWeight,
  Horizontal,
  Single,
  Sizes,
  Spacing,
  Variants,
  Vertical,
} as const;
