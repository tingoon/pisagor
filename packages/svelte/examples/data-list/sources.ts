import Compound from "./compound.svelte?raw";
import Default from "./default.svelte?raw";
import InfoTip from "./info-tip.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import Separator from "./separator.svelte?raw";

export const imports = `import { DataList } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Default,
  InfoTip,
  OrientationHorizontal,
  OrientationVertical,
  Separator,
} as const;
