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

export const imports = `import { DatePicker } from "@pisagor/vue";`;

export const sources = {
  Clearable: clearableRaw,
  CustomFormat: custom_formatRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Input: inputRaw,
  Invalid: invalidRaw,
  Range: rangeRaw,
  Time: timeRaw,
  Variants: variantsRaw,
  WithPresets: with_presetsRaw,
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
