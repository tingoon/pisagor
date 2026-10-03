import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import iconRaw from "./icon.astro?raw";
import productRaw from "./product.astro?raw";

export const imports = `---
import { Card } from "@pisagor/astro/card";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Icon: stripAstroExample(iconRaw),
  Product: stripAstroExample(productRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Icon } from "./icon.astro";
export { default as Product } from "./product.astro";
