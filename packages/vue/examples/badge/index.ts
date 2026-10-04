import custom_colorRaw from "./custom-color.vue?raw";
import defaultRaw from "./default.vue?raw";
import pillRaw from "./pill.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_linkRaw from "./with-link.vue?raw";
import with_spinnerRaw from "./with-spinner.vue?raw";

export const imports = `import { Badge } from "@pisagor/vue";`;

export const sources = {
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;

export { default as CustomColor } from "./custom-color.vue";
export { default as Default } from "./default.vue";
export { default as Pill } from "./pill.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithLink } from "./with-link.vue";
export { default as WithSpinner } from "./with-spinner.vue";
