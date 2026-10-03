import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { Spinner } from "@pisagor/svelte/spinner";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Sizes: stripSvelteExample(sizesRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Sizes } from "./sizes.svelte";
