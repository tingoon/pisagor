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

export { default as Byte } from "./byte.vue";
export { default as ByteUnitDisplay } from "./byte-unit-display.vue";
export { default as ByteUnitSystem } from "./byte-unit-system.vue";
export { default as Default } from "./default.vue";
export { default as NumberCompact } from "./number-compact.vue";
export { default as NumberCurrency } from "./number-currency.vue";
export { default as NumberPercent } from "./number-percent.vue";
export { default as NumberStory } from "./number-story.vue";
export { default as RelativeTime } from "./relative-time.vue";
export { default as RelativeTimeShort } from "./relative-time-short.vue";
