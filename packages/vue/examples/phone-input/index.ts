import controlledRaw from "./controlled.ts?raw";
import custom_popupRaw from "./custom-popup.ts?raw";
import defaultRaw from "./default.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import invalidRaw from "./invalid.ts?raw";
import on_surfaceRaw from "./on-surface.ts?raw";
import sizesRaw from "./sizes.ts?raw";
import variantsRaw from "./variants.ts?raw";

export const imports = `import { PhoneInput } from "@pisagor/vue/phone-input";`;

export const sources = {
  Controlled: controlledRaw,
  CustomPopup: custom_popupRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  OnSurface: on_surfaceRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export * from "./controlled";
export * from "./custom-popup";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./on-surface";
export * from "./sizes";
export * from "./variants";
