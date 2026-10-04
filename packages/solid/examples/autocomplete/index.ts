import { stripTsxExample } from "@pisagor/utils";
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
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Group: stripTsxExample(groupRaw),
  Invalid: stripTsxExample(invalidRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithClearButton: stripTsxExample(with_clear_buttonRaw),
  WithStartIcon: stripTsxExample(with_start_iconRaw),
  WithTrigger: stripTsxExample(with_triggerRaw),
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
