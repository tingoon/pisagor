import { stripVueExample } from "@pisagor/utils";
import clearableRaw from "./clearable.vue?raw";
import custom_formatRaw from "./custom-format.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import inputRaw from "./input.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import rangeRaw from "./range.vue?raw";
import timeRaw from "./time.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_presetsRaw from "./with-presets.vue?raw";

export const imports = `import { DatePicker } from "@pisagor/vue/date-picker";`;

export const sources = {
  Clearable: stripVueExample(clearableRaw),
  CustomFormat: stripVueExample(custom_formatRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Input: stripVueExample(inputRaw),
  Invalid: stripVueExample(invalidRaw),
  Range: stripVueExample(rangeRaw),
  Time: stripVueExample(timeRaw),
  Variants: stripVueExample(variantsRaw),
  WithPresets: stripVueExample(with_presetsRaw),
} as const;

export { default as Clearable } from "./clearable.vue";
export { default as CustomFormat } from "./custom-format.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Input } from "./input.vue";
export { default as Invalid } from "./invalid.vue";
export { default as Range } from "./range.vue";
export { default as Time } from "./time.vue";
export { default as Variants } from "./variants.vue";
export { default as WithPresets } from "./with-presets.vue";
