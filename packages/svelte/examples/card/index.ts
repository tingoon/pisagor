import { stripSvelteExample } from "@pisagor/utils";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import productRaw from "./product.svelte?raw";

export const imports = `import { Card } from "@pisagor/svelte";`;

export const sources = {
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
  Icon: stripSvelteExample(iconRaw),
  Product: stripSvelteExample(productRaw),
} as const;

export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Icon } from "./icon.svelte";
export { default as Product } from "./product.svelte";
