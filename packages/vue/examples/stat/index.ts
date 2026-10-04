import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_trendRaw from "./with-trend.vue?raw";

export const imports = `import { Stat } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithTrend: with_trendRaw,
} as const;

export { default as Compound } from "./compound.vue";
export { default as Default } from "./default.vue";
export { default as Variants } from "./variants.vue";
export { default as WithTrend } from "./with-trend.vue";
