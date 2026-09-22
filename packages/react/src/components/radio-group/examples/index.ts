import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_descriptionRaw from "./with-description.tsx?raw";

export const imports = `import { RadioGroup } from "@pisagor/react/radio-group";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Variants: stripTsxExample(variantsRaw),
  WithDescription: stripTsxExample(with_descriptionRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Variants } from "./variants";
export { WithDescription } from "./with-description";
