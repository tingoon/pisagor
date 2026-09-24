import { stripTsxExample } from "@pisagor/utils";
import avatar_groupRaw from "./avatar-group.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import countRaw from "./count.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import fallbacksRaw from "./fallbacks.tsx?raw";
import shapesRaw from "./shapes.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Avatar } from "@pisagor/react/avatar";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Count: stripTsxExample(countRaw),
  Default: stripTsxExample(defaultRaw),
  Fallbacks: stripTsxExample(fallbacksRaw),
  Group: stripTsxExample(avatar_groupRaw),
  Shapes: stripTsxExample(shapesRaw),
  Sizes: stripTsxExample(sizesRaw),
} as const;

export { Group } from "./avatar-group";
export { Compound } from "./compound";
export { Count } from "./count";
export { Default } from "./default";
export { Fallbacks } from "./fallbacks";
export { Shapes } from "./shapes";
export { Sizes } from "./sizes";
