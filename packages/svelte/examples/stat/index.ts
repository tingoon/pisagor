import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_trendRaw from "./with-trend.svelte?raw";

export const imports = `import { Stat } from "@pisagor/svelte";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithTrend: stripSvelteExample(with_trendRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithTrend } from "./with-trend.svelte";
