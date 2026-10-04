import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import info_tipRaw from "./info-tip.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import separatorRaw from "./separator.tsx?raw";

export const imports = `import { DataList } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  InfoTip: info_tipRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Separator: separatorRaw,
} as const;

export * from "./compound";
export * from "./default";
export * from "./info-tip";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./separator";
