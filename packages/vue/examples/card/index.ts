import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import iconRaw from "./icon.vue?raw";
import productRaw from "./product.vue?raw";

export const imports = `import { Card } from "@pisagor/vue";`;

export const sources = {
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Icon: iconRaw,
  Product: productRaw,
} as const;

export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
export { default as Icon } from "./icon.vue";
export { default as Product } from "./product.vue";
