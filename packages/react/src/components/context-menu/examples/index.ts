import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { ContextMenu } from "@pisagor/react/context-menu";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export { Default } from "./default";
