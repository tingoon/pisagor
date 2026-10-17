import Action from "./action.svelte?raw";
import Closable from "./closable.svelte?raw";
import Dedupe from "./dedupe.svelte?raw";
import Default from "./default.svelte?raw";
import Duration from "./duration.svelte?raw";
import Placements from "./placements.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithPromise from "./with-promise.svelte?raw";

export const imports = `import { Toast } from "@pisagor/svelte";`;

export const sources = {
  Action,
  Closable,
  Dedupe,
  Default,
  Duration,
  Placements,
  Variants,
  WithPromise,
} as const;
