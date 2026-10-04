import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_trendRaw from "./with-trend.tsx?raw";

export const imports = `import { Stat } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithTrend: with_trendRaw,
} as const;

export * from "./compound";
export * from "./default";
export * from "./variants";
export * from "./with-trend";
