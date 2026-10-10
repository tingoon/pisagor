import byteRaw from "./byte.vue?raw";
import byte_unit_displayRaw from "./byte-unit-display.vue?raw";
import byte_unit_systemRaw from "./byte-unit-system.vue?raw";
import defaultRaw from "./default.vue?raw";
import number_compactRaw from "./number-compact.vue?raw";
import number_currencyRaw from "./number-currency.vue?raw";
import number_percentRaw from "./number-percent.vue?raw";
import number_storyRaw from "./number-story.vue?raw";
import relative_timeRaw from "./relative-time.vue?raw";
import relative_time_shortRaw from "./relative-time-short.vue?raw";

export const imports = `import { Format } from "@pisagor/vue";`;

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
