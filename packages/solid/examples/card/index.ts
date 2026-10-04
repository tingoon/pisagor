import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import productRaw from "./product.tsx?raw";

export const imports = `import { Card } from "@pisagor/solid";`;

export const sources = {
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Icon: iconRaw,
  Product: productRaw,
} as const;

export * from "./custom-spacing";
export * from "./default";
export * from "./icon";
export * from "./product";
