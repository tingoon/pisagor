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
