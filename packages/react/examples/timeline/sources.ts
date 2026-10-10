import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";

export const imports = `import { Timeline } from "@pisagor/react";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;
