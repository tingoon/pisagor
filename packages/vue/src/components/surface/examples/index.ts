import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import nestedRaw from "./nested.vue?raw";
import paddingRaw from "./padding.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_form_controlsRaw from "./with-form-controls.vue?raw";

export const imports = `import { Surface } from "@pisagor/vue/surface";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Nested: stripVueExample(nestedRaw),
  Padding: stripVueExample(paddingRaw),
  Variants: stripVueExample(variantsRaw),
  WithFormControls: stripVueExample(with_form_controlsRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Nested } from "./nested.vue";
export { default as Padding } from "./padding.vue";
export { default as Variants } from "./variants.vue";
export { default as WithFormControls } from "./with-form-controls.vue";
