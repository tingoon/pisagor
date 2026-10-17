import Autohighlight from "./autohighlight.svelte?raw";
import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Group from "./group.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Multiple from "./multiple.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithClearButton from "./with-clear-button.svelte?raw";
import WithScroll from "./with-scroll.svelte?raw";
import WithStartIcon from "./with-start-icon.svelte?raw";

export const imports = `import { Combobox } from "@pisagor/svelte";`;

export const sources = {
  Autohighlight,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Group,
  Invalid,
  Multiple,
  Sizes,
  Variants,
  WithClearButton,
  WithScroll,
  WithStartIcon,
} as const;
