import { stripSvelteExample } from "@pisagor/utils";
import byteRaw from "./byte.svelte?raw";
import byte_unit_displayRaw from "./byte-unit-display.svelte?raw";
import byte_unit_systemRaw from "./byte-unit-system.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import number_compactRaw from "./number-compact.svelte?raw";
import number_currencyRaw from "./number-currency.svelte?raw";
import number_percentRaw from "./number-percent.svelte?raw";
import number_storyRaw from "./number-story.svelte?raw";
import relative_timeRaw from "./relative-time.svelte?raw";
import relative_time_shortRaw from "./relative-time-short.svelte?raw";

export const imports = `import { Format } from "@pisagor/svelte";`;

export const sources = {
  Byte: stripSvelteExample(byteRaw),
  ByteUnitDisplay: stripSvelteExample(byte_unit_displayRaw),
  ByteUnitSystem: stripSvelteExample(byte_unit_systemRaw),
  Default: stripSvelteExample(defaultRaw),
  NumberCompact: stripSvelteExample(number_compactRaw),
  NumberCurrency: stripSvelteExample(number_currencyRaw),
  NumberPercent: stripSvelteExample(number_percentRaw),
  NumberStory: stripSvelteExample(number_storyRaw),
  RelativeTime: stripSvelteExample(relative_timeRaw),
  RelativeTimeShort: stripSvelteExample(relative_time_shortRaw),
} as const;

export { default as Byte } from "./byte.svelte";
export { default as ByteUnitDisplay } from "./byte-unit-display.svelte";
export { default as ByteUnitSystem } from "./byte-unit-system.svelte";
export { default as Default } from "./default.svelte";
export { default as NumberCompact } from "./number-compact.svelte";
export { default as NumberCurrency } from "./number-currency.svelte";
export { default as NumberPercent } from "./number-percent.svelte";
export { default as NumberStory } from "./number-story.svelte";
export { default as RelativeTime } from "./relative-time.svelte";
export { default as RelativeTimeShort } from "./relative-time-short.svelte";
