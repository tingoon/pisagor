import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { VisuallyHidden } from "@pisagor/react/visually-hidden";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
} as const;

export { Default } from "./default";
