import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import wrappingRaw from "./wrapping.tsx?raw";

export const imports = `import { NavigationMenu } from "@pisagor/react/navigation-menu";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Wrapping: stripTsxExample(wrappingRaw),
} as const;

export { Default } from "./default";
export { Wrapping } from "./wrapping";
