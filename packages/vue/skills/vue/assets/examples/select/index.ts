import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import emptyRaw from "./empty.vue?raw";
import groupingRaw from "./grouping.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import max_selectionRaw from "./max-selection.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_scrollRaw from "./with-scroll.vue?raw";

export const imports = `import { Select } from "@pisagor/vue/select";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Empty: stripVueExample(emptyRaw),
  Grouping: stripVueExample(groupingRaw),
  Invalid: stripVueExample(invalidRaw),
  MaxSelection: stripVueExample(max_selectionRaw),
  Multiple: stripVueExample(multipleRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithScroll: stripVueExample(with_scrollRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Empty } from "./empty.vue";
export { default as Grouping } from "./grouping.vue";
export { default as Invalid } from "./invalid.vue";
export { default as MaxSelection } from "./max-selection.vue";
export { default as Multiple } from "./multiple.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithScroll } from "./with-scroll.vue";
