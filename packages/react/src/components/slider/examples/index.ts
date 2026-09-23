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

export const imports = `import { Slider } from "@pisagor/react/slider";`;

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

export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Marks } from "./marks";
export { MinMax } from "./min-max";
export { Range } from "./range";
export { Step } from "./step";
export { Variants } from "./variants";
export { Vertical } from "./vertical";
export { WithLabel } from "./with-label";
