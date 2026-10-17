import ActivationClick from "./activation-click.svelte?raw";
import ActivationFocus from "./activation-focus.svelte?raw";
import ActivationNone from "./activation-none.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Dblclick from "./dblclick.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithoutControls from "./without-controls.svelte?raw";
import WithTextarea from "./with-textarea.svelte?raw";

export const imports = `import { Editable } from "@pisagor/svelte";`;

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
