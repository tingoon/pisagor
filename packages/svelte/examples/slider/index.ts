import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import marksRaw from "./marks.svelte?raw";
import min_maxRaw from "./min-max.svelte?raw";
import rangeRaw from "./range.svelte?raw";
import stepRaw from "./step.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import verticalRaw from "./vertical.svelte?raw";
import with_labelRaw from "./with-label.svelte?raw";

export const imports = `import { Slider } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Marks: marksRaw,
  MinMax: min_maxRaw,
  Range: rangeRaw,
  Step: stepRaw,
  Variants: variantsRaw,
  Vertical: verticalRaw,
  WithLabel: with_labelRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Marks } from "./marks.svelte";
export { default as MinMax } from "./min-max.svelte";
export { default as Range } from "./range.svelte";
export { default as Step } from "./step.svelte";
export { default as Variants } from "./variants.svelte";
export { default as Vertical } from "./vertical.svelte";
export { default as WithLabel } from "./with-label.svelte";
