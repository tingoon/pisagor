import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Multiple from "./multiple.svelte?raw";
import NonCollapsible from "./non-collapsible.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import WithCard from "./with-card.svelte?raw";

export const imports = `import { Accordion } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  Default,
  Disabled,
  Multiple,
  NonCollapsible,
  Sizes,
  WithCard,
} as const;
