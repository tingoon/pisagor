import { stripVueExample } from "@pisagor/utils";
import custom_colorRaw from "./custom-color.vue?raw";
import custom_sizeRaw from "./custom-size.vue?raw";
import defaultRaw from "./default.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_iconRaw from "./with-icon.vue?raw";

export const imports = `import { Status } from "@pisagor/vue/status";`;

export const sources = {
  CustomColor: stripVueExample(custom_colorRaw),
  CustomSize: stripVueExample(custom_sizeRaw),
  Default: stripVueExample(defaultRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithIcon: stripVueExample(with_iconRaw),
} as const;

export { default as CustomColor } from "./custom-color.vue";
export { default as CustomSize } from "./custom-size.vue";
export { default as Default } from "./default.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithIcon } from "./with-icon.vue";
