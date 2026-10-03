import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import inline_navigationRaw from "./inline-navigation.vue?raw";
import listRaw from "./list.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { Separator } from "@pisagor/vue/separator";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  InlineNavigation: stripVueExample(inline_navigationRaw),
  List: stripVueExample(listRaw),
  Vertical: stripVueExample(verticalRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as InlineNavigation } from "./inline-navigation.vue";
export { default as List } from "./list.vue";
export { default as Vertical } from "./vertical.vue";
