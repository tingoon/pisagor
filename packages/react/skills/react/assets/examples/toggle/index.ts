import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import icon_groupRaw from "./icon-group.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Toggle } from "@pisagor/react/toggle";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  IconGroup: stripTsxExample(icon_groupRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithIcon: stripTsxExample(with_iconRaw),
} as const;

export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { IconGroup } from "./icon-group";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithIcon } from "./with-icon";
