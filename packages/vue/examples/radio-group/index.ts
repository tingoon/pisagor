import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_descriptionRaw from "./with-description.vue?raw";
import with_fieldRaw from "./with-field.vue?raw";

export const imports = `import { RadioGroup } from "@pisagor/vue/radio-group";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Variants: stripVueExample(variantsRaw),
  WithDescription: stripVueExample(with_descriptionRaw),
  WithField: stripVueExample(with_fieldRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Variants } from "./variants.vue";
export { default as WithDescription } from "./with-description.vue";
export { default as WithField } from "./with-field.vue";
