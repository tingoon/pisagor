import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";

export const imports = `import { Scrollspy } from "@pisagor/react/scrollspy";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Horizontal: stripTsxExample(horizontalRaw),
} as const;

export { Default } from "./default";
export { Horizontal } from "./horizontal";
