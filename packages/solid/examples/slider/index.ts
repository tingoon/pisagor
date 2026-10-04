import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import marksRaw from "./marks.tsx?raw";
import min_maxRaw from "./min-max.tsx?raw";
import rangeRaw from "./range.tsx?raw";
import stepRaw from "./step.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Slider } from "@pisagor/solid";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Marks: stripTsxExample(marksRaw),
  MinMax: stripTsxExample(min_maxRaw),
  Range: stripTsxExample(rangeRaw),
  Step: stripTsxExample(stepRaw),
  Variants: stripTsxExample(variantsRaw),
  Vertical: stripTsxExample(verticalRaw),
  WithLabel: stripTsxExample(with_labelRaw),
} as const;

export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./marks";
export * from "./min-max";
export * from "./range";
export * from "./step";
export * from "./variants";
export * from "./vertical";
export * from "./with-label";
