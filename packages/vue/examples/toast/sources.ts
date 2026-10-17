import Action from "./action.vue?raw";
import Closable from "./closable.vue?raw";
import Dedupe from "./dedupe.vue?raw";
import Default from "./default.vue?raw";
import Duration from "./duration.vue?raw";
import Placements from "./placements.vue?raw";
import Variants from "./variants.vue?raw";
import WithPromise from "./with-promise.vue?raw";

export const imports = `import { toast } from "@pisagor/vue";`;

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
