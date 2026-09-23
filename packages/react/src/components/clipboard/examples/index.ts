import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import custom_timeoutRaw from "./custom-timeout.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import different_iconRaw from "./different-icon.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Clipboard } from "@pisagor/react/clipboard";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  CustomTimeout: stripTsxExample(custom_timeoutRaw),
  Default: stripTsxExample(defaultRaw),
  DifferentIcon: stripTsxExample(different_iconRaw),
  Variants: stripTsxExample(variantsRaw),
  WithLabel: stripTsxExample(with_labelRaw),
} as const;

export { Controlled } from "./controlled";
export { CustomTimeout } from "./custom-timeout";
export { Default } from "./default";
export { DifferentIcon } from "./different-icon";
export { Variants } from "./variants";
export { WithLabel } from "./with-label";
