import variantsRaw from "./variants.vue?raw";

export const imports = `import { Swap } from "@pisagor/vue";`;

export const sources = {
  Variants: variantsRaw,
} as const;
