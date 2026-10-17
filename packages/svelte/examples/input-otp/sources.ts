import BlurOnComplete from "./blur-on-complete.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSize from "./custom-size.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import FourDigits from "./four-digits.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Mask from "./mask.svelte?raw";
import Separator from "./separator.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithPlaceholder from "./with-placeholder.svelte?raw";

export const imports = `import { InputOtp } from "@pisagor/svelte";`;

export const sources = {
  BlurOnComplete,
  Controlled,
  CustomRecipe,
  CustomSize,
  Disabled,
  FourDigits,
  Invalid,
  Mask,
  Separator,
  Sizes,
  Variants,
  WithPlaceholder,
} as const;
