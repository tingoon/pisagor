import { stripTsxExample } from "@pisagor/utils";
import byteRaw from "./byte.tsx?raw";
import byte_unit_displayRaw from "./byte-unit-display.tsx?raw";
import byte_unit_systemRaw from "./byte-unit-system.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import number_compactRaw from "./number-compact.tsx?raw";
import number_currencyRaw from "./number-currency.tsx?raw";
import number_percentRaw from "./number-percent.tsx?raw";
import number_storyRaw from "./number-story.tsx?raw";
import relative_timeRaw from "./relative-time.tsx?raw";
import relative_time_shortRaw from "./relative-time-short.tsx?raw";

export const imports = `import { Format } from "@pisagor/react/format";`;

export const sources = {
  Byte: stripTsxExample(byteRaw),
  ByteUnitDisplay: stripTsxExample(byte_unit_displayRaw),
  ByteUnitSystem: stripTsxExample(byte_unit_systemRaw),
  Default: stripTsxExample(defaultRaw),
  NumberCompact: stripTsxExample(number_compactRaw),
  NumberCurrency: stripTsxExample(number_currencyRaw),
  NumberPercent: stripTsxExample(number_percentRaw),
  NumberStory: stripTsxExample(number_storyRaw),
  RelativeTime: stripTsxExample(relative_timeRaw),
  RelativeTimeShort: stripTsxExample(relative_time_shortRaw),
} as const;

export { Byte } from "./byte";
export { ByteUnitDisplay } from "./byte-unit-display";
export { ByteUnitSystem } from "./byte-unit-system";
export { Default } from "./default";
export { NumberCompact } from "./number-compact";
export { NumberCurrency } from "./number-currency";
export { NumberPercent } from "./number-percent";
export { NumberStory } from "./number-story";
export { RelativeTime } from "./relative-time";
export { RelativeTimeShort } from "./relative-time-short";
