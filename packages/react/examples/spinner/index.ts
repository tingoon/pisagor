import { stripTsxExample } from "@pisagor/utils";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Spinner } from "@pisagor/react";`;

export const sources = {
  Sizes: stripTsxExample(sizesRaw),
} as const;

export * from "./sizes";
