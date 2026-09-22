import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import fallback_onlyRaw from "./fallback-only.vue?raw";
import fallbacksRaw from "./fallbacks.vue?raw";
import shapesRaw from "./shapes.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { Avatar } from "@pisagor/vue/avatar";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  FallbackOnly: stripVueExample(fallback_onlyRaw),
  Fallbacks: stripVueExample(fallbacksRaw),
  Shapes: stripVueExample(shapesRaw),
  Sizes: stripVueExample(sizesRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as FallbackOnly } from "./fallback-only.vue";
export { default as Fallbacks } from "./fallbacks.vue";
export { default as Shapes } from "./shapes.vue";
export { default as Sizes } from "./sizes.vue";
