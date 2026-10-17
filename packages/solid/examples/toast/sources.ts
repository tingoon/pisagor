import { ActionSource as Action } from "./action";
import { ClosableSource as Closable } from "./closable";
import { DedupeSource as Dedupe } from "./dedupe";
import { DefaultSource as Default } from "./default";
import { DurationSource as Duration } from "./duration";
import { PlacementsSource as Placements } from "./placements";
import { VariantsSource as Variants } from "./variants";
import { WithPromiseSource as WithPromise } from "./with-promise";

export const imports = `import { toast } from "@pisagor/solid";`;

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
