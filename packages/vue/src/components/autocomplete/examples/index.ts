import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import groupRaw from "./group.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_clear_buttonRaw from "./with-clear-button.vue?raw";
import with_start_iconRaw from "./with-start-icon.vue?raw";
import with_triggerRaw from "./with-trigger.vue?raw";

export const imports = `import { Autocomplete } from "@pisagor/vue/autocomplete";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Group: stripVueExample(groupRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithClearButton: stripVueExample(with_clear_buttonRaw),
  WithStartIcon: stripVueExample(with_start_iconRaw),
  WithTrigger: stripVueExample(with_triggerRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Group } from "./group.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithClearButton } from "./with-clear-button.vue";
export { default as WithStartIcon } from "./with-start-icon.vue";
export { default as WithTrigger } from "./with-trigger.vue";
