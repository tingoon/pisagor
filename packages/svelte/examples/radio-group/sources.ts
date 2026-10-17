import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithDescription from "./with-description.svelte?raw";

export const imports = `import { RadioGroup } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  Default,
  Disabled,
  Invalid,
  Variants,
  WithDescription,
} as const;
