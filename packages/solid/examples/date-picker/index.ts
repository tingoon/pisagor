import clearableRaw from "./clearable.tsx?raw";
import custom_formatRaw from "./custom-format.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import inputRaw from "./input.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import rangeRaw from "./range.tsx?raw";
import timeRaw from "./time.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_presetsRaw from "./with-presets.tsx?raw";

export const imports = `import { DatePicker } from "@pisagor/solid";`;

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

export * from "./clearable";
export * from "./custom-format";
export * from "./default";
export * from "./disabled";
export * from "./input";
export * from "./invalid";
export * from "./range";
export * from "./time";
export * from "./variants";
export * from "./with-presets";
