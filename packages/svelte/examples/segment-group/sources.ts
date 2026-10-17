import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomIndicator from "./custom-indicator.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import DisabledItem from "./disabled-item.svelte?raw";
import IndicatorOnHover from "./indicator-on-hover.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { SegmentGroup } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  CustomIndicator,
  CustomRecipe,
  Default,
  Disabled,
  DisabledItem,
  IndicatorOnHover,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
} as const;
