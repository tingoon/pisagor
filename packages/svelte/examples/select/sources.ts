import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Empty from "./empty.svelte?raw";
import Grouping from "./grouping.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import MaxSelection from "./max-selection.svelte?raw";
import Multiple from "./multiple.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithScroll from "./with-scroll.svelte?raw";

export const imports = `import { Select } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Empty,
  Grouping,
  Invalid,
  MaxSelection,
  Multiple,
  Sizes,
  Variants,
  WithScroll,
} as const;
