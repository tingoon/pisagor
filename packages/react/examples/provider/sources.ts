import defaultRaw from "./default.tsx?raw";

export const imports = `import { Provider } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
} as const;
