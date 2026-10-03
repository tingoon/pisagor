import { stripVueExample } from "@pisagor/utils";
import checkbox_groupRaw from "./checkbox-group.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import indeterminateRaw from "./indeterminate.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Checkbox } from "@pisagor/vue/checkbox";`;

export const sources = {
  CheckboxGroup: stripVueExample(checkbox_groupRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Indeterminate: stripVueExample(indeterminateRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as CheckboxGroup } from "./checkbox-group.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Indeterminate } from "./indeterminate.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Variants } from "./variants.vue";
