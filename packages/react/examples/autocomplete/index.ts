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

export const imports = `import { Autocomplete } from "@pisagor/react/autocomplete";`;

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

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Group } from "./group";
export { Invalid } from "./invalid";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithClearButton } from "./with-clear-button";
export { WithStartIcon } from "./with-start-icon";
export { WithTrigger } from "./with-trigger";
