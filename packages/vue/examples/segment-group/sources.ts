import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomIndicator from "./custom-indicator.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import DisabledItem from "./disabled-item.vue?raw";
import IndicatorOnHover from "./indicator-on-hover.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { SegmentGroup } from "@pisagor/vue";`;

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
