import Controlled from "./controlled.vue?raw";
import CustomPopup from "./custom-popup.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { PhoneInput } from "@pisagor/vue/phone-input";`;

export const sources = {
  Controlled,
  CustomPopup,
  CustomRecipe,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
