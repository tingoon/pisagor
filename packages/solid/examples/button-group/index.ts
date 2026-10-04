import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import with_separatorRaw from "./with-separator.tsx?raw";

export const imports = `import { ButtonGroup } from "@pisagor/solid";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Nested: stripTsxExample(nestedRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  WithSeparator: stripTsxExample(with_separatorRaw),
} as const;

export * from "./default";
export * from "./nested";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./with-separator";
