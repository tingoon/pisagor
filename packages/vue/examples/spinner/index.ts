import defaultRaw from "./default.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { Spinner } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Sizes: sizesRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as Sizes } from "./sizes.vue";
