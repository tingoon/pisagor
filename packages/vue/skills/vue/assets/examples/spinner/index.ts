import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { Spinner } from "@pisagor/vue/spinner";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Sizes: stripVueExample(sizesRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Sizes } from "./sizes.vue";
