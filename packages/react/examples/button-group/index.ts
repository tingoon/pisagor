import defaultRaw from "./default.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import with_separatorRaw from "./with-separator.tsx?raw";

export const imports = `import { ButtonGroup } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Nested: nestedRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithSeparator: with_separatorRaw,
} as const;

export * from "./default";
export * from "./nested";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./with-separator";
