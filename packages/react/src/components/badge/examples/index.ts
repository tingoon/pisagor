import { stripTsxExample } from "@pisagor/utils";
import custom_colorRaw from "./custom-color.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import pillRaw from "./pill.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import with_spinnerRaw from "./with-spinner.tsx?raw";

export const imports = `import { Badge } from "@pisagor/react/badge";`;

export const sources = {
  CustomColor: stripTsxExample(custom_colorRaw),
  Default: stripTsxExample(defaultRaw),
  Pill: stripTsxExample(pillRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithLink: stripTsxExample(with_linkRaw),
  WithSpinner: stripTsxExample(with_spinnerRaw),
} as const;

export { CustomColor } from "./custom-color";
export { Default } from "./default";
export { Pill } from "./pill";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithLink } from "./with-link";
export { WithSpinner } from "./with-spinner";
