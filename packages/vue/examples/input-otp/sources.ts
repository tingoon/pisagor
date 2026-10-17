import BlurOnComplete from "./blur-on-complete.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSize from "./custom-size.vue?raw";
import Disabled from "./disabled.vue?raw";
import FourDigits from "./four-digits.vue?raw";
import Invalid from "./invalid.vue?raw";
import Mask from "./mask.vue?raw";
import Separator from "./separator.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithPlaceholder from "./with-placeholder.vue?raw";

export const imports = `import { InputOTP } from "@pisagor/vue";`;

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
