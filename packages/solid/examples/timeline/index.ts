import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";

export const imports = `import { Timeline } from "@pisagor/solid";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  Horizontal: stripTsxExample(horizontalRaw),
} as const;

export * from "./compound";
export * from "./default";
export * from "./horizontal";
