import collapsibleRaw from "./collapsible.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import edge_handleRaw from "./edge-handle.tsx?raw";
import handleRaw from "./handle.tsx?raw";
import min_maxRaw from "./min-max.tsx?raw";
import multiple_panelsRaw from "./multiple-panels.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";

export const imports = `import { Resizable } from "@pisagor/solid";`;

export const sources = {
  Collapsible: collapsibleRaw,
  Default: defaultRaw,
  EdgeHandle: edge_handleRaw,
  Handle: handleRaw,
  MinMax: min_maxRaw,
  MultiplePanels: multiple_panelsRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
} as const;

export * from "./collapsible";
export * from "./default";
export * from "./edge-handle";
export * from "./handle";
export * from "./min-max";
export * from "./multiple-panels";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
