import defaultRaw from "./default.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { Spinner } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Sizes: sizesRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Sizes } from "./sizes.svelte";
