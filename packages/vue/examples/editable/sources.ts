import ActivationClick from "./activation-click.vue?raw";
import ActivationFocus from "./activation-focus.vue?raw";
import ActivationNone from "./activation-none.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Dblclick from "./dblclick.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithoutControls from "./without-controls.vue?raw";
import WithTextarea from "./with-textarea.vue?raw";

export const imports = `import { Editable } from "@pisagor/vue";`;

export const sources = {
  ActivationClick,
  ActivationFocus,
  ActivationNone,
  Controlled,
  CustomRecipe,
  Dblclick,
  Default,
  Disabled,
  Invalid,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
  WithoutControls,
  WithTextarea,
} as const;
