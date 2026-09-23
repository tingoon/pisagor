import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_indicatorRaw from "./custom-indicator.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import disabled_itemRaw from "./disabled-item.tsx?raw";
import indicator_on_hoverRaw from "./indicator-on-hover.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { SegmentGroup } from "@pisagor/react/segment-group";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  CustomIndicator: stripTsxExample(custom_indicatorRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  DisabledItem: stripTsxExample(disabled_itemRaw),
  IndicatorOnHover: stripTsxExample(indicator_on_hoverRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { CustomIndicator } from "./custom-indicator";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { DisabledItem } from "./disabled-item";
export { IndicatorOnHover } from "./indicator-on-hover";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { Variants } from "./variants";
