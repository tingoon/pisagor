import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";
import without_handleRaw from "./without-handle.tsx?raw";

export const imports = `import { Sortable } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Horizontal: horizontalRaw,
  WithoutHandle: without_handleRaw,
} as const;

export * from "./default";
export * from "./disabled";
export * from "./horizontal";
export * from "./without-handle";
