import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";

export const imports = `import { Timeline } from "@pisagor/vue/timeline";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Default: stripVueExample(defaultRaw),
  Horizontal: stripVueExample(horizontalRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Default } from "./default.vue";
export { default as Horizontal } from "./horizontal.vue";
