import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";
import without_handleRaw from "./without-handle.tsx?raw";

export const imports = `import { Sortable } from "@pisagor/react/sortable";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Horizontal: stripTsxExample(horizontalRaw),
  WithoutHandle: stripTsxExample(without_handleRaw),
} as const;

export { Default } from "./default";
export { Disabled } from "./disabled";
export { Horizontal } from "./horizontal";
export { WithoutHandle } from "./without-handle";
