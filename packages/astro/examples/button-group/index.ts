import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import orientation_horizontalRaw from "./orientation-horizontal.astro?raw";
import orientation_verticalRaw from "./orientation-vertical.astro?raw";
import with_separatorRaw from "./with-separator.astro?raw";

export const imports = `---
import { ButtonGroup } from "@pisagor/astro/button-group";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  OrientationHorizontal: stripAstroExample(orientation_horizontalRaw),
  OrientationVertical: stripAstroExample(orientation_verticalRaw),
  WithSeparator: stripAstroExample(with_separatorRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as OrientationHorizontal } from "./orientation-horizontal.astro";
export { default as OrientationVertical } from "./orientation-vertical.astro";
export { default as WithSeparator } from "./with-separator.astro";
