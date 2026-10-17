import Compound from "./compound.astro?raw";
import Default from "./default.astro?raw";
import OrientationHorizontal from "./orientation-horizontal.astro?raw";
import OrientationVertical from "./orientation-vertical.astro?raw";
import Separator from "./separator.astro?raw";

export const imports = `---
import { DataList } from "@pisagor/astro";
---`;

export const sources = {
  Compound,
  Default,
  OrientationHorizontal,
  OrientationVertical,
  Separator,
} as const;
