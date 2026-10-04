import controlledRaw from "./controlled.tsx?raw";
import custom_popupRaw from "./custom-popup.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { PhoneInput } from "@pisagor/solid/phone-input";`;

export const sources = {
  Controlled: controlledRaw,
  CustomPopup: custom_popupRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export * from "./controlled";
export * from "./custom-popup";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./sizes";
export * from "./variants";
