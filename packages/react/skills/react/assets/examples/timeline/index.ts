import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";

export const imports = `import { Timeline } from "@pisagor/react/timeline";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  Horizontal: stripTsxExample(horizontalRaw),
} as const;

export { Compound } from "./compound";
export { Default } from "./default";
export { Horizontal } from "./horizontal";
