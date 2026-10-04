import defaultRaw from "./default.vue?raw";
import inline_navigationRaw from "./inline-navigation.vue?raw";
import listRaw from "./list.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { Separator } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  InlineNavigation: inline_navigationRaw,
  List: listRaw,
  Vertical: verticalRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as InlineNavigation } from "./inline-navigation.vue";
export { default as List } from "./list.vue";
export { default as Vertical } from "./vertical.vue";
