import compoundRaw from "./compound.astro?raw";
import custom_colorRaw from "./custom-color.astro?raw";
import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_iconRaw from "./with-icon.astro?raw";

export const imports = `---
import { Alert } from "@pisagor/astro";
---`;

export const sources = {
  Compound: compoundRaw,
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;

export { default as Compound } from "./compound.astro";
export { default as CustomColor } from "./custom-color.astro";
export { default as Default } from "./default.astro";
export { default as Variants } from "./variants.astro";
export { default as WithIcon } from "./with-icon.astro";
