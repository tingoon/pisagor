import { stripTsxExample } from "@pisagor/utils";
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
  Collapsible: stripTsxExample(collapsibleRaw),
  Default: stripTsxExample(defaultRaw),
  EdgeHandle: stripTsxExample(edge_handleRaw),
  Handle: stripTsxExample(handleRaw),
  MinMax: stripTsxExample(min_maxRaw),
  MultiplePanels: stripTsxExample(multiple_panelsRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
} as const;

export * from "./collapsible";
export * from "./default";
export * from "./edge-handle";
export * from "./handle";
export * from "./min-max";
export * from "./multiple-panels";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
