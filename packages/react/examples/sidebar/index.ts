import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { Sidebar } from "@pisagor/react/sidebar";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export { Default } from "./default";
