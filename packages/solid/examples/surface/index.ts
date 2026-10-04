import defaultRaw from "./default.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import paddingRaw from "./padding.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_form_controlsRaw from "./with-form-controls.tsx?raw";

export const imports = `import { Surface } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  Nested: nestedRaw,
  Padding: paddingRaw,
  Variants: variantsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;

export * from "./default";
export * from "./nested";
export * from "./padding";
export * from "./variants";
export * from "./with-form-controls";
