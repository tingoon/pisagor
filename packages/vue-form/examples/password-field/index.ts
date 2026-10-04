import { stripVueExample } from "@pisagor/utils";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import with_label_accessoryRaw from "./with-label-accessory.vue?raw";

export const imports = `import { PasswordField } from "@pisagor/vue-form";`;

export const sources = {
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  WithLabelAccessory: stripVueExample(with_label_accessoryRaw),
} as const;

export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as WithLabelAccessory } from "./with-label-accessory.vue";
