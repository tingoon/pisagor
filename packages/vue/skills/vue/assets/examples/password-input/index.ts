import { stripVueExample } from "@pisagor/utils";
import auto_hideRaw from "./auto-hide.vue?raw";
import autocompleteRaw from "./autocomplete.vue?raw";
import clearableRaw from "./clearable.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import controlled_visibilityRaw from "./controlled-visibility.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { PasswordInput } from "@pisagor/vue/password-input";`;

export const sources = {
  Autocomplete: stripVueExample(autocompleteRaw),
  AutoHide: stripVueExample(auto_hideRaw),
  Clearable: stripVueExample(clearableRaw),
  Controlled: stripVueExample(controlledRaw),
  ControlledVisibility: stripVueExample(controlled_visibilityRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
} as const;

export { default as AutoHide } from "./auto-hide.vue";
export { default as Autocomplete } from "./autocomplete.vue";
export { default as Clearable } from "./clearable.vue";
export { default as Controlled } from "./controlled.vue";
export { default as ControlledVisibility } from "./controlled-visibility.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
