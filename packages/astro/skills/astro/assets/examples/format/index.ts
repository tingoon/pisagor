import { stripAstroExample } from "@pisagor/utils";
import byteRaw from "./byte.astro?raw";
import defaultRaw from "./default.astro?raw";
import number_compactRaw from "./number-compact.astro?raw";
import number_currencyRaw from "./number-currency.astro?raw";
import relative_timeRaw from "./relative-time.astro?raw";

export const imports = `---
import { Format } from "@pisagor/astro/format";
---`;

export const sources = {
  Byte: stripAstroExample(byteRaw),
  Default: stripAstroExample(defaultRaw),
  NumberCompact: stripAstroExample(number_compactRaw),
  NumberCurrency: stripAstroExample(number_currencyRaw),
  RelativeTime: stripAstroExample(relative_timeRaw),
} as const;

export { default as Byte } from "./byte.astro";
export { default as Default } from "./default.astro";
export { default as NumberCompact } from "./number-compact.astro";
export { default as NumberCurrency } from "./number-currency.astro";
export { default as RelativeTime } from "./relative-time.astro";
