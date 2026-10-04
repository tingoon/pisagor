import defaultRaw from "./default.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Swap } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as Variants } from "./variants.vue";
