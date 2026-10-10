import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import info_tipRaw from "./info-tip.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import separatorRaw from "./separator.svelte?raw";

export const imports = `import { DataList } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  InfoTip: info_tipRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Separator: separatorRaw,
} as const;
