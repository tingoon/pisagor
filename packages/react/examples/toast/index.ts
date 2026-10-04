import actionRaw from "./action.tsx?raw";
import closableRaw from "./closable.tsx?raw";
import dedupeRaw from "./dedupe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import durationRaw from "./duration.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_promiseRaw from "./with-promise.tsx?raw";

export const imports = `import { toast } from "@pisagor/react";`;

export const sources = {
  Action: actionRaw,
  Closable: closableRaw,
  Dedupe: dedupeRaw,
  Default: defaultRaw,
  Duration: durationRaw,
  Placements: placementsRaw,
  Variants: variantsRaw,
  WithPromise: with_promiseRaw,
} as const;

export * from "./action";
export * from "./closable";
export * from "./dedupe";
export * from "./default";
export * from "./duration";
export * from "./placements";
export * from "./variants";
export * from "./with-promise";
