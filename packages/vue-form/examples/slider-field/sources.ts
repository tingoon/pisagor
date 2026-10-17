import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";

export const imports = `import { SliderField } from "@pisagor/vue-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
} as const;
