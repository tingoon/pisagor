import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import custom_timeoutRaw from "./custom-timeout.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import different_iconRaw from "./different-icon.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Clipboard } from "@pisagor/solid";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  CustomTimeout: stripTsxExample(custom_timeoutRaw),
  Default: stripTsxExample(defaultRaw),
  DifferentIcon: stripTsxExample(different_iconRaw),
  Variants: stripTsxExample(variantsRaw),
  WithLabel: stripTsxExample(with_labelRaw),
} as const;

export * from "./controlled";
export * from "./custom-timeout";
export * from "./default";
export * from "./different-icon";
export * from "./variants";
export * from "./with-label";
