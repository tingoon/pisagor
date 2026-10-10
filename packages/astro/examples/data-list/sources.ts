import compoundRaw from "./compound.astro?raw";
import defaultRaw from "./default.astro?raw";
import orientation_horizontalRaw from "./orientation-horizontal.astro?raw";
import orientation_verticalRaw from "./orientation-vertical.astro?raw";
import separatorRaw from "./separator.astro?raw";

export const imports = `---
import { DataList } from "@pisagor/astro";
---`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Separator: separatorRaw,
} as const;
