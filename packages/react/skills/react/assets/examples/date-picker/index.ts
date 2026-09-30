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

export const imports = `import { DatePicker } from "@pisagor/react/date-picker";`;

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

export { Clearable } from "./clearable";
export { CustomFormat } from "./custom-format";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Input } from "./input";
export { Invalid } from "./invalid";
export { Range } from "./range";
export { Time } from "./time";
export { Variants } from "./variants";
export { WithPresets } from "./with-presets";
