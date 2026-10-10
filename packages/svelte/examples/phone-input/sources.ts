import controlledRaw from "./controlled.svelte?raw";
import custom_popupRaw from "./custom-popup.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { PhoneInput } from "@pisagor/svelte/phone-input";`;

export const sources = {
  Controlled: controlledRaw,
  CustomPopup: custom_popupRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;
