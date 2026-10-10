import auto_hideRaw from "./auto-hide.vue?raw";
import autocompleteRaw from "./autocomplete.vue?raw";
import clearableRaw from "./clearable.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import controlled_visibilityRaw from "./controlled-visibility.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { PasswordInput } from "@pisagor/vue";`;

export const sources = {
  Autocomplete: autocompleteRaw,
  AutoHide: auto_hideRaw,
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  ControlledVisibility: controlled_visibilityRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
} as const;
