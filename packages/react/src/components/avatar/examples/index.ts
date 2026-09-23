import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import fallbacksRaw from "./fallbacks.tsx?raw";
import shapesRaw from "./shapes.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Avatar } from "@pisagor/react/avatar";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Fallbacks: stripTsxExample(fallbacksRaw),
  Shapes: stripTsxExample(shapesRaw),
  Sizes: stripTsxExample(sizesRaw),
} as const;

export { Default } from "./default";
export { Fallbacks } from "./fallbacks";
export { Shapes } from "./shapes";
export { Sizes } from "./sizes";
