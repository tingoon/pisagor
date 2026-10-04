import { stripTsxExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import productRaw from "./product.tsx?raw";

export const imports = `import { Card } from "@pisagor/react";`;

export const sources = {
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Icon: stripTsxExample(iconRaw),
  Product: stripTsxExample(productRaw),
} as const;

export * from "./custom-spacing";
export * from "./default";
export * from "./icon";
export * from "./product";
