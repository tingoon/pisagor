import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import with_label_accessoryRaw from "./with-label-accessory.vue?raw";

export const imports = `import { PasswordField } from "@pisagor/vue-form";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  WithLabelAccessory: with_label_accessoryRaw,
} as const;
