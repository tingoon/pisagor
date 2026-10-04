import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_trendRaw from "./with-trend.astro?raw";

export const imports = `---
import { Stat } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Variants: variantsRaw,
  WithTrend: with_trendRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Variants } from "./variants.astro";
export { default as WithTrend } from "./with-trend.astro";
