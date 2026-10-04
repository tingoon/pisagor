import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Progress } from "@pisagor/react";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Indeterminate: stripTsxExample(indeterminateRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  WithLabel: stripTsxExample(with_labelRaw),
} as const;

export * from "./controlled";
export * from "./default";
export * from "./indeterminate";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./with-label";
