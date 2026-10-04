import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Spinner } from "@pisagor/solid";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Sizes: stripTsxExample(sizesRaw),
} as const;

export * from "./default";
export * from "./sizes";
