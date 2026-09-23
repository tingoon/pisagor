import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import custom_compositionRaw from "./custom-composition.vue?raw";
import defaultRaw from "./default.vue?raw";
import linksRaw from "./links.vue?raw";
import page_rangeRaw from "./page-range.vue?raw";

export const imports = `import { Pagination } from "@pisagor/vue/pagination";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  CustomComposition: stripVueExample(custom_compositionRaw),
  Default: stripVueExample(defaultRaw),
  Links: stripVueExample(linksRaw),
  PageRange: stripVueExample(page_rangeRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as CustomComposition } from "./custom-composition.vue";
export { default as Default } from "./default.vue";
export { default as Links } from "./links.vue";
export { default as PageRange } from "./page-range.vue";
