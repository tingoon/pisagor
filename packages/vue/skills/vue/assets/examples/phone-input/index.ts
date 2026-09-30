import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import invalidRaw from "./invalid.ts?raw";
import on_surfaceRaw from "./on-surface.ts?raw";
import sizesRaw from "./sizes.ts?raw";
import variantsRaw from "./variants.ts?raw";

export const imports = `import { PhoneInput } from "@pisagor/vue/phone-input";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { Controlled } from "./controlled";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { OnSurface } from "./on-surface";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
