import custom_colorRaw from "./custom-color.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import pillRaw from "./pill.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";
import with_spinnerRaw from "./with-spinner.svelte?raw";

export const imports = `import { Badge } from "@pisagor/svelte";`;

export const sources = {
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;

export { default as CustomColor } from "./custom-color.svelte";
export { default as Default } from "./default.svelte";
export { default as Pill } from "./pill.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithLink } from "./with-link.svelte";
export { default as WithSpinner } from "./with-spinner.svelte";
