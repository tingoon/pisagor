import { stripTsxExample } from "@pisagor/utils";
import actionRaw from "./action.tsx?raw";
import closableRaw from "./closable.tsx?raw";
import dedupeRaw from "./dedupe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import durationRaw from "./duration.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_promiseRaw from "./with-promise.tsx?raw";

export const imports = `import { Toast } from "@pisagor/solid";`;

export const sources = {
  Action: stripTsxExample(actionRaw),
  Closable: stripTsxExample(closableRaw),
  Dedupe: stripTsxExample(dedupeRaw),
  Default: stripTsxExample(defaultRaw),
  Duration: stripTsxExample(durationRaw),
  Placements: stripTsxExample(placementsRaw),
  Variants: stripTsxExample(variantsRaw),
  WithPromise: stripTsxExample(with_promiseRaw),
} as const;

export * from "./action";
export * from "./closable";
export * from "./dedupe";
export * from "./default";
export * from "./duration";
export * from "./placements";
export * from "./variants";
export * from "./with-promise";
