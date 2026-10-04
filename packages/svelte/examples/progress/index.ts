import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import indeterminateRaw from "./indeterminate.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import with_labelRaw from "./with-label.svelte?raw";

export const imports = `import { Progress } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithLabel: with_labelRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Indeterminate } from "./indeterminate.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as WithLabel } from "./with-label.svelte";
