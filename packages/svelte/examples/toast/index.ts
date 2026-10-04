import { stripSvelteExample } from "@pisagor/utils";
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
  Action: stripSvelteExample(actionRaw),
  Closable: stripSvelteExample(closableRaw),
  Dedupe: stripSvelteExample(dedupeRaw),
  Default: stripSvelteExample(defaultRaw),
  Duration: stripSvelteExample(durationRaw),
  Placements: stripSvelteExample(placementsRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithPromise: stripSvelteExample(with_promiseRaw),
} as const;

export { default as Action } from "./action.svelte";
export { default as Closable } from "./closable.svelte";
export { default as Dedupe } from "./dedupe.svelte";
export { default as Default } from "./default.svelte";
export { default as Duration } from "./duration.svelte";
export { default as Placements } from "./placements.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithPromise } from "./with-promise.svelte";
