import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Group from "./group.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithClearButton from "./with-clear-button.svelte?raw";
import WithStartIcon from "./with-start-icon.svelte?raw";
import WithTrigger from "./with-trigger.svelte?raw";

export const imports = `import { Autocomplete } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Group,
  Invalid,
  Sizes,
  Variants,
  WithClearButton,
  WithStartIcon,
  WithTrigger,
} as const;
