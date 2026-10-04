import custom_colorRaw from "./custom-color.astro?raw";
import defaultRaw from "./default.astro?raw";
import pillRaw from "./pill.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_linkRaw from "./with-link.astro?raw";
import with_spinnerRaw from "./with-spinner.astro?raw";

export const imports = `---
import { Badge } from "@pisagor/astro";
---`;

export const sources = {
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;

export { default as CustomColor } from "./custom-color.astro";
export { default as Default } from "./default.astro";
export { default as Pill } from "./pill.astro";
export { default as Sizes } from "./sizes.astro";
export { default as Variants } from "./variants.astro";
export { default as WithLink } from "./with-link.astro";
export { default as WithSpinner } from "./with-spinner.astro";
