import Autocomplete from "./autocomplete.vue?raw";
import AutoHide from "./auto-hide.vue?raw";
import Clearable from "./clearable.vue?raw";
import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import ControlledVisibility from "./controlled-visibility.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";

export const imports = `import { PasswordInput } from "@pisagor/vue";`;

export const sources = {
  Autocomplete,
  AutoHide,
  Clearable,
  Compound,
  Controlled,
  ControlledVisibility,
  Default,
  Disabled,
  Invalid,
  Sizes,
} as const;
