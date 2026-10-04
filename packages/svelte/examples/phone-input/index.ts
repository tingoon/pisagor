import controlledRaw from "./controlled.svelte?raw";
import custom_popupRaw from "./custom-popup.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { PhoneInput } from "@pisagor/svelte/phone-input";`;

export const sources = {
  Controlled: controlledRaw,
  CustomPopup: custom_popupRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as CustomPopup } from "./custom-popup.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
