import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import WithLabelAccessory from "./with-label-accessory.vue?raw";

export const imports = `import { PasswordField } from "@pisagor/vue-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
  WithLabelAccessory,
} as const;
