import { stripVueExample } from "@pisagor/utils";
import avatar_groupRaw from "./avatar-group.vue?raw";
import compoundRaw from "./compound.vue?raw";
import countRaw from "./count.vue?raw";
import defaultRaw from "./default.vue?raw";
import fallback_onlyRaw from "./fallback-only.vue?raw";
import fallbacksRaw from "./fallbacks.vue?raw";
import shapesRaw from "./shapes.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { Avatar } from "@pisagor/vue/avatar";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Count: stripVueExample(countRaw),
  Default: stripVueExample(defaultRaw),
  FallbackOnly: stripVueExample(fallback_onlyRaw),
  Fallbacks: stripVueExample(fallbacksRaw),
  Group: stripVueExample(avatar_groupRaw),
  Shapes: stripVueExample(shapesRaw),
  Sizes: stripVueExample(sizesRaw),
} as const;

export { default as Group } from "./avatar-group.vue";
export { default as Compound } from "./compound.vue";
export { default as Count } from "./count.vue";
export { default as Default } from "./default.vue";
export { default as FallbackOnly } from "./fallback-only.vue";
export { default as Fallbacks } from "./fallbacks.vue";
export { default as Shapes } from "./shapes.vue";
export { default as Sizes } from "./sizes.vue";
