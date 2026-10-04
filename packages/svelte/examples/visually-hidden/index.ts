import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { VisuallyHidden } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
} as const;

export { default as Default } from "./default.svelte";
