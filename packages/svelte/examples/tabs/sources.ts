import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithIcons from "./with-icons.svelte?raw";
import WithoutIndicator from "./without-indicator.svelte?raw";

export const imports = `import { Tabs } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
  WithIcons,
  WithoutIndicator,
} as const;
