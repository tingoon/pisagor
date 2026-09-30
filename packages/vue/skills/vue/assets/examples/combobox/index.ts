import { stripVueExample } from "@pisagor/utils";
import autohighlightRaw from "./autohighlight.vue?raw";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import groupRaw from "./group.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_clear_buttonRaw from "./with-clear-button.vue?raw";
import with_scrollRaw from "./with-scroll.vue?raw";
import with_start_iconRaw from "./with-start-icon.vue?raw";

export const imports = `import { Combobox } from "@pisagor/vue/combobox";`;

export const sources = {
  Autohighlight: stripVueExample(autohighlightRaw),
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Group: stripVueExample(groupRaw),
  Invalid: stripVueExample(invalidRaw),
  Multiple: stripVueExample(multipleRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithClearButton: stripVueExample(with_clear_buttonRaw),
  WithScroll: stripVueExample(with_scrollRaw),
  WithStartIcon: stripVueExample(with_start_iconRaw),
} as const;

export { default as Autohighlight } from "./autohighlight.vue";
export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Group } from "./group.vue";
export { default as Invalid } from "./invalid.vue";
export { default as Multiple } from "./multiple.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithClearButton } from "./with-clear-button.vue";
export { default as WithScroll } from "./with-scroll.vue";
export { default as WithStartIcon } from "./with-start-icon.vue";
