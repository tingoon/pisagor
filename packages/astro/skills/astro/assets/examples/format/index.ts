import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import number_compactRaw from "./number-compact.astro?raw";
import relative_timeRaw from "./relative-time.astro?raw";

export const imports = `---
import { Format } from "@pisagor/astro/format";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  NumberCompact: stripAstroExample(number_compactRaw),
  RelativeTime: stripAstroExample(relative_timeRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as NumberCompact } from "./number-compact.astro";
export { default as RelativeTime } from "./relative-time.astro";
