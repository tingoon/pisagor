import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { Presence } from "@pisagor/react/presence";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export { Default } from "./default";
