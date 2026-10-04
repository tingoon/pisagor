import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_trendRaw from "./with-trend.tsx?raw";

export const imports = `import { Stat } from "@pisagor/react/stat";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  Variants: stripTsxExample(variantsRaw),
  WithTrend: stripTsxExample(with_trendRaw),
} as const;

export { Compound } from "./compound";
export { Default } from "./default";
export { Variants } from "./variants";
export { WithTrend } from "./with-trend";
