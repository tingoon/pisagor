import { stripTsxExample } from "@pisagor/utils";
import checkbox_groupRaw from "./checkbox-group.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Checkbox } from "@pisagor/solid";`;

export const sources = {
  CheckboxGroup: stripTsxExample(checkbox_groupRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Indeterminate: stripTsxExample(indeterminateRaw),
  Invalid: stripTsxExample(invalidRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export * from "./checkbox-group";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./indeterminate";
export * from "./invalid";
export * from "./variants";
