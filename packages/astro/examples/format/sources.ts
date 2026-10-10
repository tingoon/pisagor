import byteRaw from "./byte.astro?raw";
import byte_unit_displayRaw from "./byte-unit-display.astro?raw";
import byte_unit_systemRaw from "./byte-unit-system.astro?raw";
import defaultRaw from "./default.astro?raw";
import number_compactRaw from "./number-compact.astro?raw";
import number_currencyRaw from "./number-currency.astro?raw";
import number_percentRaw from "./number-percent.astro?raw";
import number_storyRaw from "./number-story.astro?raw";
import relative_timeRaw from "./relative-time.astro?raw";
import relative_time_shortRaw from "./relative-time-short.astro?raw";

export const imports = `---
import { Format } from "@pisagor/astro";
---`;

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
