import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import separated_panelsRaw from "./separated-panels.vue?raw";
import with_form_controlsRaw from "./with-form-controls.vue?raw";

export const imports = `import { Frame } from "@pisagor/vue/frame";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  SeparatedPanels: stripVueExample(separated_panelsRaw),
  WithFormControls: stripVueExample(with_form_controlsRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as SeparatedPanels } from "./separated-panels.vue";
export { default as WithFormControls } from "./with-form-controls.vue";
