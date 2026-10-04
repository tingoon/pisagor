import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { DatePicker } from "@pisagor/react";`;

export const sources = {
  Clearable: stripTsxExample(clearableRaw),
  CustomFormat: stripTsxExample(custom_formatRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Input: stripTsxExample(inputRaw),
  Invalid: stripTsxExample(invalidRaw),
  Range: stripTsxExample(rangeRaw),
  Time: stripTsxExample(timeRaw),
  Variants: stripTsxExample(variantsRaw),
  WithPresets: stripTsxExample(with_presetsRaw),
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
