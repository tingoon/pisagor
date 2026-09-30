import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import disabledRaw from "./disabled.astro?raw";
import loadingRaw from "./loading.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { Button } from "@pisagor/astro/button";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Disabled: stripAstroExample(disabledRaw),
  Loading: stripAstroExample(loadingRaw),
  Sizes: stripAstroExample(sizesRaw),
  Variants: stripAstroExample(variantsRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Disabled } from "./disabled.astro";
export { default as Loading } from "./loading.astro";
export { default as Sizes } from "./sizes.astro";
export { default as Variants } from "./variants.astro";
