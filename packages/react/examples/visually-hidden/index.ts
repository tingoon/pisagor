import defaultRaw from "./default.tsx?raw";

export const imports = `import { VisuallyHidden } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
} as const;

export * from "./default";
