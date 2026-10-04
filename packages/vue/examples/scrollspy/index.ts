import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";

export const imports = `import { Scrollspy } from "@pisagor/vue/scrollspy";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Horizontal: stripVueExample(horizontalRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Horizontal } from "./horizontal.vue";
