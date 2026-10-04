import compactRaw from "./compact.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { EmptyState } from "@pisagor/react";`;

export const sources = {
  Compact: compactRaw,
  Compound: compoundRaw,
  Default: defaultRaw,
} as const;

export * from "./compact";
export * from "./compound";
export * from "./default";
