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

export const imports = `import { Format } from "@pisagor/react";`;

export const sources = {
  Byte: byteRaw,
  ByteUnitDisplay: byte_unit_displayRaw,
  ByteUnitSystem: byte_unit_systemRaw,
  Default: defaultRaw,
  NumberCompact: number_compactRaw,
  NumberCurrency: number_currencyRaw,
  NumberPercent: number_percentRaw,
  NumberStory: number_storyRaw,
  RelativeTime: relative_timeRaw,
  RelativeTimeShort: relative_time_shortRaw,
} as const;
