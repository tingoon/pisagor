import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import thicknessRaw from "./thickness.tsx?raw";
import with_valueRaw from "./with-value.tsx?raw";

export const imports = `import { CircularProgress } from "@pisagor/react";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Indeterminate: stripTsxExample(indeterminateRaw),
  Sizes: stripTsxExample(sizesRaw),
  Thickness: stripTsxExample(thicknessRaw),
  WithValue: stripTsxExample(with_valueRaw),
} as const;

export * from "./controlled";
export * from "./default";
export * from "./indeterminate";
export * from "./sizes";
export * from "./thickness";
export * from "./with-value";
