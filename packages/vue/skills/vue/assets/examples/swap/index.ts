import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Swap } from "@pisagor/vue/swap";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Variants } from "./variants.vue";
