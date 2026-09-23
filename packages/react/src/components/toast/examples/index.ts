import { stripTsxExample } from "@pisagor/utils";
import actionRaw from "./action.tsx?raw";
import closableRaw from "./closable.tsx?raw";
import dedupeRaw from "./dedupe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import durationRaw from "./duration.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_promiseRaw from "./with-promise.tsx?raw";

export const imports = `import { toast } from "@pisagor/react/toast";`;

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

export { Action } from "./action";
export { Closable } from "./closable";
export { Dedupe } from "./dedupe";
export { Default } from "./default";
export { Duration } from "./duration";
export { Placements } from "./placements";
export { Variants } from "./variants";
export { WithPromise } from "./with-promise";
