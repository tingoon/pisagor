import actionRaw from "./action.vue?raw";
import closableRaw from "./closable.vue?raw";
import dedupeRaw from "./dedupe.vue?raw";
import defaultRaw from "./default.vue?raw";
import durationRaw from "./duration.vue?raw";
import placementsRaw from "./placements.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_promiseRaw from "./with-promise.vue?raw";

export const imports = `import { toast } from "@pisagor/vue";`;

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

export { default as Action } from "./action.vue";
export { default as Closable } from "./closable.vue";
export { default as Dedupe } from "./dedupe.vue";
export { default as Default } from "./default.vue";
export { default as Duration } from "./duration.vue";
export { default as Placements } from "./placements.vue";
export { default as Variants } from "./variants.vue";
export { default as WithPromise } from "./with-promise.vue";
