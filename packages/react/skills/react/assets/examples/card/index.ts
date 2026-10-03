import { stripTsxExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import productRaw from "./product.tsx?raw";

export const imports = `import { Card } from "@pisagor/react/card";`;

export const sources = {
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Icon: stripTsxExample(iconRaw),
  Product: stripTsxExample(productRaw),
} as const;

export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Icon } from "./icon";
export { Product } from "./product";
