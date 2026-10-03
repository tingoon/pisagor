import { stripTsxExample } from "@pisagor/utils";
import custom_colorRaw from "./custom-color.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Status } from "@pisagor/react/status";`;

export const sources = {
  CustomColor: stripTsxExample(custom_colorRaw),
  CustomSize: stripTsxExample(custom_sizeRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithIcon: stripTsxExample(with_iconRaw),
} as const;

export { CustomColor } from "./custom-color";
export { CustomSize } from "./custom-size";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithIcon } from "./with-icon";
