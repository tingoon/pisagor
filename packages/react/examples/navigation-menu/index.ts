import defaultRaw from "./default.tsx?raw";
import wrappingRaw from "./wrapping.tsx?raw";

export const imports = `import { NavigationMenu } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Wrapping: wrappingRaw,
} as const;

export * from "./default";
export * from "./wrapping";
