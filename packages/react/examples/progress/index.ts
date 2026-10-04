import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Progress } from "@pisagor/react";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithLabel: with_labelRaw,
} as const;

export * from "./controlled";
export * from "./default";
export * from "./indeterminate";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./with-label";
