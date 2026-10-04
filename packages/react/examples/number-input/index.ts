import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import field_onlyRaw from "./field-only.tsx?raw";
import formattedRaw from "./formatted.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import mouse_wheelRaw from "./mouse-wheel.tsx?raw";
import rangeRaw from "./range.tsx?raw";
import scrubRaw from "./scrub.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import stepRaw from "./step.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { NumberInput } from "@pisagor/react";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  FieldOnly: stripTsxExample(field_onlyRaw),
  Formatted: stripTsxExample(formattedRaw),
  Invalid: stripTsxExample(invalidRaw),
  MouseWheel: stripTsxExample(mouse_wheelRaw),
  Range: stripTsxExample(rangeRaw),
  Scrub: stripTsxExample(scrubRaw),
  Sizes: stripTsxExample(sizesRaw),
  Step: stripTsxExample(stepRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./field-only";
export * from "./formatted";
export * from "./invalid";
export * from "./mouse-wheel";
export * from "./range";
export * from "./scrub";
export * from "./sizes";
export * from "./step";
export * from "./variants";
