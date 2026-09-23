import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconsRaw from "./with-icons.tsx?raw";

export const imports = `import { Tabs } from "@pisagor/react/tabs";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  Variants: stripTsxExample(variantsRaw),
  WithIcons: stripTsxExample(with_iconsRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { Variants } from "./variants";
export { WithIcons } from "./with-icons";
