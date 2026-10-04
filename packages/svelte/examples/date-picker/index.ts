import clearableRaw from "./clearable.svelte?raw";
import custom_formatRaw from "./custom-format.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import inputRaw from "./input.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import timeRaw from "./time.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_presetsRaw from "./with-presets.svelte?raw";

export const imports = `import { DatePicker } from "@pisagor/svelte";`;

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

export { default as Clearable } from "./clearable.svelte";
export { default as CustomFormat } from "./custom-format.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Input } from "./input.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Range } from "./range.svelte";
export { default as Time } from "./time.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithPresets } from "./with-presets.svelte";
