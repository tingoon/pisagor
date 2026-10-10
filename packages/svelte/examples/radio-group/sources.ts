import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_descriptionRaw from "./with-description.svelte?raw";

export const imports = `import { RadioGroup } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
  WithDescription: with_descriptionRaw,
} as const;
