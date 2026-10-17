import Controlled from "./controlled.svelte?raw";
import CustomPopup from "./custom-popup.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { PhoneInput } from "@pisagor/svelte/phone-input";`;

export const sources = {
  Controlled,
  CustomPopup,
  CustomRecipe,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
