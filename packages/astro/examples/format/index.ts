import byteRaw from "./byte.astro?raw";
import defaultRaw from "./default.astro?raw";
import number_compactRaw from "./number-compact.astro?raw";
import number_currencyRaw from "./number-currency.astro?raw";
import relative_timeRaw from "./relative-time.astro?raw";

export const imports = `---
import { Format } from "@pisagor/astro";
---`;

export const sources = {
  Byte: byteRaw,
  Default: defaultRaw,
  NumberCompact: number_compactRaw,
  NumberCurrency: number_currencyRaw,
  RelativeTime: relative_timeRaw,
} as const;

export { default as Byte } from "./byte.astro";
export { default as Default } from "./default.astro";
export { default as NumberCompact } from "./number-compact.astro";
export { default as NumberCurrency } from "./number-currency.astro";
export { default as RelativeTime } from "./relative-time.astro";
