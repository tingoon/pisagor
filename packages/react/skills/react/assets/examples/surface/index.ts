import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import paddingRaw from "./padding.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_form_controlsRaw from "./with-form-controls.tsx?raw";

export const imports = `import { Surface } from "@pisagor/react/surface";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Nested: stripTsxExample(nestedRaw),
  Padding: stripTsxExample(paddingRaw),
  Variants: stripTsxExample(variantsRaw),
  WithFormControls: stripTsxExample(with_form_controlsRaw),
} as const;

export { Default } from "./default";
export { Nested } from "./nested";
export { Padding } from "./padding";
export { Variants } from "./variants";
export { WithFormControls } from "./with-form-controls";
