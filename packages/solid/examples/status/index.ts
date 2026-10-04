import custom_colorRaw from "./custom-color.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Status } from "@pisagor/solid";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomSize: custom_sizeRaw,
  Default: defaultRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;

export * from "./custom-color";
export * from "./custom-size";
export * from "./default";
export * from "./sizes";
export * from "./variants";
export * from "./with-icon";
