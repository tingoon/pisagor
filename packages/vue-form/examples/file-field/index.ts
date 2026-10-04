import { stripVueExample } from "@pisagor/utils";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";

export const imports = `import { FileField } from "@pisagor/vue-form";`;

export const sources = {
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
} as const;

export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
