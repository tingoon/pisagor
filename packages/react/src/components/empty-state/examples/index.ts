import { stripTsxExample } from "@pisagor/utils";
import compactRaw from "./compact.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { EmptyState } from "@pisagor/react/empty-state";`;

export const sources = {
  Compact: stripTsxExample(compactRaw),
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
} as const;

export { Compact } from "./compact";
export { Compound } from "./compound";
export { Default } from "./default";
