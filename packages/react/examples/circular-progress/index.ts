import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import thicknessRaw from "./thickness.tsx?raw";
import with_valueRaw from "./with-value.tsx?raw";

export const imports = `import { CircularProgress } from "@pisagor/react";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  Thickness: thicknessRaw,
  WithValue: with_valueRaw,
} as const;

export * from "./controlled";
export * from "./default";
export * from "./indeterminate";
export * from "./sizes";
export * from "./thickness";
export * from "./with-value";
