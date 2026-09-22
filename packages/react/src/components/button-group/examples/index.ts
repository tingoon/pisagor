import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import with_separatorRaw from "./with-separator.tsx?raw";

export const imports = `import { ButtonGroup } from "@pisagor/react/button-group";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Nested: stripTsxExample(nestedRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  WithSeparator: stripTsxExample(with_separatorRaw),
} as const;

export { Default } from "./default";
export { Nested } from "./nested";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { WithSeparator } from "./with-separator";
