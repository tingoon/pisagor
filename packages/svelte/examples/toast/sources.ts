import actionRaw from "./action.svelte?raw";
import closableRaw from "./closable.svelte?raw";
import dedupeRaw from "./dedupe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import durationRaw from "./duration.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_promiseRaw from "./with-promise.svelte?raw";

export const imports = `import { Toast } from "@pisagor/svelte";`;

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
