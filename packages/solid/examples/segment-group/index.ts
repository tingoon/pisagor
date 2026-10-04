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

export const imports = `import { SegmentGroup } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomIndicator: custom_indicatorRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  DisabledItem: disabled_itemRaw,
  IndicatorOnHover: indicator_on_hoverRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Variants: variantsRaw,
} as const;

export * from "./compound";
export * from "./controlled";
export * from "./custom-indicator";
export * from "./default";
export * from "./disabled";
export * from "./disabled-item";
export * from "./indicator-on-hover";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./variants";
