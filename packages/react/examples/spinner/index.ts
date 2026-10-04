import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Spinner } from "@pisagor/react";`;

export const sources = {
  Sizes: sizesRaw,
} as const;

export * from "./sizes";
