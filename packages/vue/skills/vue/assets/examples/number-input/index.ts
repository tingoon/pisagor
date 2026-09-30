import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import field_onlyRaw from "./field-only.vue?raw";
import formattedRaw from "./formatted.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import mouse_wheelRaw from "./mouse-wheel.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import rangeRaw from "./range.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import stepRaw from "./step.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_fieldRaw from "./with-field.vue?raw";
import with_scrubberRaw from "./with-scrubber.vue?raw";

export const imports = `import { NumberInput } from "@pisagor/vue/number-input";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  FieldOnly: stripVueExample(field_onlyRaw),
  Formatted: stripVueExample(formattedRaw),
  Invalid: stripVueExample(invalidRaw),
  MouseWheel: stripVueExample(mouse_wheelRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Range: stripVueExample(rangeRaw),
  Sizes: stripVueExample(sizesRaw),
  Step: stripVueExample(stepRaw),
  Variants: stripVueExample(variantsRaw),
  WithField: stripVueExample(with_fieldRaw),
  WithScrubber: stripVueExample(with_scrubberRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as FieldOnly } from "./field-only.vue";
export { default as Formatted } from "./formatted.vue";
export { default as Invalid } from "./invalid.vue";
export { default as MouseWheel } from "./mouse-wheel.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Range } from "./range.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Step } from "./step.vue";
export { default as Variants } from "./variants.vue";
export { default as WithField } from "./with-field.vue";
export { default as WithScrubber } from "./with-scrubber.vue";
