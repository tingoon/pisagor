import { stripVueExample } from "@pisagor/utils";
import both_directionsRaw from "./both-directions.vue?raw";
import defaultRaw from "./default.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import nestedRaw from "./nested.vue?raw";
import scroll_fadeRaw from "./scroll-fade.vue?raw";

export const imports = `import { ScrollArea } from "@pisagor/vue/scroll-area";`;

export const sources = {
  BothDirections: stripVueExample(both_directionsRaw),
  Default: stripVueExample(defaultRaw),
  Horizontal: stripVueExample(horizontalRaw),
  Nested: stripVueExample(nestedRaw),
  ScrollFade: stripVueExample(scroll_fadeRaw),
} as const;

export { default as BothDirections } from "./both-directions.vue";
export { default as Default } from "./default.vue";
export { default as Horizontal } from "./horizontal.vue";
export { default as Nested } from "./nested.vue";
export { default as ScrollFade } from "./scroll-fade.vue";
