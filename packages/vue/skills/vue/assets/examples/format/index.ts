import { stripVueExample } from "@pisagor/utils";
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

export const imports = `import { Format } from "@pisagor/vue/format";`;

export const sources = {
  Byte: stripVueExample(byteRaw),
  ByteUnitDisplay: stripVueExample(byte_unit_displayRaw),
  ByteUnitSystem: stripVueExample(byte_unit_systemRaw),
  Default: stripVueExample(defaultRaw),
  NumberCompact: stripVueExample(number_compactRaw),
  NumberCurrency: stripVueExample(number_currencyRaw),
  NumberPercent: stripVueExample(number_percentRaw),
  NumberStory: stripVueExample(number_storyRaw),
  RelativeTime: stripVueExample(relative_timeRaw),
  RelativeTimeShort: stripVueExample(relative_time_shortRaw),
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
