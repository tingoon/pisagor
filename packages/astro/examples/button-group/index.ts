import defaultRaw from "./default.astro?raw";
import orientation_horizontalRaw from "./orientation-horizontal.astro?raw";
import orientation_verticalRaw from "./orientation-vertical.astro?raw";
import with_separatorRaw from "./with-separator.astro?raw";

export const imports = `---
import { ButtonGroup } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithSeparator: with_separatorRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as OrientationHorizontal } from "./orientation-horizontal.astro";
export { default as OrientationVertical } from "./orientation-vertical.astro";
export { default as WithSeparator } from "./with-separator.astro";
