import defaultRaw from "./default.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import with_imageRaw from "./with-image.astro?raw";

export const imports = `---
import { Avatar } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Sizes: sizesRaw,
  WithImage: with_imageRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Sizes } from "./sizes.astro";
export { default as WithImage } from "./with-image.astro";
