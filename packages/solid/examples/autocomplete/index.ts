import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import groupRaw from "./group.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_clear_buttonRaw from "./with-clear-button.tsx?raw";
import with_start_iconRaw from "./with-start-icon.tsx?raw";
import with_triggerRaw from "./with-trigger.tsx?raw";

export const imports = `import { Autocomplete } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithStartIcon: with_start_iconRaw,
  WithTrigger: with_triggerRaw,
} as const;

export * from "./compound";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./group";
export * from "./invalid";
export * from "./sizes";
export * from "./variants";
export * from "./with-clear-button";
export * from "./with-start-icon";
export * from "./with-trigger";
