import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import disabled_itemRaw from "./disabled-item.tsx?raw";
import font_weightRaw from "./font-weight.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";
import singleRaw from "./single.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import spacingRaw from "./spacing.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";

export const imports = `import { ToggleGroup } from "@pisagor/react/toggle-group";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  DisabledItem: stripTsxExample(disabled_itemRaw),
  FontWeight: stripTsxExample(font_weightRaw),
  Horizontal: stripTsxExample(horizontalRaw),
  Single: stripTsxExample(singleRaw),
  Sizes: stripTsxExample(sizesRaw),
  Spacing: stripTsxExample(spacingRaw),
  Variants: stripTsxExample(variantsRaw),
  Vertical: stripTsxExample(verticalRaw),
} as const;

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { DisabledItem } from "./disabled-item";
export { FontWeight } from "./font-weight";
export { Horizontal } from "./horizontal";
export { Single } from "./single";
export { Sizes } from "./sizes";
export { Spacing } from "./spacing";
export { Variants } from "./variants";
export { Vertical } from "./vertical";
