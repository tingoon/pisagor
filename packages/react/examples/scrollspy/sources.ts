import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";

export const imports = `import { Scrollspy } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;
