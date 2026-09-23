import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import without_handleRaw from "./without-handle.vue?raw";

export const imports = `import { Sortable } from "@pisagor/vue/sortable";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Horizontal: stripVueExample(horizontalRaw),
  WithoutHandle: stripVueExample(without_handleRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Horizontal } from "./horizontal.vue";
export { default as WithoutHandle } from "./without-handle.vue";
