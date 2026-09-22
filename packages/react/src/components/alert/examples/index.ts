import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import custom_colorRaw from "./custom-color.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_actionRaw from "./with-action.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Alert } from "@pisagor/react/alert";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  CustomColor: stripTsxExample(custom_colorRaw),
  Default: stripTsxExample(defaultRaw),
  Variants: stripTsxExample(variantsRaw),
  WithAction: stripTsxExample(with_actionRaw),
  WithIcon: stripTsxExample(with_iconRaw),
} as const;

export { Compound } from "./compound";
export { CustomColor } from "./custom-color";
export { Default } from "./default";
export { Variants } from "./variants";
export { WithAction } from "./with-action";
export { WithIcon } from "./with-icon";
