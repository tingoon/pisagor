import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import non_collapsibleRaw from "./non-collapsible.svelte?raw";
import with_cardRaw from "./with-card.svelte?raw";

export const imports = `import { Accordion } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Multiple: multipleRaw,
  NonCollapsible: non_collapsibleRaw,
  WithCard: with_cardRaw,
} as const;
