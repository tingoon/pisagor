import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { ContextMenu } from "@pisagor/solid";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export * from "./default";
